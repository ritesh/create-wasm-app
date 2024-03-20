const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
	mode: "development",
	experiments: {
		asyncWebAssembly: true,
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns:[
				{ from: 'src/index.html', to: path.resolve(__dirname, "dist/index.html") },
				{ from: 'src/bootstrap.js', to:path.resolve(__dirname, "dist/bootstrap.js") }
			]}
		)
	],
};
