import Events from './events.js';
import TodoList from './todoList.js';
import Sortable from 'sortablejs';
import { isToday, isBefore, parseISO, set } from 'date-fns';

class UI {
	static main = document.querySelector('main');
	static projects = document.querySelector('#projects');
	static projectForm = document.querySelector('#project-form');
	static tasks = document.querySelector('#tasks');
	static taskForm = document.querySelector('#task-form');
	static dateGroups = {
		expired: document.querySelector('#expired'),
		today: document.querySelector('#today'),
		upcoming: document.querySelector('#upcoming'),
		unknown: document.querySelector('#unknown')
	};
	static noProjects = UI.tasks.querySelector('#no-projects');
	static noTasks = UI.tasks.querySelector('#no-tasks');
	static bottomBar = document.querySelector('#bottom-bar');
	static selectedProject;

	static loadHomePage() {
		UI.#createSortableGroups();
		UI.#setEventListeners();
		UI.loadProjects();
		UI.#setFixedElementsWidth();
	}

	static loadProjects() {
		for (const project of TodoList.projects) {
			UI.appendProject(project);
		}
		UI.projects.children[1].firstElementChild.click();
	}

	static loadTasks(projectName) {
		const form = UI.taskForm.querySelector('form');
		UI.#setProjectName(projectName);
		UI.#clearTasks();
		UI.#checkTasks(projectName)
		UI.updateTaskCount(projectName);
		if (projectName === 'All tasks' || form.dataset.id) {
			UI.hideTaskForm();
		}
		if (projectName === 'All tasks') {
			if (TodoList.projects.length > 1) {
				UI.noProjects.classList.add('hidden');
			} else {
				UI.noProjects.classList.remove('hidden');
				UI.noTasks.classList.add('hidden');
			}
			UI.#hideAddTaskButton();
		} else {
			UI.noProjects.classList.add('hidden');
			UI.#showAddTaskButton();
		}
		for (const task of TodoList.getProject(projectName).tasks) {
			UI.appendTask(task);
		}
	}

	static appendProject(project) {
		const createButtons = () => {
			const dragButton = UI.#createButton('drag_indicator', 'drag');
			const editButton = UI.#createButton('edit', 'edit');
			const deleteButton = UI.#createButton('delete_forever', 'delete');
			const buttons = UI.#createElement('div', { class: 'buttons' }, dragButton, editButton, deleteButton);
			return buttons;
		}
		const name = UI.#createElement('p', { class: 'name' }, project.name);
		const tasks = UI.#createElement('p', { class: 'tasks' }, TodoList.getTaskCount(project.name));
		const container = UI.#createElement('div', { class: 'container' }, name, tasks);
		const box = UI.#createElement('div', { class: 'box' }, container, project.name === 'All tasks' ? null : createButtons())
		const projectElement = UI.#createElement('div', { class: 'project' }, box);
		projectElement.dataset.id = project.id;
		[Events.selectProject, Events.openEditProjectForm, Events.deleteProject].forEach(fun => projectElement.addEventListener('click', fun));
		UI.projects.appendChild(projectElement);
		projectElement.firstElementChild.click();
	}
	static editProject(projectId, projectName) {
		const projectElement = UI.projects.querySelector(`.project[data-id="${projectId}"`)
		const nameElement = projectElement.querySelector('.name');
		nameElement.textContent = projectName;
		projectElement.firstElementChild.click();
	}
	static removeProject(projectElement) {
		projectElement.remove();
		if (UI.selectedProject === 'All tasks') {
			UI.loadTasks('All tasks');
		}
		UI.updateTaskCount();
	}

	static appendTask(task) {
		const isTodayDate = isToday(parseISO(task.date));
		const createHeader = (task) => {
			const createCheckBox = () => {
				const uncheckedIcon = UI.#createIcon('radio_button_unchecked', 'uncheck');
				const checkedIcon = UI.#createIcon('task_alt', 'check');
				const checkBox = UI.#createElement('button', { class: 'checkbox icon-button' }, uncheckedIcon, checkedIcon);
				return checkBox;
			};
			const createButtons = () => {
				const expandButton = UI.#createButton('expand_more', 'expand');
				const editButton = UI.#createButton('edit', 'edit');
				const deleteButton = UI.#createButton('delete', 'delete');
				const buttons = UI.#createElement('div', { class: 'buttons' }, expandButton, editButton, deleteButton);
				if (!task.description && (!task.date || isTodayDate)) {
					expandButton.classList.add('hidden');
				}
				return buttons;
			};
			const dragButton = UI.#createButton('drag_indicator', 'drag');
			const name = UI.#createElement('p', { class: 'name' }, task.name);
			const container = UI.#createElement('div', { class: 'container' }, dragButton, createCheckBox(), name);
			const header = UI.#createElement('div', { class: 'header' }, container, createButtons());
			if (UI.selectedProject === 'All tasks' || task.date && !isTodayDate) {
				dragButton.classList.add('hidden');
			}
			return header;
		}
		const createInfo = (task) => {
			const description = UI.#createElement('p', { class: 'description' }, task.description);
			const date = UI.#createElement('p', { class: 'date' }, task.date, UI.#createIcon('today'));
			if (!task.description) {
				description.classList.add('hidden');
			}
			if (!task.date || isTodayDate) {
				date.classList.add('hidden');
			}
			const info = UI.#createElement('div', { class: 'info' }, description, date);
			return info;
		}
		const header = createHeader(task);
		const info = createInfo(task);
		const taskElement = UI.#createElement('div', { class: 'task' }, header, info);
		const group = UI.#findDateGroup(task);
		if (group === 'expired') {
			taskElement.classList.add('expired');
		}
		if (task.isChecked) {
			taskElement.classList.add('checked');
		}
		taskElement.dataset.id = task.id;
		[Events.expand, Events.checkTask, Events.openEditTaskForm, Events.deleteTask].forEach(fun => taskElement.addEventListener('click', fun));
		UI.dateGroups[group].classList.remove('hidden');
		UI.dateGroups[group].lastElementChild.appendChild(taskElement);
	}
	static removeTask(taskElement, projectName) {
		if (!(taskElement.parentNode.children.length - 1)) {
			const dateGroup = UI.getClosestParent(taskElement, '.date-group');
			dateGroup.classList.add('hidden');
		}
		taskElement.remove();
		UI.#checkTasks(projectName);
		UI.updateTaskCount(projectName);
	}

	static updateTaskCount(...projects) {
		setTimeout(() => {
			projects.push('All tasks');
			for (const project of projects) {
				const projectElement = UI.projects.querySelector(`.project[data-id="${TodoList.getProject(project).id}"`);
				const tasks = projectElement.querySelector('.tasks');
				tasks.textContent = TodoList.getTaskCount(project);
			}
		}, 50);
	}

	static showProjectForm(projectId = '') {
		const form = UI.projectForm.querySelector('form');
		if (form.dataset.id) {
			UI.#showProject(form.dataset.id);
		}
		if (projectId) {
			const projectElement = UI.projects.querySelector(`.project[data-id="${projectId}"`);
			form.name.value = TodoList.getProjectById(projectId).name;
			UI.#hideProject(projectId);
			UI.projects.insertBefore(UI.projectForm, projectElement);
		} else {
			UI.projects.appendChild(UI.projectForm);
			form.reset();
		}
		form.dataset.id = projectId;
		UI.projectForm.classList.remove('hidden');
		form.name.focus();
	}
	static hideProjectForm() {
		const form = UI.projectForm.querySelector('form');
		if (form.dataset.id) {
			UI.#showProject(form.dataset.id);
			form.dataset.id = '';
		}
		UI.projectForm.classList.add('hidden');
		UI.projects.insertBefore(UI.projectForm, UI.projects.firstElementChild);
	}

	static showTaskForm(taskId = '') {
		const title = UI.taskForm.querySelector('h1');
		const projectName = UI.taskForm.querySelector('.project-name');
		const form = UI.taskForm.querySelector('form');
		if (taskId) {
			const task = TodoList.getTaskById(taskId);
			for (const property in task) {
				if (form[property]) {
					form[property].value = task[property];
				}
			}
			title.firstChild.nodeValue = 'Edit task';
			projectName.classList.add('hidden');
		} else {
			title.firstChild.nodeValue = 'Add task to ';
			projectName.classList.remove('hidden');
			form.reset();
		}
		form.dataset.id = taskId;
		UI.tasks.classList.add('hidden');
		UI.taskForm.classList.add('visible');
		form.name.focus();
	}
	static hideTaskForm() {
		UI.tasks.classList.remove('hidden');
		UI.taskForm.classList.remove('visible');
	}

	static getClosestParent(element, selector) {
		if (element === document) {
			return null;
		} else if (element.parentNode.matches(selector)) {
			return element.parentNode;
		}
		return UI.getClosestParent(element.parentNode, selector);
	}

	static #createSortableGroups() {
		const handleClass = '.drag';
		const animationTime = 300;
		const fallback = true;
		Sortable.create(UI.projects, {
			group: 'projects',
			handle: handleClass,
			animation: animationTime,
			draggable: '.project:not(.project[data-id="0"])',
			forceFallback: fallback,
			onEnd: UI.#saveProjectsOrder
		});
		Sortable.create(UI.dateGroups.today.lastElementChild, {
			group: 'today-tasks',
			handle: handleClass,
			animation: animationTime,
			draggable: '.task',
			forceFallback: fallback,
			onEnd: UI.#saveTasksOrder
		});
		Sortable.create(UI.dateGroups.unknown.lastElementChild, {
			group: 'unknown-tasks',
			handle: handleClass,
			animation: animationTime,
			draggable: '.task',
			forceFallback: fallback,
			onEnd: UI.#saveTasksOrder
		});
	}

	static #saveProjectsOrder() {
		const indexArray = [...UI.projects.children].map(project => +project.dataset.id).filter(id => id >= 0);
		TodoList.setProjects(indexArray.map(i => TodoList.getProjectById(i)));
		if (UI.selectedProject === 'All tasks') {
			UI.loadTasks('All tasks');
		}
	}
	static #saveTasksOrder() {
		const indexArray = [...UI.tasks.querySelectorAll('.task')].map(task => +task.dataset.id);
		const project = TodoList.getProject(UI.selectedProject);
		project.setTasks(indexArray.map(i => project.getTaskById(i)));
	}

	static #clearTasks() {
		for (const group in UI.dateGroups) {
			UI.dateGroups[group].classList.add('hidden');
			UI.dateGroups[group].lastElementChild.innerHTML = '';
		}
	}

	static #checkTasks(projectName) {
		const project = TodoList.getProject(projectName);
		if (project.tasks.length) {
			UI.noTasks.classList.add('hidden');
		} else if (projectName === UI.selectedProject || !TodoList.getAllTasks().length) {
			UI.noTasks.classList.remove('hidden');
		}
	}

	static #setProjectName(name) {
		const elements = document.querySelectorAll('.project-name');
		for (const element of elements) {
			element.textContent = name;
		}
		UI.selectedProject = name;
	}

	static #showProject(projectId) {
		const project = UI.projects.querySelector(`.project[data-id="${projectId}"`);
		project.classList.remove('hidden');
	}
	static #hideProject(projectId) {
		const project = UI.projects.querySelector(`.project[data-id="${projectId}"`);
		project.classList.add('hidden');
	}

	static #showAddTaskButton() {
		const addTaskButton = document.querySelector('#add-task');
		addTaskButton.classList.remove('hidden');
	}
	static #hideAddTaskButton() {
		const addTaskButton = document.querySelector('#add-task');
		addTaskButton.classList.add('hidden');
	}

	static #findDateGroup(task) {
		if (!task.date) {
			return 'unknown';
		}
		else if (isToday(parseISO(task.date))) {
			return 'today';
		} else if (isBefore(parseISO(task.date), set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }))) {
			return 'expired';
		}
		return 'upcoming';
	}

	static #setFixedElementsWidth() {
		UI.taskForm.style.width = `${UI.main.clientWidth * 0.9}px`;
		UI.bottomBar.style.width = `${UI.main.clientWidth * 0.9}px`;
	}

	static #setEventListeners() {
		const sidebar = document.querySelector('#sidebar');
		const openProjectsButton = document.querySelector('#open-projects');
		const addProjectButton = document.querySelector('#add-project');
		const cancelProjectButton = document.querySelector('#project-form button[title="Cancel"]');
		const addTaskButton = document.querySelector('#add-task');
		const cancelTaskButton = document.querySelector('#task-form button[type="button"]');
		Object.values(UI.dateGroups).forEach(group => group.addEventListener('click', Events.expand));
		openProjectsButton.addEventListener('click', () => sidebar.classList.toggle('open'))
		addProjectButton.addEventListener('click', () => UI.showProjectForm());
		cancelProjectButton.addEventListener('click', () => UI.hideProjectForm());
		UI.projectForm.addEventListener('submit', e => {
			if (e.target.dataset.id) {
				Events.editProject(e);
			} else {
				Events.addProject(e);
			}
		});
		addTaskButton.addEventListener('click', () => UI.showTaskForm());
		cancelTaskButton.addEventListener('click', () => UI.hideTaskForm());
		UI.taskForm.addEventListener('submit', e => {
			if (e.target.dataset.id) {
				Events.editTask(e);
			} else {
				Events.addTask(e);
			}
		});
		window.addEventListener('resize', UI.#setFixedElementsWidth);
	}

	static #createElement(tag, attributes, ...children) {
		const element = document.createElement(tag);
		for (const key in attributes) {
			element.setAttribute(key, attributes[key]);
		}
		for (const child of children) {
			if (!child) {
				continue;
			} else if (typeof child === 'string') {
				element.appendChild(document.createTextNode(child));
			} else {
				element.appendChild(child);
			}
		}
		return element;
	}
	static #createIcon(icon, _class = '') {
		const iconElement = UI.#createElement('span', { class: `material-icons-round ${_class}` }, icon);
		return iconElement;
	}
	static #createButton(icon, _class = '', text = '') {
		const iconElement = icon ? UI.#createIcon(icon) : null;
		const button = UI.#createElement('button', { class: _class }, iconElement, text);
		if (!text) {
			button.title = _class[0].toUpperCase() + _class.substring(1);
			button.classList.add('icon-button');
		}
		return button;
	}
}

export default UI;
