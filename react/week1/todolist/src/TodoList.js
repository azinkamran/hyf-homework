import React from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
          {
        id: "1p124",
        text: "Get out of bed, Wed Sep 13 2017",
        copmlete: false
      },
      {
       id: "2p123",
        text: "Brush teeth, Thu Sep 14 2017",
        copmlete: false
      },
      {
       id: "3p123",
        text: "Eat breakfast, Fri Sep 15 2017",
        copmlete: false
      }
    ]
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value="";

    //console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key){
      var filteredItems =this.state.items.filter(function (item){
          return(item.key !==key)
      })

      this.setState({
          items:filteredItems
      })
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            ></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} 
                   delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
