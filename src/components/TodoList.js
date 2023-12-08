import React from "react"
import Todo from "./Todo" 

export default function TodoList({ todos, setTodos, filteredTodos }) {
	return (
		<div className='task-container'>
			<ul className='task-list'>
				{filteredTodos.map(todo => {
					return (
						<Todo
							todos={todos}
							setTodos={setTodos}
							text={todo.text}
							key={todo.id}
							todo={todo}
						/>
					)
				})}
			</ul>
		</div> 
	)
}
