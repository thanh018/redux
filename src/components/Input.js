import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';



import ItemList from './ItemList';

class Input extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: '',
    //         key: 0,
    //         isCompleted: false
    //     };
    // }


    addItem = (e) => {
        e.preventDefault();
        
        if(this.inputElement.value !== "") {
            var newTodo = {
                text: this.inputElement.value,
                key: Date.now(),
                completed: false
            };
            
            this.inputElement.value = "";
            this.props.onAddTodo(newTodo);
        }
				
        
        
       
    }

    

    


    render() {
        
        return (
            <div className="">
                <form id="Form" className="InputForm" onSubmit={this.addItem}>
                    <h2>Todo</h2>
                    <input
                        type="text"
                        id="myInput"
                        name="txtName"
                        placeholder="Enter item..."
                        ref={(a) => this.inputElement = a}
                    />
                    <button type="submit" className="addBtn"  >Add</button>
                </form>
                <ItemList
                    
                ></ItemList>
                
            </div>
            );
        }
		}
		
const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddTodo: (todo) => {
			dispatch(actions.addTodo(todo));
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);

