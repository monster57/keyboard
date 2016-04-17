import React from 'react';


var data = [
		[".",",","!",1],
		["a","b","c",2],
		["d","e","f",3],
		["g","h","i",4],
		["j","k","l",5],
		["m","n","o",6],
		["p","q","r","s",7],
		["t","u","v",8],
		["w","x","y","z",9],
		["*"],
		[0],
		["#"]
	];

class Container extends React.Component {
	render() {
		return (
			<div >
				<input type="text" value="something"/>
				<h1>Keypad</h1>
			</div>
		)
	}
}


React.render(
	<Container />,
	document.getElementById('container')
)