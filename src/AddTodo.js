import React from 'react';

class AddTodo extends React.Component {
	state = {
		title:'',
		hover:true
	}

	onSubmit = (e) => {
		e.preventDefault();
		if(this.state.title.length > 0){
			this.props.addTodo(this.state.title);
			this.setState({ title: '' });
		}		
	}
	onChange = (e) => this.setState({[e.target.name]: e.target.value});

	render() {

		const textStyle = {
			flex:'10',
			padding:'5px',
		}
		const submitStyle = {
			flex:'1',
			padding:'6px 8px',
			outline:'none',
			border:'outset 2px black',
		}
		const hover = (e) => {
			e.target.style.background = (this.state.hover === true) ? "#40B0B0":""
			e.target.style.color = (this.state.hover === true) ? "#fff":""
			this.setState({hover: !this.state.hover});
		}

		return(
			<form style={{display:'flex', marginBottom:'5px'}} onSubmit={this.onSubmit}>
				<input  
					style={textStyle}
					onChange={this.onChange}  
					type='text'
					name='title'
					value= {this.state.title}
					placeholder='Add Todo Here'/>
				<input
					style={submitStyle} 
					onMouseEnter={hover}
					onMouseLeave={hover}
					type='submit' 
					name='submit'/>
			</form>
		);
	}

}

export default AddTodo;