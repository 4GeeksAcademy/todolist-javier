import React, { useState } from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div classname="container">
			<h1>Todos</h1>
			<ul>
				<li><input 
				        type="text"
				        onChange={(e) => setInputValue(e.target.value)} 
						value={inputValue} 
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
							  setTodos([...todos, inputValue]);
							  setInputValue("");
							}}}
						placeholder="What needs to be done?">
					</input>
				</li>
				{todos.map((tarea, index) => (
					<li>
						{/*Filtro de todos los index menos el que se hace click */}
						{tarea} <button onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex ))}>Eliminar</button>
					</li>
				))}

			</ul>
			<div>{todos.length} item left</div>
		</div>
	);
};

export default Home;
