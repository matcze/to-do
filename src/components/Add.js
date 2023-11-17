import React from "react"
import { v4 as uuidv4 } from "uuid"

export default function Add({ setInputText, todos, setTodos, inputText}) {
	
  function inputTextHandler(e) {
		setInputText(e.target.value)
	}

	function submitTodoHandler(e) {
		e.preventDefault()
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: uuidv4() },
		])
		setInputText("")
	}


	return (
		<form className="adding">
			<input
				value={inputText}
				onChange={inputTextHandler}
				type='text'
				className='add-input'
			/>
			<button className='add-button' type='submit' onClick={submitTodoHandler}>
				Add Task
			</button>
		</form>
	)
}
