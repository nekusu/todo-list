import Project from './project.js';
import Task from './task.js';
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
	static openEditProjectForm(e) {
		if (e.target.classList.contains('edit')) {
			UI.showProjectForm(this.id);
		}
	}
	static editProject(e) {
		e.preventDefault();
		const form = e.target;
		const project = TodoList.getProjectById(form.dataset.id);
		const projectName = form.name.value.trim();
		if (!TodoList.contains(projectName) || project.name === projectName) {
			project.name = projectName;
			UI.editProject(form.dataset.id, projectName);
			form.dataset.id = UI.toId(projectName);
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
		e.stopPropagation();
		if (e.target.classList.contains('expand')) {
			if (this.classList.contains('expanded')) {
				this.classList.remove('expanded');
			} else {
				this.classList.add('expanded');
			}
		}
	}

	static addTask(e) {
		e.preventDefault();
		const form = e.target;
		const project = TodoList.getProject(UI.selectedProject);
		const taskName = form.name.value.trim();
		if (!project.contains(taskName)) {
			const task = new Task(taskName, project.name, form.description.value.trim(), form.date.value);
			project.addTask(task);
			UI.loadTasks(project.name);
			UI.hideTaskForm();
		} else {
			alert(`Task "${taskName}" already exists.`);
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
			TodoList.getTaskById(taskElement.dataset.id).toggleCheck();
		}
	}
	static openEditTaskForm(e) {
		if (e.target.classList.contains('edit')) {
			UI.showTaskForm(this.dataset.id);
		}
	}
	static editTask(e) {
		e.preventDefault();
		const form = e.target;
		const project = TodoList.getProject(UI.selectedProject);
		const task = project.getTaskById(form.dataset.id);
		const taskName = form.name.value.trim();
		if (!project.contains(taskName) || task.name == taskName) {
			task.edit(taskName, form.description.value.trim(), form.date.value);
			UI.loadTasks(project.name);
			UI.hideTaskForm();
		} else {
			alert(`Task "${taskName}" already exists.`);
		}
	}
	static deleteTask(e) {
		if (e.target.classList.contains('delete')) {
			const taskElement = UI.getClosestParent(e.target, '.task');
			const task = TodoList.getTaskById(taskElement.dataset.id);
			TodoList.getProject(task.project).deleteTask(task.name);
			UI.removeTask(taskElement, task.project);
		}
	}
}

export default Events;
