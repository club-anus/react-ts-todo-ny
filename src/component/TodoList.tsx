import * as React from 'react';
import {Todo} from '../reducer/todo';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addTodo, updateTodo, deleteTodo} from '../action/todo';
import {rootState} from '../reducer/index'

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
        this.setState({
            inputText: '',
        })
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
        const todoListJSX = todoList.map((item, index) => {
            const __handleUpdate = () => {this._updateTodo(index)}
            const __handleDelete = () => {this._deleteTodo(index)}
            return (
                <div key={item.id} >
                    <span onClick={__handleUpdate}>{item.isDone ? <s>{item.text}</s>:item.text}</span>
                    <input type='button' onClick={__handleDelete} value={'X'}/>
                </div>
            )
        })
        return (
            <div>
                <h1>TodoAppZ</h1>
                <input type='text' value={this.state.inputText} onChange={this._handleInput}/>
                <input type='button' onClick={this._addTodo} value={'追加'}/>
                {todoListJSX}
            </div>
        )
    }
}

const mapStateToProps = (state:rootState) => {
    return {
        todoList: state.todoState,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addTodo: (text:string) => dispatch(addTodo(text)),
        updateTodo: (id:number) => dispatch(updateTodo(id)),
        deleteTodo: (id:number) => dispatch(deleteTodo(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)