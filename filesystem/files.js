const fileSystem = require('fs');

//Reading files
fileSystem.readFile('../docs/blog.txt' , (err, data)=>{
  if(err){
      console.log(err);
  }
  console.log(data.toString());
});

//Writing files
fileSystem.writeFile('../docs/blog.txt', 'Hello', ()=>{
    console.log('File is written');
} );

//
if(!fileSystem.existsSync('../assest')){
fileSystem.mkdir('../assest',(error)=>{
    if(error){
      console.log(error);
    }
    console.log('Assest folder is created');
});
}
else{
    fileSystem.rmdir('../assest',(error)=>{
        if(error){

        }

        console.log('Directory deleted');
    });
}

//Deleting files
if(fileSystem.existsSync('./docs/delete.txt')){
   fileSystem.unlink('../docs/delete.txt', (error)=>{
     if(error){
       console.log(error);       
     }

     console.log('File is deleted');
   });
}

