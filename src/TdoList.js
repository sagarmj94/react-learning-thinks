/** @format */

import React, { useState, useEffect } from "react"

const TdoList = () => {
	const [todos, setTodos] = useState([])
	const [term, setTerm] = useState("")

	useEffect(() => {
		const fetchTodos = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/todos")
			const json = await res.json()
			setTodos(json)
			console.log(todos)
		}
		fetchTodos()
	}, [])

	let filteredTodos = todos
		.slice(0, 10)
		.filter(({ title }) => {
			return title.indexOf(term) >= 0
		})
		.map((todo) => {
			return (
				<div key={todo.id}>
					<p>
						<strong>{todo.title}</strong>
					</p>
				</div>
			)
		})

	return (
		<div>
			<h2>Todos</h2>

			<input
				type='text'
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
			<div>{filteredTodos}</div>
		</div>
	)
}

export default TdoList
