class UserView{

    

    //State
    constructor(user){
        this.user = user;
        this.block = null;
        //Object.seal(this);
    }


    //Metodos
    render = ()=>{
        //Construir un elemento visual
        let component = document.createElement("div");      //<div></div>
        let nombre = document.createElement("div");          //<p></p>
        let age = document.createElement("div");             //<p></p>
        let blockBtn = document.createElement("button");
        blockBtn.innerHTML = "Block";

        nombre.innerHTML = this.user.name;
        age.innerHTML = this.user.age;

        component.appendChild(nombre);              //<div><p></p></div>
        component.appendChild(age);              //<div><p></p><p></p></div>
        component.appendChild(blockBtn);

        component.classList.add("userview"); //<div class="userview">  ....  </div>

        if(this.user.blocked){
            component.classList.add("blocked");
        }else{
            component.classList.add("nonblocked");
        }

        component.id = this.user.id;

        
        blockBtn.addEventListener("click", this.block);        

        return component;
    }

    /*
    block = ()=>{
        alert("Bloquear a "+this.user.name);
    }
    */



}