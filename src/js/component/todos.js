import React, { useState, useEffect } from "react";
export function Todos() {
	const [tasks, setTasks] = useState([]);
	const [value, setValue] = useState("");

	const onValueChange = ({ target: { value } }) => {
		setValue(value);
	};
	const update = e => {
		e.preventDefault();
		setValue("");
	};

	const pMethod = i => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jason", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(i)
		})
			.then(response => response.json())
			.then(i => {
				console.log("Success:", i);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jason")
			.then(r => r.json())
			.then(data => setTasks(data));
	});

	const inputHandle = val => {
		const data = [
			...tasks,
			{
				label: val,
				done: false
			}
		];

		pMethod(data);
	};

	const deleteLabel = val => {
		const newTasks = [...tasks];
		newTasks.splice(val, 1);
		setTasks(newTasks);

		const data = [...newTasks];

		pMethod(data);
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
								e.keyCode === 13 && inputHandle(e.target.value)
							}
						/>
					</form>
					<div className="list-group">
						{tasks === null
							? "Loading..."
							: tasks.map((t, index) => (
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
