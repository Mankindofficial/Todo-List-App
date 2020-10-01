import React from 'react';
import TodoItem from './TodoItem';

const Todo = (props) => {

	return(
		props.todos.map(todo => {
	  	return <TodoItem key={todo.id} todos={todo} markComplete={props.markComplete} del={props.del}/>
		})
	);
}

export default Todo;