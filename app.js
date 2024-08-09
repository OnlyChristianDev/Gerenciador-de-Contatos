import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';

const noContacts = document.querySelector(".noContacts")
const btn = document.querySelector('.btn')
const contacts = document.querySelector(".contacts")
const NameInput = document.querySelector (".nameInput")
const phoneNumber = document.querySelector(".phoneNumber")


class Contato {
    constructor(nome, telefone, id) {
        this.nome = nome;
        this.telefone = telefone;
        this.id = id;
    }
}

class GerenciadorContatos {
    constructor() {
        this.contatos = []
    }

    adicionarContato(nome, telefone, id){
        const contato = new Contato(nome, telefone, id);
        this.contatos.push(contato);
        this.atualizarLista()
    }

    removerContato(id){
        this.contatos = this.contatos.filter(contato => contato.id !== id)
        this.atualizarLista()
    }

    atualizarLista(){
        contacts.innerHTML = ''

        this.contatos.forEach(contato => {
            console.log(`nome: ${contato.nome}, telefone: ${contato.telefone}, id: ${contato.id}`)
            const newDiv = document.createElement("div")
            const newUl = document.createElement('ul')
            const newli = document.createElement("li")
            const photoDiv = document.createElement('div')
            const iconX = document.createElement("i")
            
            iconX.classList = "fa-solid fa-xmark"
            newDiv.classList.add("divAddContacts")
            photoDiv.innerHTML = `${contato.nome}`[0]
            photoDiv.classList.add("photoDiv")
            newli.classList.add("newLi")

            newli.appendChild(photoDiv)
            newli.innerHTML = `<span class="SpanName"> ${contato.nome} </span>  <span class="SpanTel"> ${contato.telefone} </span> `
            
            newUl.appendChild(newli)
            newDiv.appendChild(photoDiv)
            newDiv.append(newUl)
            newDiv.append(iconX)
            contacts.appendChild(newDiv)

            iconX.addEventListener("click", () => {
                this.removerContato(contato.id);
                this.atualizarLista(); 
            })
            
        })

        this.verificarListaVazia();
    }

    verificarListaVazia() {
        if (this.contatos.length === 0) {
            noContacts.style.display = 'block'
        } else {
            noContacts.style.display = 'none'
        }
    }
    
}

const gerenciador = new GerenciadorContatos

const adicionarContato = () => {
    const nome = NameInput.value.trim();
    const telefone = phoneNumber.value.trim();
    
    if (nome && telefone) {
      
        if (telefone.length < 20) {
            alert("Digite um número de telefone válido com pelo menos 8 dígitos.");
        } else {
            const id = uuidv4();
            gerenciador.adicionarContato(nome, telefone, id);
            console.log(`Contato adicionado: ${nome}, ${telefone}, ${id}`);
            NameInput.value = '';
            phoneNumber.value = '';
            gerenciador.atualizarLista();
        }
    } else {
        alert("Digite um nome para o contato e um telefone.");
    }
};


const metodos = () => {
    adicionarContato()
    gerenciador.atualizarLista()
}

btn.addEventListener('click', metodos);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        metodos(); 
    }
});

