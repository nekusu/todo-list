import './style.css';
import Project from './project.js';
import Task from './task.js';
import TodoList from './todoList.js';
import UI from './UI.js';

function setDefaultProject() {
	const allTasks = new Project('All tasks');
	TodoList.addProject(allTasks);
	if (TodoList.projects.length <= 1) {
		const getStarted = new Project('Get started');
		getStarted.addTask(new Task('Add your first task! Expand to see more ->', 'First, create a new project clicking on "Add project", then click on "Add task", set the name, a description and the due date. That\'s it, have fun! Don\'t forget to visit my Github!'));
		TodoList.addProject(getStarted);
	}
}

setDefaultProject();
UI.loadHomePage();
