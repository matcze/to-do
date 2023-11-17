import React from "react"

export default function Choice({ setStatus }) {

	function changeStatus(e) {
		setStatus(e.target.value)
	}
	
	return (
		<div className='select-container'>
			<div className='select'>
				<select onChange={changeStatus} name='todos' className='filter-task'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</div>
	)
}
