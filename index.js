const http= require('http')
const path= require('path')
const fs  = require('fs')

const app= http.createServer((req,res)=>{

    console.log(req.url)
    if(req.url === '/'){
        fs.readFile(path.join(__dirname,'public','index.html'),(error,content)=>{
            if(error){
                throw error
            }
     res.end(content)
        })
    }else if(req.url === '/about'){
        fs.readFile(path.join(__dirname,'public','about.html'),(error,content)=>{
            if(error){
                throw error
            }
     res.end(content)
        })
    }
 
   

})

app.listen(3000,()=>{
    console.log('App listning on 3000')
})