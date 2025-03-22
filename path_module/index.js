import path, { extname } from 'path'

//join two or more files

const fullPath = path.join('/path', 'Sample.py','file.java')
//console.log(fullPath)

//absolute path

const absolutePath = path.resolve('file.txt')
//console.log(absolutePath)

//filedirectory
const directoryName = path.dirname('pihu/main.java')
//console.log(directoryName)

//base path

const basepath = path.basename('/public/java/constructor.java')
//console.log(basepath)

//extension name

const extName = path.extname('arijit.mp4')
//console.log(extName)