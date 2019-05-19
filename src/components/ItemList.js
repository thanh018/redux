import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class ItemList extends Component {

    toggleItem = (todo) => {
        this.props.onToggle(todo);
        // console.log(todo);
    }

    deleteItem = (todo) => {
        // var updateItems = this.state.items.filter(function(item){
        //     return (item.key !== key);
        // })
        
        // this.setState({
        //     items: updateItems
        // });

        // console.log(updateItems);
        this.props.onDelete(todo);

        
    }

    componentDidMount() {
        this.props.onFetchData();
    }

    render() {
        // console.log(this.props.todos);
        var {todos} = this.props;
        var renderTodo = todos.map((todo, index) => {
            return (
                <li key={index}
                >
                    <span 
                        className="item-text"
                        style={{textDecoration:todo.completed ? 'line-through': 'none'}}
                        onClick={() => this.toggleItem(todo)}
                    >{todo.text}</span>
                    <span className="removeBtn" onClick={() => this.deleteItem(todo)}>x</span>
                    
                </li>
            )
        });


        return (
            <div className="item-list">
                <ul className="Itemlist">
                    {renderTodo}
                </ul>
            </div>
            );
        }
    }

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps =  (dispatch, props) => {
	return {
        onToggle: (todo) => {
            dispatch(actions.toggleTodo(todo));
        },
        onDelete: (todo) => {
            dispatch(actions.deleteTodo(todo));
        },
        onFetchData: async () => {
            dispatch(await actions.fetchData());
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
    
