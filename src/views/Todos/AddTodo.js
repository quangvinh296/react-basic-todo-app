import React from "react";
import { toast } from 'react-toastify';



class AddTodo extends React.Component {
    state = {
        title: '',
    }


    handleChangeTitleTodo = ((event) => {
        this.setState({
            title: event.target.value
        })
    })

    handleAddTodo = (event) => {
        // event.preventDefault()
        if (!this.state.title) {
            toast.error("Missing title's Todo title")
            return;
        }

        this.props.addNewTodo({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        })

        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleChangeTitleTodo(event)} />
                <button className="add" type="button"
                    onClick={(event) => this.handleAddTodo(event)}>
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo;