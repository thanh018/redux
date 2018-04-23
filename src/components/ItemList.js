import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {

    render() {
        // console.log(this.props.todos);
        var {todos} = this.props;
        var renderTodo = todos.map((todo, index) => {
            return (
                <li key={index}>
                    {todo.text}
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

export default connect(mapStateToProps, null)(ItemList);
    
