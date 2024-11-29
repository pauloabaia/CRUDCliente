class ClienteController {
  private inputNome: HTMLInputElement;
  private inputCpf: HTMLInputElement;
  private inputcpfPesquisar: HTMLInputElement;

  private clientes: Clientes;

  constructor() {   
    this.inputNome = <HTMLInputElement>document.querySelector("#nome");
    this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
    this.inputcpfPesquisar = <HTMLInputElement>document.querySelector("#cpfPesquisar");
    this.clientes = new Clientes();
  }

  inserir(evento: Event) {
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

  inserirClienteNoHTML(cliente: Cliente) {
    const elementoP = document.createElement("p");
    elementoP.textContent = cliente.toString();

    const botaoApagar = document.createElement("button");
    botaoApagar.textContent = "X";
    botaoApagar.addEventListener("click", (event) => {
      console.log("removendo cliente " + cliente.toString());
      this.clientes.remover(cliente.cpf);
      (<Element>event.target).parentElement.remove();
    });
    elementoP.appendChild(botaoApagar);
    document.body.appendChild(elementoP);
  }

  pesquisar(evento: Event) {
    evento.preventDefault();
    let cpf = this.inputcpfPesquisar.value;
    let cliente = this.clientes.pesquisar(cpf);
    if (cliente) {
      alert("Cliente encontrado: " + cliente);
      console.log("Cliente encontrado: " + cliente);
    } else {
      alert("Cliente não encontrado: CPF:" + cpf);
      console.log("Cliente não encontrado: + cpf");
    }
  }
}
