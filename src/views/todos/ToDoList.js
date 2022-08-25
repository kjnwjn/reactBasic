import React from "react";
import "./todoList.scss";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";

class ToDoList extends React.Component {
    state = {
        listTodo: [
            {
                id: "todo1",
                title: "Doing homework",
            },
            {
                id: "todo2",
                title: "Writing code",
            },
            {
                id: "todo3",
                title: "Playing sport",
            },
        ],
        editTodo: {},
    };

    handleAddToDo = (todoItem) => {
        this.setState({
            listTodo: [...this.state.listTodo, todoItem],
        });
    };
    handleDeleteToDo = (todoItem) => {
        let currentList = this.state.listTodo;
        currentList = currentList.filter((item) => item.id !== todoItem.id);
        this.setState({
            listTodo: currentList,
        });
        toast.success("delete todo item successfully");
    };

    handleEditTodo = (e, item) => {
        let { editTodo, listTodo } = this.state
        let isEmptyEditTodo = Object.keys(this.state.editTodo).length === 0;

        if (!isEmptyEditTodo && editTodo.id === item.id) {
            let listTodoCopy = [...listTodo]
            let objIndex = listTodoCopy.findIndex(obj => obj.id === item.id);
            listTodoCopy[objIndex].title = editTodo.title
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            });
            toast.success('Save successfully')
            return;
        }

        this.setState({
            editTodo: item,
        });

    };

    handleEditInput = (e) => {
        let editTodoCopy = this.state.editTodo;
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy,
        });
    };
    render() {
        let listTodos = this.state.listTodo;
        let editTodo = this.state.editTodo;
        let isEmptyEditTodo = Object.keys(this.state.editTodo).length === 0;
        console.log(isEmptyEditTodo);

        return (
            <>
                <p>
                    TodoApp
                </p>
                <div className="container">
                    <AddToDo handleAddToDo={this.handleAddToDo} />
                    <ul className="to-do-list">
                        {listTodos &&
                            listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <li className="to-do-item" key={item.id}>
                                        {isEmptyEditTodo ? (
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                        ) : (
                                            <>
                                                {item.id === editTodo.id ? (
                                                    <span>
                                                        {index + 1}-{" "}
                                                        <input
                                                            value={item.title}
                                                            onChange={(e) => this.handleEditInput(e)}
                                                        />
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                )}
                                            </>
                                        )}
                                        <div className="list-btn">
                                            <button
                                                type="button"
                                                className="btn__edit"
                                                onClick={(e) => this.handleEditTodo(e, item)}
                                            >
                                                {isEmptyEditTodo === false && item.id === editTodo.id ? 'Save' : 'Edit'}
                                            </button>
                                            <button
                                                type="button"
                                                className="btn__delete"
                                                onClick={() => this.handleDeleteToDo(item)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </>
        );
    }
}

export default ToDoList;
