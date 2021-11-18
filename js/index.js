const nameTF = document.getElementById("nameTF");
const ageTF = document.getElementById("ageTF");
const submitBtn = document.getElementById("submitBtn");

const usersContainer = document.getElementById("usersContainer");


const getPokemon = (pokemon)=>{
    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon).then(
        (response) => {
            response.json().then(
                (data)=>{
                    console.log(data);
                }
            );
        }
    );
}

const getPokemonAsync = async (pokemon)=>{
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon);
    let data = await response.json();
    console.log(data);

}

const getAllUsers = async ()=>{
    let response = await fetch("https://prograreddomi.herokuapp.com/api/users/getall");
    let data = await response.json();
    console.log(data);
    usersContainer.innerHTML = "";
    for(let i in data){
        let user = data[i];
        let userView = new UserView(user);
        
        userView.block = ()=>{
            alert("Hola");
        }
        let view = userView.render();
        console.log(userView);
        usersContainer.appendChild(view);
        //usersContainer.innerHTML += `<li>${user.name}</li>`;
    }
}

getAllUsers();


const postUser = async ()=>{
    let user = {
        id: "",
        name:nameTF.value,
        age:ageTF.value
    };
    

    let json = JSON.stringify(user);
    //let obj = JSON.parse(json);

    let response = await fetch("https://prograreddomi.herokuapp.com/api/users/create", 
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: json
        }
    );
    if(response.ok){
        let data = await response.json();
        console.log(data);
        getAllUsers();
    }
}

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    postUser();
});


const createObject = ()=>{
    let julian = new UserView("Julian", 18);
    let kevin = new UserView("Kevin", 20);
    //userview.alfa = "Alfa";
    
    julian.hello();
    kevin.hello();
}