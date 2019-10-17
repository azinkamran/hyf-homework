import React from 'react';
import './App.css';
import Header from './components/Header'
import TodoInput from './components/todoinput';
import TodoItem from './components/todoitem'
import Counter from './components/Counter';



class App extends React.Component {

  constructor(){
    super();

    this.state={
      todos: [
        {id:0, text:"Get Out of bed" , completed:true},
        {id:1, text:"Wash your teeth", completed:false},
        {id:2, text:"Eat breakfast", completed:false}
      ],
      nextId:3
    }

    this.handleChange=this.handleChange.bind(this)
    this.addTodo=this.addTodo.bind(this)
    this.removeTodo=this.removeTodo.bind(this)
  }

  handleChange(id){
    this.setState(prevState=>{
      const updateTodos=prevState.todos.map(todo=>{
        if(todo.id ===id){
          todo.completed=!todo.completed
        }
        return todo
      })
      return {todos:updateTodos}
      })
      
  }

  addTodo(todoText){
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text:todoText})
    this.setState({
      todos: todos,
      nextId:++this.state.nextId
    })
  }

  removeTodo(id){
    this.setState({
      todos:this.state.todos.filter((todo,index)=>todo.id !==id )
    })
  }

  render(){
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <Counter />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo)=>{
              return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo ={this.removeTodo} handleChange={this.handleChange} />
            })
            }
          </ul>
        </div>
        
      </div>
    )
  }

}

export default App;
