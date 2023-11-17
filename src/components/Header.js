import React from "react"
import img1 from "../image/pic-3.png"

export default function Header({ todos }) {
	return (
		<div className='header'>
			<img src={img1} alt='' />
			<div className='first-header'>
				<h1>Hello Jim!</h1>
				<span>
					You have {todos.length} {todos.length > 1 ? "tasks" : "task"} to do!
				</span>
			</div>
		</div>
	)
}
