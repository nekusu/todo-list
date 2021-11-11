class TodoList {
	static projects = TodoList.#load() || [];

	static save() {
		localStorage.setItem('todoList', JSON.stringify(TodoList.projects));
	}
	static #load() {
		return JSON.parse(localStorage.getItem('todoList'));
	}

	static contains(projectName) {
		return TodoList.projects.some(project => project.name === projectName);
	}
	static getProject(projectName) {
		return TodoList.projects.find(project => project.name === projectName);
	}
	static setProjects(projects) {
		TodoList.projects = projects;
		TodoList.save();
	}
	static addProject(project) {
		if (!TodoList.contains(project.name)) {
			TodoList.projects.push(project);
		}
		TodoList.save();
	}
	static deleteProject(projectName) {
		TodoList.projects = TodoList.projects.filter(project => project.name !== projectName);
		TodoList.save();
	}
	static getTotalTasks() {
		return TodoList.projects.reduce((total, project) => total + project.tasks.length, 0);
	}
}

export default TodoList;
