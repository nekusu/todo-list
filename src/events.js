import Project from './project.js';
import TodoList from './todoList.js';
import UI from './UI.js';

class Events {
	static addProject(e) {
		e.preventDefault();
		const projectName = e.target[0].value.trim();
		if (!TodoList.contains(projectName)) {
			const project = new Project(projectName);
			TodoList.addProject(project);
			UI.appendProject(project);
			UI.hideProjectForm();
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
			const projectName = TodoList.getProjectById(e.target.parentNode.id).name;
			UI.loadTasks(projectName);
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
		if (!TodoList.contains(projectName)) {
			TodoList.getProjectById(e.target.dataset.id).name = projectName;
			UI.editProject(e.target.dataset.id, projectName);
			e.target.dataset.id = UI.toId(projectName);
			UI.hideProjectForm();
		} else {
			alert(`Project "${projectName}" already exists.`);
		}
	}
	static deleteProject(e) {
		if (e.target.classList.contains('delete')) {
			const projectName = TodoList.getProjectById(this.id).name;
			TodoList.deleteProject(projectName);
			if (this.classList.contains('selected')) {
				this.previousElementSibling.firstElementChild.click();
			}
			UI.removeProject(this);
		}
	}

	static expand(e) {
		if (e.target.classList.contains('expand')) {
			if (this.classList.contains('expanded')) {
				this.classList.remove('expanded');
			} else {
				this.classList.add('expanded');
			}
		}
	}

	static checkTask(e) {
		if (e.target.classList.contains('checkbox')) {
			if (this.classList.contains('checked')) {
				this.classList.remove('checked', 'expanded');
			} else {
				this.classList.add('checked');
			}
			const taskElement = UI.getClosestParent(e.target, '.task');
			console.log(TodoList);
			TodoList.getTaskById(+taskElement.id).toggleCheck();
		}
	}
	static deleteTask(e) {
		if (e.target.classList.contains('delete')) {
			const taskElement = UI.getClosestParent(e.target, '.task');
			const task = TodoList.getTaskById(+taskElement.id);
			TodoList.getProject(task.project).deleteTask(task.name);
			UI.removeTask(taskElement);
		}
	}
}

export default Events;
