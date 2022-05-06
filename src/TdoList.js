/** @format */

import HOC from "./HOC"

const TdoList = ({ data }) => {
	let renderUsers = data.splice(0, 10).map((todo) => {
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
			<div>{renderUsers}</div>
		</div>
	)
}

const SearchUsers = HOC(TdoList, "todos")
export default SearchUsers
