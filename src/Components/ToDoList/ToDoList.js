import React from 'react';

const ToDoList = (props) => {

    return (
        <div>
            <div className="input-group-text mb-2  justify-content-between ">
                <input onChange={props.handleCheckBox} className="mr-3" type="checkbox" aria-label="Checkbox for following text input" />
                <div class="input-group-prepend text-left">
                    {props.note}
                </div>
                <div className="text-center flex-grow-1" ></div>
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary ml-2" type="button" id="button-addon1">X</button>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;