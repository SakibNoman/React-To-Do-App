import React, { useState } from 'react';
import ToDoList from '../ToDoList/ToDoList';

const Home = () => {

    const [list, setList] = useState([]);

    let inputValue = '';
    const takeInput = (e) => {
        inputValue = e.target.value;
    }

    let newItem = '';
    const addNewItem = () => {
        if (inputValue.length > 0) {
            newItem = [inputValue, ...list]
            setList(newItem);
        }
    }

    const handleCheckBox = (e) => {
        const isChecked = e.target.checked
        console.log(isChecked);
    }


    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                </div>
                <input onChange={takeInput} type="text" placeholder="Create a new Todo" className="form-control" aria-label="Text input with checkbox" />
                <div className="input-group-prepend">
                    <button onClick={addNewItem} className="btn btn-outline-secondary" type="button" id="button-addon1">Add</button>
                </div>
            </div>
            {
                list.map(each => <ToDoList note={each} handleCheckBox={handleCheckBox} ></ToDoList>)
            }
        </div>
    );
};

export default Home;