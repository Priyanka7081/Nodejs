import {readFile,writeFile,appendFile,mkdir} from 'fs/promises'

//Read File Contact

const readFileContact = async (filepath) => {
    try{
        const data = await readFile(filepath,'utf-8')
         console.log(data)
    }catch(error){
        console.log(error)

    }

}
await readFileContact('Sample.txt')
//Create file

const CreateFile = async(filepath,content) =>{
    await writeFile(filepath,content)
    console.log("file create successfully")
}

await CreateFile('Inheritance.java','this is inheritance')

//Append data to a file

const appendtoFile = async (filepath,content) => {
    await appendFile(filepath,content)
    console.log("new content added successfully")
    
}

await appendtoFile('Sample.txt',' uttam maurya')

//create folders

const createDirectory = async (dirpath) =>{
    await mkdir(dirpath)
}
await createDirectory('python')