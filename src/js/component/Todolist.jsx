import React, { useState, useEffect } from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        
    }, []);

    return (
        
        <div className="card text-center mt-5" style={{ width: "40rem" }}>
            <span className="title">todos</span>
            <ul className="list-group list-group-flush ms-5 me-5 mb-5 border border-start border-end text-secondary">
                <li className=" box list-group-item border border-top">
                    <input className="d-flex ms-4 border-0"
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && inputValue.trim()) { 
                                setTodos(todos.concat(inputValue)); 
                                setInputValue("");
                            }
                        }}
                        placeholder="What needs to be done?"></input>
                </li>
                {todos.length === 0 ? (
                    <li className="list-group-item tasks d-flex ps-5 text-secondary"> No hay tareas, añadir tareas</li>
                ) : (
                todos.map((item, index) => (
                    <li key={index} className="list-group-item todo-item d-flex ps-5 text-secondary">
                        {item} 
                        <span 
                            className="remove text-secondary" 
                            onClick={() => setTodos(todos.filter((_, currentIndex) => index !== currentIndex))}
                        >
                            X
                        </span>
                    </li>
                )))}
            <li className="itemcounter list-group-item d-flex ms-0 text-secondary"> {todos.length} item left</li>
        </ul>    
</div>
    );
};

export default TodoList;

