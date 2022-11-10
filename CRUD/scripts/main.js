
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById('btnGet1').addEventListener('click', ()=>{
        let id = document.getElementById('inputGet1Id').value;
        if( id !="" || id>0){

            fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/' + id)
            .then(response => response.json())
            .then(data => {
                document.getElementById('results').innerHTML= 
                data.name + "<br>" + 
                data.lastname + "<br>" + data.id;
        
            });
        }
    })

    document.getElementById('btnPost').addEventListener('click',()=>{

        let nombre =document.getElementById('inputPostNombre').value;
        let appellido =document.getElementById('inputPostApellido').value;

        fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/',{
            headers: {"Content-Type":"application/json; charset=utf-8"},
            method: 'POST',
            body: JSON.stringify({
                name: nombre,
                lastname: appellido
            }) 
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data)
        })
        .catch((error)=> {
            console.log(error);
    
        })
    });

    document.getElementById('btnPut').addEventListener('click',()=>{

        let id =document.getElementById('inputPutId').value;
        let nombre =document.getElementById('inputPostNombre').value;
        let appellido =document.getElementById('inputPostApellido').value;
        let data = {};
        if (nombre) {
            data.name = nombre;
        }
        if (appellido) {
            data.lastname = appellido
        };


        fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/',{
            headers: {"Content-Type":"application/json; charset=utf-8"},
            method: 'PUT',
            body: JSON.stringify(data) 
        })
        .then(response => response.json())
        .then(data =>{
            console(data);
        })
        .catch((error) => {
            console.log(error)
        })

       
    });

    document.getElementById('btnDelete').addEventListener('click',()=> {

        let id =document.getElementById('inputDelete').value;
    
        fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/' + id,{
            headers: {"Content-Type":"application/json; charset=utf-8"},
            method: 'DELETE',
            })
            .then(response => response.json())
            .then(data =>{
                console(data);
            })
            .catch((error) => {
                console.log(error)
            })
    
    });  

    document.getElementById('btnDelete').addEventListener('click',()=> {

        let id =document.getElementById('inputDelete').value;
    
        fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/' + id,{
            headers: {"Content-Type":"application/json; charset=utf-8"},
            method: 'PUT',
            })
            .then(response => response.json())
            .then(data =>{
                console(data);
            })
            .catch((error) => {
                console.log(error)
            })
    
    });  

})