import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './Todo';
import Header from './Header'
import AddTodo from './AddTodo';
import About from './About';
import Footer from './Footer';

class App extends React.Component{
  constructor(){
    super() 
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => response.json())
    .then(todo => this.setState({todos: todo}));
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }

  delTodo = (id) => {
    // this.setState({todos:  [...this.state.todos.filter(todo => todo.id !== id)]})
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todo => {
      console.log(todo);
      this.setState({todos:  [...this.state.todos.filter(todo => todo.id !== id)]
    })})
  }

  addTodo = (title) => {
    const newTodo = {
      id:12,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
    // fetch('https://jsonplaceholder.typicode.com/todos', {
    //   method:'POST',
    //   body: JSON.stringify({
    //     id:1,
    //     title: title,
    //     completed: false
    //   })
    // })
    // .then(response => response.json())
    // .then(todo => this.setState({ todos: [...this.state.todos, todo] }));
  }

  render(){

    return (
      <Router>
        <Header/>
        <Route exact path='/' render={props => (
          <>
            <AddTodo addTodo={this.addTodo}/>
            <Todo todos={this.state.todos} markComplete={this.markComplete} del={this.delTodo}/>
          </>
        )} />
        <Route path='/about' component={About}/>
        <Footer/>
      </Router>
    );
  }
  
}

export default App;