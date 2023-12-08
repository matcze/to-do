import React from "react"

export default function Copyrights() {
	let recYear = new Date().getFullYear()

	return (
		<p className='copyrights'>
			Copyright © {recYear} by Czarny, All rights reserved!
		</p>
	)
}
