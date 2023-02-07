class usuario{
    constructor (Id, nome, idade, genero, email, endereco){
        this.Id = Id,
        this.nome = nome,
        this.idade = idade,
        this.genero = genero,
        this.email = email,
        this.endereco = endereco
    }
}

const usuario1 = new usuario(1, "Kaio", 30, "M", "kaio@example.com", "Rua 1, 300");

console.log(usuario1);


const user1json = `{"Id": 1,"nome":"Kaio","idade": 30,"genero":"M","email":"kaio@example.com","endereco":"Rua 1, 300"}`
const obj = JSON.parse(user1json);

console.log(user1json);