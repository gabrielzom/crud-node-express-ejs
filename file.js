const fileSystem = require('fs')

//fileSystem.writeFile('myfile.txt', 'Olá Node', (erro)=>{
//    if (erro) {
//      throw erro
//    }
//})

/*
fileSystem.readFile('myfile.txt', (err, data) =>{
    if (err) {
        throw err
    } else {
        console.log(data.toString('utf8'))
    }
})
*/

/*
fileSystem.readdir('.', (err,files) => {
    if (err) {
        throw err
    } else {
        for (var file in files) {
            console.log(files[file])
        }
    }
})
*/

fileSystem.readdirSync('.')
.filter((file) => {
    return (file.endsWith('.json'))
})
.forEach((file)=> {
    console.log(file)
})
