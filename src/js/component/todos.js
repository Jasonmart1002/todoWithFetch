import React, { useState } from "react";
export function Todos() {
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState("");
    const deleteLabel = ind => {
        const newTasks = [...tasks];
        newTasks.splice(ind, 1);
        setTasks(newTasks);
        console.log(newTasks);
    };
    const onValueChange = ({ target: { value } }) => {
        setValue(value);
    };
    const update = e => {
        e.preventDefault();
        setValue("");
    };
    return (
        <div className="container d-flex justify-content-center p-5">
            <div className="row">
                <div className="col">
                    <h1>TODO list</h1>
                    <form onSubmit={update}>
                        <input
                            value={value}
                            onChange={onValueChange}
                            placeholder="Add a task"
                            className="Input"
                            onKeyDown={e =>
                                e.keyCode === 13 &&
                                setTasks(
                                    tasks.concat({
                                        label: e.target.value
                                    })
                                )
                            }
                        />
                    </form>
                    <div className="list-group">
                        {tasks === null
                            ? "Loading..."
                            : tasks.map((t, index, myarr) => (
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action d-flex justify-content-left"
                                        key={index}
                                        onClick={() => {
                                            deleteLabel(index);
                                        }}>
                                        {t.label}
                                    </a>
                              ))}
                    </div>
                </div>
            </div>
        </div>
    );
}