import Project from './project.js';
import TodoList from './todoList.js';
import UI from './UI.js';

class Events {
	static addProject(e) {
		e.preventDefault();
		const projectName = e.target[0].value.trim();
		if (!TodoList.contains(projectName) && projectName !== 'All tasks') {
			const project = new Project(projectName);
			TodoList.addProject(project);
			UI.appendProject(project);
			UI.hideProjectForm();
			UI.resetIds(UI.projects.children);
		} else {
			alert(`Project "${projectName}" already exists.`);
		}
	}
	static selectProject(e) {
		if (e.target.parentNode.classList.contains('project')) {
			const siblings = [...this.parentNode.children].filter(child => child.id !== 'project-form');
			for (const sibling of siblings) {
				if (e.target.parentNode === sibling) {
					sibling.classList.add('selected');
				} else {
					sibling.classList.remove('selected');
				}
			}
		}
	}
	static openEditForm(e) {
		if (e.target.classList.contains('edit')) {
			UI.showProjectForm(this.id);
		}
	}
	static editProject(e) {
		e.preventDefault();
		const projectName = e.target[0].value.trim();
		if (!TodoList.contains(projectName) && projectName !== 'All tasks') {
			const projectId = projectName.replace(/\s/g, '-');
			const oldProjectName = e.target.dataset.id.replace(/-/g, ' ');
			const projectElement = UI.projects.querySelector(`#${e.target.dataset.id}`);
			const nameElement = projectElement.querySelector(`.name`);
			projectElement.id = projectId;
			e.target.dataset.id = projectId;
			nameElement.textContent = projectName;
			TodoList.getProject(oldProjectName).name = projectName;
			UI.hideProjectForm();
		} else {
			alert(`Project "${projectName}" already exists.`);
		}
	}
	static deleteProject(e) {
		if (e.target.classList.contains('delete')) {
			if (this.classList.contains('selected')) {
				this.previousElementSibling.firstElementChild.click();
			}
			const projectName = this.id.replace(/-/g, ' ');
			TodoList.deleteProject(projectName);
			this.remove();
			UI.resetIds(UI.projects.children);
		}
	}
}

export default Events;
