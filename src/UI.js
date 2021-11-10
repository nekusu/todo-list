import Project from './project.js';
import Events from './events.js';

class UI {
	static projects = document.querySelector('#projects');
	static projectForm = document.querySelector('#project-form');

	static loadHomePage() {
		UI.loadProjects();
		UI.setEventListeners();
	}

	static loadProjects() {
		UI.appendProject(new Project('All tasks'));
	}

	static setEventListeners() {
		const addProjectButton = document.querySelector('#add-project');
		const cancelProjectButton = document.querySelector('#project-form button[title="Cancel"]');
		addProjectButton.addEventListener('click', () => UI.showProjectForm());
		cancelProjectButton.addEventListener('click', () => UI.hideProjectForm());
		UI.projectForm.addEventListener('submit', Events.addProject);
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
		UI.projects.appendChild(projectElement);
	}

	static showProjectForm(projectId = '') {
		if (projectId) {
			const project = document.querySelector(`#${projectId}`);
			UI.projects.insertBefore(UI.projectForm, project);
		} else {
			UI.projects.appendChild(UI.projectForm);
		}
		const form = UI.projectForm.querySelector('form');
		const formInput = UI.projectForm.querySelector('input');
		form.id = projectId;
		UI.projectForm.style.display = 'block';
		formInput.focus();
	}

	static hideProjectForm() {
		const form = UI.projectForm.querySelector('form');
		form.reset();
		UI.projectForm.style.display = 'none';
		UI.projects.insertBefore(UI.projectForm, UI.projects.firstElementChild);
	}
}

export default UI;
