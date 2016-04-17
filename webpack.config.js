module.exports = {
	entry : [
		'./src/Container.js'
	],
	output:{
		path: __dirname,
		filename: 'app.js'
	},
	module:{
		loaders: [{
			test:/\.jsx?$/,
			loader: 'babel'
		}]
	}
};