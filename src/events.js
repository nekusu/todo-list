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
		} else {
			alert(`Project "${projectName}" already exists.`);
		}
	}
}

export default Events;
