const express = require('express')

const PORT = 3000

const app = express()

fs = require('fs')

var fs = require('fs')
fs.unlink('result.txt', (err) => {
	console.log('File deleted ...')
})
var logger = fs.createWriteStream('result.txt', {
  flags: 'a'
})

for(let i = 0; i <= 100; ++i) {
    if((i % 3 === 0) && (i % 5 === 0)) {
        logger.write(`N'oublie` + '\n')
    } else if(i % 5 === 0) {
        logger.write('Jamais' + '\n')
    } else if (i % 3 === 0) {
        logger.write(`N'oublie Jamais` + '\n')
    }
}

app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`)
})