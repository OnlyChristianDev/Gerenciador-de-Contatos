import uuid from 'uuid'

const noContacts = document.querySelector(".noContacts")
const btn = document.querySelector('.btn')
const contacts = document.querySelector(".contacts")
const NameInput = document.querySelector (".nameInput")
const phoneNumber = document.querySelector(".phoneNumber")

const RemoveNoContact = () => {
    noContacts.remove()
}

const newElement = () => {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
   
    const contato = new Contato(inputValue, 878787, 878)
    li.textContent = `${contato.nome}`
    ul.appendChild(li)
    contacts.appendChild(ul)
}

const handleEvent = () => {
    RemoveNoContact()
    newElement()
}

btn.addEventListener("click", handleEvent)

class Contato {
    constructor(nome, telefone, id) {
        this.nome = nome;
        this.telefone = telefone;
        this.id = id
    }
}

class GerenciadorContatos {
    constructor() {
        this.contatos = []
        this.atualizarLista()
    }

    adicionarContato(nome, telefone){
        const contato = new Contato(nome, telefone);
        this.contatos.push(contato);
    }

    removerContato(id){
        this.contatos
    }
    atualizarLista(){

    }
}

let inputValue = NameInput.value
let inputNumberValue = phoneNumber.value 

const gerenciador = new GerenciadorContatos
gerenciador.adicionarContato(inputValue, inputNumberValue)
console.log(this.contatos)

const iniqeid = uuid.v4()
console.log(iniqeid)