const fs = require('fs'),
    source = './dist/index.js',
    dest = './dist/index.umd.js',
    globalName = 'tsDiscriminatedUnion';


var index = fs.readFileSync('./dist/index.js', 'utf8');


var umd = `(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([],factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.${globalName} = factory();
    }
})(this, function () {

${index}

return ${globalName};
});`

fs.writeFileSync('./dist/index.umd.js', umd, 'utf8')
