import Project from './project.js';
import Events from './events.js';
import Sortable from 'sortablejs';
import TodoList from './todoList.js';
import lod from 'lod';

class UI {
	static projects = document.querySelector('#projects');
	static projectForm = document.querySelector('#project-form');

	static loadHomePage() {
		UI.loadProjects();
		UI.setEventListeners();
	}

	static loadProjects() {
		UI.appendProject(new Project('All tasks'));
		if (!TodoList.projects.length) {
			TodoList.setProjects([new Project('Personal'), new Project('Work')])
		}
		for (const project of TodoList.projects) {
			UI.appendProject(project);
		}
		UI.resetIds(UI.projects.children);
		UI.projects.children[1].firstElementChild.click();
		Sortable.create(UI.projects, {
			group: 'projects',
			handle: '.drag',
			animation: 300,
			draggable: '.project:not(#All-tasks)',
			swapThreshold: 0.75,
			onEnd: function () {
				const indexArray = [...UI.projects.children].map(project => +project.dataset.id).filter(id => id >= 0);
				TodoList.setProjects(lod(TodoList.projects, indexArray));
				UI.resetIds(UI.projects.children);
			}
		});
	}

	static setEventListeners() {
		const addProjectButton = document.querySelector('#add-project');
		const cancelProjectButton = document.querySelector('#project-form button[title="Cancel"]');
		addProjectButton.addEventListener('click', () => UI.showProjectForm());
		cancelProjectButton.addEventListener('click', () => UI.hideProjectForm());
		UI.projectForm.addEventListener('submit', e => {
			if (e.target.dataset.id) {
				Events.editProject(e);
			} else {
				Events.addProject(e);
			}
		});
	}

	static createElement(tag, attributes, ...children) {
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

	static createIcon(icon, _class = '') {
		const iconElement = UI.createElement('span', { class: `material-icons-round ${_class}` }, icon);
		return iconElement;
	}

	static createButton(icon, _class = '', text = '') {
		const iconElement = icon ? UI.createIcon(icon) : null;
		const button = UI.createElement('button', { class: _class }, iconElement, text);
		if (!text) {
			button.title = _class[0].toUpperCase() + _class.substring(1);
			button.classList.add('icon-button');
		}
		return button;
	}

	static appendProject(project) {
		const createButtons = () => {
			const dragButton = UI.createButton('drag_indicator', 'drag');
			const editButton = UI.createButton('edit', 'edit');
			const deleteButton = UI.createButton('delete_forever', 'delete');
			const buttons = UI.createElement('div', { class: 'buttons' }, dragButton, editButton, deleteButton);
			return buttons;
		}
		const name = UI.createElement('p', { class: 'name' }, project.name);
		const tasks = UI.createElement('p', { class: 'tasks' }, `${project.tasks.length} tasks`);
		const container = UI.createElement('div', { class: 'container' }, name, tasks);
		const box = UI.createElement('div', { class: 'box' }, container, project.name === 'All tasks' ? null : createButtons())
		const projectElement = UI.createElement('div', { class: 'project' }, box);
		projectElement.id = project.name.replace(/\s/g, '-');
		[Events.selectProject, Events.openEditForm, Events.deleteProject].forEach(fun => projectElement.addEventListener('click', fun));
		UI.projects.appendChild(projectElement);
		projectElement.firstElementChild.click();
	}

	static showProject(projectId) {
		const project = UI.projects.querySelector(`#${projectId}`);
		if (project) {
			project.classList.remove('hidden');
		}
	}
	static hideProject(projectId) {
		const project = UI.projects.querySelector(`#${projectId}`);
		if (project) {
			project.classList.add('hidden');
		}
	}

	static showProjectForm(projectId = '') {
		const form = UI.projectForm.querySelector('form');
		const formInput = UI.projectForm.querySelector('input');
		if (form.dataset.id) {
			UI.showProject(form.dataset.id);
		}
		if (projectId) {
			const project = document.querySelector(`#${projectId}`);
			const nameElement = project.querySelector('.name');
			UI.hideProject(projectId);
			UI.projects.insertBefore(UI.projectForm, project);
			formInput.value = nameElement.textContent;
		} else {
			UI.projects.appendChild(UI.projectForm);
			form.reset();
		}
		form.dataset.id = projectId;
		UI.projectForm.classList.remove('hidden');
		formInput.focus();
	}

	static hideProjectForm() {
		const form = UI.projectForm.querySelector('form');
		if (form.dataset.id) {
			UI.showProject(form.dataset.id);
		}
		UI.projectForm.classList.add('hidden');
		UI.projects.insertBefore(UI.projectForm, UI.projects.firstElementChild);
	}

	static resetIds(array) {
		let i = -1;
		for (const item of array) {
			if (!item.dataset.id || item.dataset.id >= -1) {
				item.dataset.id = i++;
			}
		}
	}
}

export default UI;