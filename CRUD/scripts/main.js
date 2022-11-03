document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById('btnGet1').addEventListener('click', ()=>{
        let id = document.getElementById('inputGet1Id').value;
        if( id !="" || id>0){

            fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/' + id)
            .then(response => response.json())
            .then(data => document.getElementById('results').innerHTML= data.name + "<br>" + data.lastname + "<br>" + data.id)
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
    
        })
    });

    document.getElementById('btnPut').addEventListener('click',()=>{

        let id =document.getElementById('inputPutId').value;
    
    
        fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/',{
            headers: {"Content-Type":"application/json; charset=utf-8"},
            method: 'PUT',
            body: JSON.stringify({
                name: nombre,
                lastname: appellido
            }) 
        })
        .then(response => response.json())
        .then(data =>{
    
        })
    });

})



