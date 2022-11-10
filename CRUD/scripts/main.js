
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById('btnGet1').addEventListener('click', () => { //Buscador de registro
        let id = document.getElementById('inputGet1Id').value;
        if (id != "" || id > 0) { //Si el id es distinto de vacio o mayor de 0 
            fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/' + id) //Llama al fetch con el id ingresado en el input
                .then(response => response.json())
                .then(data => document.getElementById('results').innerHTML =
                    `
                        <li>
                            <p>ID: ${data.id}</p>
                            <p>NAME: ${data.name}</p>
                            <p>LASTNAME: ${data.lastname}</p>
                        </li>
                    `) //Se genera un elemento de la lista con el id, el nombre y el apellido del id ingresado

        } else if (id === "") { //Si el id es vacio
            fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/') //LLama al fetch
                .then(response => response.json())
                .then(data => {
                    document.getElementById('results').innerHTML = ""; //Vacía todo lo que haya en la etiqueta con id="results"
                    for (i = 0; i < data.length; i++) { //Se genera un for para iterar todos los registros que hay
                        document.getElementById('results').innerHTML +=
                            `
                                <li>
                                    <p>ID: ${data[i].id}</p>
                                    <p>NAME: ${data[i].name}</p>
                                    <p>LASTNAME: ${data[i].lastname}</p>
                                </li>
                            `//Se va generando tantos elementos de la lista como registros haya, cada uno con su respectivo ID, NAME y LASTNAME
                    }
                })
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

    document.getElementById('saveChanges').addEventListener('click',()=>{

        let id =document.getElementById('inputPutId').value;

        let nombre =document.getElementById('editName').value;
        let appellido =document.getElementById('editApellido').value;
        let data = {};
        if (nombre) {
            data.name = nombre;
        }
        if (appellido) {
            data.lastname = appellido
        };


        fetch('https://6363eb3a8a3337d9a2ec6c3b.mockapi.io/users/'+id,{
            headers: {"Content-Type":"application/json; charset=utf-8"},
            method: 'PUT',
            body: JSON.stringify(data) 
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
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