class TodoList {
	static projects = [];

	static contains(projectName) {
		return TodoList.projects.some(project => project.name === projectName);
	}
	static getProject(projectName) {
		return TodoList.projects.find(project => project.name === projectName);
	}
	static addProject(project) {
		if (!TodoList.contains(project)) {
			TodoList.projects.push(project);
		}
	}
	static deleteProject(projectName) {
		TodoList.projects = TodoList.projects.filter(project => project.name !== projectName);
	}
	static getTotalTasks() {
		return TodoList.projects.reduce((total, project) => total + project.tasks.length, 0);
	}
}

export default TodoList;
