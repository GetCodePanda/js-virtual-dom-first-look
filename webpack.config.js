const path = require('path');

module.exports = {
    entry:'./v-dom.js',
    output: {
        path: path.resolve(__dirname , 'dist'),
        filename: 'my-vdom.js'
    }
}