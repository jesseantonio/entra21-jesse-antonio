// 2) Crie uma função moveFiles(oldFolderPath, newFolderPath) que move os arquivos da pasta original
// para a nova pasta.
var fs = require('fs')

var oldPath = 'old/path/file.txt'
var newPath = 'new/path/file.txt'

fs.rename(oldPath, newPath, "js", function (err) {
  if (err) throw err
  console.log('Sucesso!')
})
