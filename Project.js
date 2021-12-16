#!/usr/bin/env node
const fs = require ('fs');
const path = require('path');

// let create the function for -s
function s(fileCont)
{ 
    
    const lines = fileCont.split(/\r?\n/);

    
        // else{
        lines.forEach((line) => {
               if (line.length > 0) {
                console.log(line);
                console.log()
                }
            
            });
         }
              
function SandN(data)
{ 
     let  n=1
    const lines = data.split(/\r?\n/);

    let finalline=''
        // else{
        lines.forEach((line) => {
               if (line.length > 0) {
                console.log(n+". "+line);
                n++
                console.log(n+".")
                
                n++}
            
        
               });
            
         }
         
 function SandB(data)
{ 
     let  n=1
    const lines = data.split(/\r?\n/);

    
        lines.forEach((line) => {
               if (line.length > 0) {
                console.log(n+". "+line);
                console.log()
                n++
                }
               
            });
   
         }
   
function n(numbers)
{let n=1

    const lines = numbers.split(/\r?\n/);

    
    
    lines.forEach((line) => {
        //  if (line.length > 0) {
        console.log(n+". "+line);
        n++;
       
    });
  
}

function b(fileSpace)
{let n=1
    
    const lines = fileSpace.split(/\r?\n/);


    lines.forEach((line) => {
         if (line.length > 0) {
        console.log(n+". "+line);
        n++;
        }
        else{
             console.log(line);
        }
    });
    
}

//////////////////////////////////////////////////////////////////////////////////
//Main function 
///////////////

let arr =process.argv.slice(2);
let commands = new Array();
let files = new Array();
arr.forEach(element => {
    if(path.extname(element)=='.txt'&& fs.existsSync(element)){
        files.push(element)
        }
        else{
        commands.push(element)
        }
  });


let finalData='' 
    for(let i=0;i<files.length;i++)
    {

      finalData+=  fs.readFileSync(files[i],'utf8');

    }
if(commands.length==0)
{
    console.log(finalData)
}

    if((commands[0]=='-s'&&commands[1]=='-n')||(commands[0]=='-n'&&commands[1]=='-s') )
    {
        SandN(finalData)
       
    }
    else if((commands[0]=='-s'&&commands[1]=='-b')||(commands[0]=='-b'&&commands[1]=='-s'))
        {
        SandB(finalData)
         }
else if((commands[0]=='-n'&&commands[1]=='-b')||(commands[0]=='-b'&&commands[1]=='-n')){
    console.log("please enter either -b and -n ")
}
     else{
for(let element=0;element<commands.length;element++)
    {
        
    if(commands[element]=='-s'){

     s(finalData)
     break;
   }
    else if(commands[element]=='-n')
    {    n(finalData)
        break;
    }
  else if(commands[element]=='-b')
  {
      b(finalData)
      break;
  }
  else 
  {
      if(path.extname(commands[element])=='.txt'){
      
      console.log(commands[element]+" File not exist \n")}
      else{
        console.log(commands[element]+" Please enter the valid operation \n")
      }
  }
}


}
    // }


