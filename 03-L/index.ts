// Princípio da Substituição - Liskov Substitution Principle

interface IEmployee {
    salario: number
    nome: string
    
    calculaSalario(rank: number): void
}

interface ILead {
    gerarRelatorioDePerformance(): void
}

interface IManaged {
    lead: ILead
    
    setLider(lead: ILead): void
}

// --------------------------------------------------------------

abstract class BaseEmployee implements IEmployee {
    salario: number = 0
    nome: string = ''

    constructor (nome: string) {
        this.nome = nome
    }

    calculaSalario(rank: number) {
        this.salario = (12.5 + (rank*2))*220
    }
}

class Empoloyee extends BaseEmployee implements IManaged { 
    
    salario: number = 0.0
    lead: ILead = null!

    constructor (
        nome: string
    )
    {
        super(nome)
    }

    setLider(lead: ILead) {
        this.lead = lead
    }

    calculaSalario(rank: number) {
        this.salario = (12.5 + (rank*2))*220
    }
}

class Manager extends BaseEmployee implements ILead, IManaged {
    lead: ILead = null!

    constructor(nome: string)
    {super(nome)}

    calculaSalario(rank: number){
        this.salario = (20.5 + (rank*2))*220
    }

    gerarRelatorioDePerformance(){
        console.log("Relatório de manager gerado com sucesso!")
    }

    setLider(lead: ILead) {
        this.lead = lead
    }
}

class CEO extends BaseEmployee {

    constructor(
        nome: string
    )
    {super(nome)}

    calculaSalario(rank: number): void {
        this.salario = (30.5 + (rank*2))*220
    }

    gerarRelatorioDePerformance() {
        console.log("Relatório de manager gerado com sucesso!")
    }
}

function main() {
    const manager = new Manager('Lecio')
    manager.calculaSalario(4)

    const employee = new Empoloyee('Fulano de Tal')
    employee.setLider(manager)
    employee.calculaSalario(2)

    console.log(employee)
}

main()