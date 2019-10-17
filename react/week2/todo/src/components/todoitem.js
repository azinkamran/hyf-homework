import React from 'react'
import './todoitem.css'

export default class TodoItem extends React.Component{
    constructor(){
        super()

    }

    removeTodo(id){
        this.props.removeTodo(id)
    }
    render(){
        const completeStyle={
            fontStyle:'italic',
            color:'#cdcdcd',
            textDecoration:'Line-through'
        }

        return(
            <div className="todowrapper">
                <input 
                    type="checkbox" 
                    checked={this.props.todo.completed}  
                    onChange={()=>this.props.handleChange(this.props.todo.id)}
                />
                <button className="removeTodo" onClick={(e)=>this.removeTodo(this.props.id)}>Remove</button>
                <p style={this.props.todo.completed ? completeStyle:null}>{this.props.todo.text}</p>
            </div>
        )
    }
}