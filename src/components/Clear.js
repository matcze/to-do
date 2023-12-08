import React from "react"

export default function Clear({setTodos}) {

    function clearAllTask() {
        setTodos([])
    }

	return (
		<div className="clear-container">
			<button className="clear-button" onClick={clearAllTask}>Clear All</button>
		</div>
	) 
}
