const path = require('path');
module.exports = {
  entry: ['./src/index.js','./src/cellBtn.js','./src/checkBtn.js','./src/clearBtn.js','./src/solveBtn.js'],
  devServer: {
    contentBase: './dist',
  },
  externals: {
    jquery: 'jQuery'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
    mode: 'development'
};

