import TodoList from './todoList.js';

class Project {
	constructor(name) {
		this.name = name;
		this.tasks = [];
	}

	contains(taskName) {
		return this.tasks.some(task => task.name === taskName);
	}
	getTask(taskName) {
		return this.tasks.find(task => task.name === taskName);
	}
	addTask(task) {
		if (!this.contains(task.name)) {
			this.tasks.push(task);
		}
		TodoList.save();
	}
	deleteTask(taskName) {
		this.tasks = this.tasks.filter(task => task.name !== taskName);
		TodoList.save();
	}
}

export default Project;
