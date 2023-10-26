// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - path to current file
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log('__dirname: ', __dirname)
console.log('__filename: ',__filename)
console.log('module: ', module)
// console.log('process: ', process)

setInterval(() => {
	console.log('hello world')
}, 1000)