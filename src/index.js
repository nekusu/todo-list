import './style.css';
import Project from './project.js';
import Task from './task.js';
import TodoList from './todoList.js';
import UI from './UI.js';

const getStartedButton = document.querySelector('#get-started');

function getStarted() {
	const getStarted = new Project('Get started');
	const date = new Date();
	const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];
	const today = `${year}-${month + 1}-${day}`;
	getStarted.addTask(
		new Task(
			'Create your first project! Expand to see more ->',
			getStarted.name,
			'Create a new project clicking on "Add project" in the projects menu.',
			today),
		new Task(
			'Add your first task!',
			getStarted.name,
			'Click on "Add task" in the top right corner, set the name, a description and the due date.',
			today),
		new Task(
			'Drag and drop!',
			getStarted.name,
			'You can drag your projects and Today\'s tasks to order them however you want.',
			today),
		new Task(
			'Check my GitHub!',
			getStarted.name,
			'Don\'t forget to take a look at my other projects! Click on the GitHub button in the bottom right corner.',
			today)
	);
	TodoList.addProject(getStarted);
	UI.appendProject(getStarted);
	UI.updateTaskCount();
}

function setDefaultProject() {
	if (!TodoList.contains('All tasks')) {
		TodoList.addProject(new Project('All tasks'));
	}
}

getStartedButton.addEventListener('click', getStarted);
setDefaultProject();
UI.loadHomePage();
