import React, { useState } from "react";

export function Todos() {
	const [tasks, setTasks] = useState([]);

	return (
		<div className="container d-flex justify-content-center">
			<div className="row">
				<div className="col">
					<input
						onKeyUp={e =>
							e.keyCode === 13 &&
							setTasks(
								tasks.concat({
									label: e.target.value
								})
							)
						}
					/>
					<div className="list-group">
						{tasks === null
							? "Loading..."
							: tasks.map((t, index) => (
									<a
										href="#"
										className="list-group-item list-group-item-action"
										key={index}
										onClick={() => {
											t.label = t.label.filter;
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
