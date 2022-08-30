import React from "react";
import Nav from "./Nav";
import HogContainer from './HogContainer'

// import hogs from "../porkers_data"; // move to HogContainer

// My Plan:
// Parent: App.js
// Children: HogsContainer.js, Nav.js
// HogsContainer: Will have STATE && three children - HogTiles.js && HogDetail.js && FilterForm.js

function App() {
	return (
		<div className="App">
			<Nav />
			<HogContainer />
		</div>
	);
}

export default App;
