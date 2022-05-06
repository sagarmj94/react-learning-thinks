/** @format */

import "./App.css"
import TdoList from "./TdoList"
import UserList from "./UserList"

function App() {
	return (
		<div className='App'>
			<h2>Higher Order Component</h2>
			<div className='section'>
				<div>
					<UserList />
				</div>
				<div>
					<TdoList />
				</div>
			</div>
		</div>
	)
}

export default App
