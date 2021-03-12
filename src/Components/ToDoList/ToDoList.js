import React, { useState } from 'react';

const ToDoList = (props) => {
    const [isChecked, setIsChecked] = useState(false)
    const handleCheckBox = (e) => {
        setIsChecked(e.target.checked)
    }
    let style = {}
    if (isChecked) {
        style = {
            textDecoration: "line-through",
            backgroundColor: "grey"
        }
    }

    return (
        <div>
            <div style={style} className="input-group-text mb-2  justify-content-between ">
                <input onChange={handleCheckBox} className="mr-3" type="checkbox" aria-label="Checkbox for following text input" />
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