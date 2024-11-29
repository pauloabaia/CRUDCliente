class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.inputcpfPesquisar = document.querySelector("#cpfPesquisar");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
        console.log(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach((cliente) => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement("p");
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement("button");
        botaoApagar.textContent = "X";
        botaoApagar.addEventListener("click", (event) => {
            console.log("removendo cliente " + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
    pesquisar(evento) {
        evento.preventDefault();
        let cpf = this.inputcpfPesquisar.value;
        let cliente = this.clientes.pesquisar(cpf);
        if (cliente) {
            alert("Cliente encontrado: " + cliente);
            console.log("Cliente encontrado: " + cliente);
        }
        else {
            alert("Cliente não encontrado: CPF:" + cpf);
            console.log("Cliente não encontrado: + cpf");
        }
    }
}
