import React from 'react';
import ButtonSet from './ButtonSet';

var data = [
		{key:1 , data:[".",",","!",1]},
		{key:2 , data:["a","b","c",2]},
		{key:3 , data:["d","e","f",3]},
		{key:4 , data:["g","h","i",4]},
		{key:5 , data:["j","k","l",5]},
		{key:6 , data:["m","n","o",6]},
		{key:7 , data:["p","q","r","s",7]},
		{key:8 , data:["t","u","v",8]},
		{key:9 , data:["w","x","y","z",9]},
		{key:10 , data:["*"]},
		{key:11 , data:[0]},
		{key:12 , data:["#"]},
		
	];

class Container extends React.Component {
	render() {
		return (
			<div >
				<input type="text" value="something"/>
				<ButtonSet data = {this.props.data}/>
			</div>
		)
	}
}


React.render(
	<Container data={data}/>,
	document.getElementById('container')
)