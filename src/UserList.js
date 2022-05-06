/** @format */

import React, { useState, useEffect } from "react"

const UserList = () => {
	const [users, setUser] = useState([])
	const [term, setTerm] = useState("")

	useEffect(() => {
		const fetchUser = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/users")
			const json = await res.json()
			setUser(json)
			console.log(users)
		}
		fetchUser()
	}, [])

	let renderUsers = users.map((user) => {
		return (
			<div key={user.id}>
				<p>
					<strong>{user.name}</strong>
				</p>
			</div>
		)
	})

	let filteredUsers = users
		.filter(({ name }) => {
			return name.indexOf(term) >= 0
		})
		.map((user) => {
			return (
				<div key={user.id}>
					<p>
						<strong>{user.name}</strong>
					</p>
				</div>
			)
		})

	return (
		<div>
			<h2>Users</h2>

			<input
				type='text'
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
			<div>{filteredUsers}</div>
		</div>
	)
}

export default UserList
