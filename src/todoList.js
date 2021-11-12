import Project from './project.js';
import Task from './task.js';

class TodoList {
	static projects = TodoList.#load() || [];

	static save() {
		TodoList.updateAllTasks();
		localStorage.setItem('todoList', JSON.stringify(TodoList.projects));
	}
	static #load() {
		let projects = JSON.parse(localStorage.getItem('todoList'));
		if (projects) {
			projects = projects.map(project => {
				project.tasks = project.tasks.map(task => Object.assign(new Task(), task));
				return Object.assign(new Project(), project);
			});
			return projects;
		}
	}

	static contains(projectName) {
		return TodoList.projects.some(project => project.name === projectName);
	}
	static getProject(projectName) {
		return TodoList.projects.find(project => project.name === projectName);
	}
	static getProjectById(projectId) {
		const projectName = projectId.replace(/-/g, ' ');
		return TodoList.getProject(projectName);
	}
	static setProjects(projects) {
		TodoList.projects = projects;
		TodoList.save();
	}
	static addProject(...projects) {
		for (const project of projects) {
			if (!TodoList.contains(project.name)) {
				TodoList.projects.push(project);
			}
		}
		TodoList.save();
	}
	static deleteProject(projectName) {
		TodoList.projects = TodoList.projects.filter(project => project.name !== projectName);
		TodoList.save();
	}
	static getTask(taskName) {
		const projects = TodoList.projects.filter(project => project.name !== 'All tasks');
		for (const project of projects) {
			const task = project.getTask(taskName);
			if (task) return task;
		}
	}
	static getTaskById(taskId) {
		const projects = TodoList.projects.filter(project => project.name !== 'All tasks');
		for (const project of projects) {
			const task = project.getTaskById(taskId);
			if (task) return task;
		}
	}
	static getAllTasks() {
		return TodoList.projects.filter(project => project.name !== 'All tasks').reduce((tasks, project) => tasks.concat(project.tasks), []);
	}
	static getTaskCount(projectName) {
		const amount = TodoList.getProject(projectName).tasks.length;
		return `${amount ? amount : 'No'} task${amount === 1 ? '' : 's'}`;
	}
	static updateAllTasks() {
		TodoList.getProject('All tasks').tasks = TodoList.getAllTasks();
	}
}

export default TodoList;
