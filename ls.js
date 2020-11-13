// const { builtinModules } = require("module");
// const fs = require('fs')

// // module.exports = (done) => {
// //   fs.readdir('./', 'utf8', (err, data) => {
// //     if (err) {
// //       done(err.stack)
// //     } else {
// //       done(data.join('\n'))
// //     }
// //   })
// // }
const fs = require('fs')
module.exports=(done)=>{fs.readdir('./','utf8',(err,files)=>{
  if(err){
    throw err
  }else {
    process.stdout.write(files.join('\n'));
    process.stdout.write("prompt > ")
  }
})
}

// nodemon bash.js
