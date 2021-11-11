import TodoList from './todoList.js';

class Storage {
	static saveTodoList() {
		localStorage.setItem('todoList', JSON.stringify(TodoList));
	}
}

export default Storage;
