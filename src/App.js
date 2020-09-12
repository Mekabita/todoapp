import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';
import './css/App.css';
import '@fortawesome/fontawesome-free/css/all.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist: [],
            current: 'all',
            searchList: [],
            searchText: ''
        };
    }
    addTodo = (todo) => {
        const listItem = {
            id: Date.now(),
            text: todo,
            completed: false
        };
        this.setState({
            todolist: [
                ...this.state.todolist,
                listItem
            ]
        });
        console.log(this.state.todolist);

    };

    onChecked = (id) => {
        const newListItem = this.state.todolist.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            } else 
                return item;
            


        });
        this.setState({todolist: newListItem});
    };

    changeCurrent = (current) => {
        this.setState({current});
    }

    completedTodo = () => {
        const completeItem = this.state.todolist.filter((item) => {
            if (item.completed == true) {
                return item;
            }
        });
        return completeItem;
    }
    activeTodo = () => {
        const activeItem = this.state.todolist.filter((item) => {
            if (item.completed == false) {
                return item;
            }
        });
        return activeItem;
    }
    componentDidUpdate() {
        const stringTodoList = JSON.stringify(this.state.todolist);
        localStorage.setItem('list', stringTodoList);
    }
    componentDidMount() {
        let list = [];
            try {
                list = JSON.parse(localStorage.getItem('list'));
                if (! list) 
                    list = [];
                


            } catch {
                list = [];
            }
            this.setState( {
                todolist : list
            }
    );
}

deleteTodo = (id) => {
    let newList = this.state.todolist.filter((item) => {
        if (item.id != id) {
            return item;
        }

    });
    this.setState({todolist: newList});
}
searchTodo = (e) => {
    console.log(e.target.value);
    this.setState({searchText: e.target.value}) //
    let searchedItem = this.state.todolist.filter((item) => {
        if (item.text.includes(e.target.value)) {
            return item;
        }
    });
    this.setState({searchList: searchedItem});

}
deleteAll = (e) => {
    console.log(e);
    console.log('hello');
    this.setState({todolist: []});
}

render() {
    let filteredList = [];
    switch (this.state.current) {
        case 'completed': filteredList = this.completedTodo();
            break;
        case 'active': filteredList = this.activeTodo();
            break;
        default: filteredList = this.state.todolist;
    }

    if (this.state.searchText) 
        filteredList = this.state.searchList


    


    const todolistprops = {
        todolist: filteredList,
        onChecked: this.onChecked
    }

    return (
        <div className="main">
            <h1>TODO APP</h1>
            <TodoSearch searchTodo={
                this.searchTodo
            }/>
            <button className="btn"
                onClick={
                    (e) => this.changeCurrent('all')
            }>All</button>
            <button className="btn"
                onClick={
                    (e) => this.changeCurrent('active')
            }>Active</button>
            <button className="btn"
                onClick={
                    (e) => this.changeCurrent('completed')
            }>Completed</button>


            <TodoForm addTodo={
                this.addTodo
            }/>
            <TodoList deleteTodo={
                    this.deleteTodo
                }
                current={
                    this.state.current
                }
                deleteAll={
                    this.deleteAll
                }
                {...todolistprops}/>

        </div>
    );
}}export default App;
