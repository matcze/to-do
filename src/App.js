import React, { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Add from "./components/Add"
import Choice from "./components/Choice"
import TodoList from "./components/TodoList"
import Clear from "./components/Clear"
import Copyrights from "./components/Copyrights"
 
function App() {
	const [inputText, setInputText] = useState("")
	const [todos, setTodos] = useState([])
	const [status, setStatus] = useState("all")
	const [filteredTodos, setFilteredTodos] = useState([])

	useEffect(() => {
		getLocalTodos()
	}, [])

	useEffect(() => {
		filterHandler()
		saveLocalTodos()
	}, [todos, status])

	function filterHandler() {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter(todo => todo.completed === true))
				break
			case "uncompleted":
				setFilteredTodos(todos.filter(todo => todo.completed === false))
				break
			default:
				setFilteredTodos(todos)
				break
		}
	}

	function saveLocalTodos() {
		localStorage.setItem("todos", JSON.stringify(todos))
	}

	function getLocalTodos() {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]))
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"))
			console.log(todoLocal)
			todoLocal === null && setTodos(todoLocal)
		}
	}

	return (
		<div className='App'>
			<Header todos={todos} />
			<Add
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<Choice setStatus={setStatus} />
			<TodoList
				setTodos={setTodos}
				todos={todos}
				filteredTodos={filteredTodos}
			/>
			<Clear setTodos={setTodos} />
			<Copyrights />
		</div>
	)
}

export default App

