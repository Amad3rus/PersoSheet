const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
        template:'./public/index.html'
});

module.exports = {
   "entry": './index.js',
   "output":{
     "filename":'bundle.js',
     "path": path.resolve(__dirname, '/dist'),
     "publicPath":'/'
   },

   "module":{
     "rules":[
         {
           "test":/\.js$/i,
            "exclude":/node_modules/,
            "loader":'babel-loader',
           "query":{
              "presets": ['es2015', 'stage-0'],
              "compact": true
           }
        },

        {
          "test":/\.css$/i,
          "use":['style-loader', 'css-loader']
        }
     ]
   },

   "plugins": [
     HTMLWebpackPluginConfig
   ]
}
