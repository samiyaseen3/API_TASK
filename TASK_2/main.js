'use strict'
let apiURL="https://restcountries.com/v3.1/all";//url
let Name = document.getElementById("Name");




fetch(apiURL).then(response=>
    {
        return response.json();
    }
).then(data=>{
    console.log(data);
    
    data.forEach(element => {
        
        let newElement = document.createElement("h2");
        Name.appendChild(newElement);
        newElement.textContent = element.name.common;
        let newFlag = document.createElement("img");
        Name.appendChild(newFlag);
        newFlag.src = element.flags.png;
        
        
        
        
    });
    

});


