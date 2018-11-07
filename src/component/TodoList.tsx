import * as React from 'react';
import {Todo} from '../reducer/todo';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addTodo, updateTodo, deleteTodo} from '../action/todo';

type TodoListProps = {
    todoList:Todo[],
    addTodo: (text:string) => void,
    updateTodo: (id:number) => void,
    deleteTodo: (id:number) => void,
}

type TodoListState = {
    inputText: string,
}

class TodoList extends React.Component<TodoListProps, TodoListState> {
    constructor(props: TodoListProps) {
        super(props);
        this.state = {
            inputText: '',
        }
        this._addTodo = this._addTodo.bind(this)
        this._updateTodo = this._updateTodo.bind(this)
        this._deleteTodo = this._deleteTodo.bind(this)
        this._handleInput = this._handleInput.bind(this)
    }

    private _addTodo():void {
        let text:string = this.state.inputText
        console.log(text)
        this.props.addTodo(text)
    }

    private _updateTodo(id:number):void {
        console.log(id)
        this.props.updateTodo(id)
    }

    private _deleteTodo(id: number):void {
        console.log(id)
        this.props.deleteTodo(id)
    }

    private _handleInput(e: React.FormEvent<HTMLInputElement>): void {
        this.setState({
            inputText: e.currentTarget.value,
        })
    }

    public render() {
        const todoList = this.props.todoList;
        const todoListJSX = todoList.map((item) => {
            return (
                item.isDone ? 
                <div key={item.id}>{item.text}</div> :
                <s key={item.id}>{item.text}</s>
            )
        })
        return (
            <div>
                <h1>TodoAppZ</h1>
                <input type='text' onChange={this._handleInput}/>
                <input type='button' onClick={this._addTodo} />
                {todoListJSX}
            </div>
        )
    }
}

const mapStateToProps = (state:Todo[]) => {
    return {
        todoList: state,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addTodo: (text:string) => addTodo(text),
        updateTodo: (id:number) => updateTodo(id),
        deleteTodo: (id:number) => deleteTodo(id),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)