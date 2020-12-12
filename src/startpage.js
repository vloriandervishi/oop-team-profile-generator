const {writeFile,copyFile}=require('../src/createFile');
const managerSection=require('../src/page-template');
const generatePage=(section)=>{
     const webTemplate=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <heading class="d-flex justify-content-center bg-danger p-3 text-white">TEAM</heading>
    ${section}
        
    </body>
    </html>`;
    return webTemplate;
  }
 
  
  module.exports=generatePage;