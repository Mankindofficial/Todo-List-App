import React from 'react';

	const TodoItem = (props) => {

		const divStyle = {
			background: '#f4f4f4',
			padding: '5px',
			display:'flex',
			alignItems:'center',
			borderBottom: '1px #333 dotted',
			textDecoration: props.todos.completed ? 'line-through' : 'none'
		}
		const btnStyle = {
			color:'white',
			border:'none',
			marginLeft:'auto',
			cursor:'pointer',
			padding:'4px 8px',
			borderRadius:'50%',
			background:'#40B0B0',
		}

		const {title, id} = props.todos;

		return(
			<div style={divStyle}>
			 <input type="checkbox" style={{marginRight:'5px'}} onClick={props.markComplete.bind(this, id)}/>
			 <p style={{marginBottom:'4px'}}>{title}</p>
			 <button style={btnStyle} onClick={props.del.bind(this, id)}>x</button>
		  </div>
		);
	}

export default TodoItem;