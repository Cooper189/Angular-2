var static = require('node-static');
var index = '<!DOCTYPE html> <html> <head> <base href="/"> <meta charset="utf-8"> <title>Angular 2Do</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="icon" type="image/x-icon" href="img/favicon.ico"> <script src="node_modules/core-js/client/shim.min.js"></script> <script src="node_modules/zone.js/dist/zone.js"></script> <script src="node_modules/systemjs/dist/system.src.js"></script> <script src="systemjs.config.js"></script> <script> System.import(\'app\').catch(function(err){ console.error(err); }); </script> </head> <body> <app-component></app-component> </body> </html>';
var file = new static.Server('.');

function rout(path, y, x, z) {
	console.log('check',path);
	if(typeof(y[path]) === 'function' && path !== '/news.json') {
		y[path]();
		file.serve(x, z);
	}else if(path === '/about'){
		z.end(index);
	}else{
		file.serve(x, z);
	}
}

exports.rout = rout;