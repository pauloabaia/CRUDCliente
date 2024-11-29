//-------------------------------------
let clienteController = new ClienteController();

clienteController.listar();
console.log("Testando a classe Cliente");
const cli1 = new Cliente("Paulo", "001");
const cli2 = new Cliente("Itallo", "002");
const cli3 = new Cliente("João", "003");

const clientes = new Clientes();
clientes.inserir(cli1);
clientes.inserir(cli2);
clientes.inserir(cli3);


console.log(clientes.pesquisar("002"));


clientes.remover("002");

console.log(clientes.listar());