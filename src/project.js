class Project {
	static #lastId = localStorage.getItem('lastProjectId') || 0;

	constructor(name) {
		this.name = name;
		this.tasks = [];
		this.id = +Project.#lastId;
		if (name) {
			localStorage.setItem('lastProjectId', ++Project.#lastId);
		}
	}

	setName(name) {
		this.name = name;
		this.save();
	}
	contains(taskName) {
		return this.tasks.some(task => task.name === taskName);
	}
	getTask(taskName) {
		return this.tasks.find(task => task.name === taskName);
	}
	getTaskById(taskId) {
		return this.tasks.find(task => task.id === +taskId);
	}
	setTasks(tasks) {
		this.tasks = tasks;
		this.save();
	}
	addTask(...tasks) {
		for (const task of tasks) {
			if (!this.contains(task.name)) {
				this.tasks.push(task);
			}
		}
		this.tasks.sort((a, b) => {
			return new Date(a.date) - new Date(b.date);
		})
		this.save();
	}
	deleteTask(taskName) {
		this.tasks = this.tasks.filter(task => task.name !== taskName);
		this.save();
	}
	async save() {
		const { default: todoList } = await import('./todoList.js');
		todoList.save();
	}
}

export default Project;
