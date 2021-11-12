import './style.css';
import Project from './project.js';
import Task from './task.js';
import TodoList from './todoList.js';
import UI from './UI.js';

const getStartedButton = document.querySelector('#get-started');

function getStarted() {
	const getStarted = new Project('Get started');
	getStarted.addTask(
		new Task(
			'Create your first project! Expand to see more ->',
			getStarted.name,
			'Create a new project clicking on "Add project" in the projects menu.'),
		new Task(
			'Add your first task!',
			getStarted.name,
			'Click on "Add task" in the top right corner, set the name, a description and the due date.'),
		new Task(
			'Drag and drop!',
			getStarted.name,
			'You can drag your projects and Today\'s tasks to order them however you want.'),
		new Task(
			'Check my GitHub!',
			getStarted.name,
			'Don\'t forget to take a look at my other projects! Click on the GitHub button in the bottom right corner.')
	);
	TodoList.addProject(getStarted);
	UI.appendProject(getStarted);
	UI.updateTaskCount();
}

function setDefaultProject() {
	const allTasks = new Project('All tasks');
	TodoList.addProject(allTasks);
}

getStartedButton.addEventListener('click', getStarted);
setDefaultProject();
UI.loadHomePage();
