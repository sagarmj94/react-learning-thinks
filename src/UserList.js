/** @format */

import React from "react"
import HOC from "./HOC"

const UserList = ({ data }) => {
	let renderUsers = data.map((user) => {
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
			<div>{renderUsers}</div>
		</div>
	)
}

const SearchUsers = HOC(UserList, "users")

export default SearchUsers
