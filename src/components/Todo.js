import React from "react"
import { useState } from "react"

export default function Todo({ text, todo, todos, setTodos }) {
	const [editedText, setEditedText] = useState("")
	const [showChangeInput, setShowChangeInput] = useState(false)


	function toggleHandler() {
		setShowChangeInput(!showChangeInput)
	}

	function editedTextHandler(e) {
		setEditedText(e.target.value)
	}

	function submitEditedTextHandler(e) {
		e.preventDefault()
		setTodos(
			todos.map(item => {
				if (item.id === todo.id) {
					return {
						...item,
						text: editedText,
						completed: false,
					}
				}
				return item
			})
		)
		setEditedText("")
		setShowChangeInput(!showChangeInput)
	}

	function deleteHandler() {
		setTodos(todos.filter(ell => ell.id !== todo.id))
	}

	function completeHandler() {
		setTodos(
			todos.map(item => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					}
				}
				return item
			})
		)
	}

	return (
		<div className='task'>
			<li className={`task-item ${todo.completed ? "completed" : ""}`}>
				{text}
			</li>
			<button onClick={toggleHandler} className='btn-toggle'>
				<i className='fas fa-pen'></i>
			</button>
			<button onClick={completeHandler} className='btn-complete'>
				<i className='fas fa-check'></i>
			</button>
			<button onClick={deleteHandler} className='btn-trash'>
				<i className='fas fa-trash'></i>
			</button>
			<div className={`${showChangeInput ? "change-visible" : "change-invisible"}`}>
				<form
					className="changing">
					<input
						value={editedText}
						onChange={editedTextHandler}
						type='text'
						className='change-input'
					/>
					<button
						className='change-button'
						type='submit'
						onClick={submitEditedTextHandler}>
						Change Task
					</button>
				</form>
			</div>
		</div>
	)
}
