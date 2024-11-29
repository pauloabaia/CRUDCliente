class Clientes{

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
        const c1 = new Cliente("PAULO","001");
        const c2 = new Cliente("ITALLO","002");
        this.clientes.push(c1,c2);
    }

    inserir(cliente: Cliente):void {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    listar():Array<Cliente>{
        return this.clientes;
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }
}