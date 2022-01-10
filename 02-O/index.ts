interface IPerson {
    getNome(): string
    welcome(): string
}

class Professor implements IPerson {
    constructor(private nome: string) { }

    getNome() {
        return this.nome;
    }

    welcome() {
        return `Hello students, I'm the professor ${this.getNome()}`
    }
}

class Student implements IPerson { 
    constructor(private nome: string) { }

    getNome() {
        return this.nome;
    }

    welcome() {
        return `Hi, I'm the student ${this.getNome()}`
    }
}

class Principal implements IPerson {
    constructor(private nome: string) { }

    getNome() {
        return this.nome;
    }

    welcome() {
        return `Hello everybody, I'm the principal ${this.getNome()}`
    }
}

class Coord implements IPerson {
    constructor(private nome: string) { }

    getNome() {
        return this.nome;
    }

    welcome() {
        return `Hi guys, I'm your coord ${this.getNome()}`
    }
}

class HandlerPerson { 
    
    lstPerson(person: Array<IPerson>) {
        for(const someone of person) {
            console.log(someone.welcome())
        }
    }
}

const handler = new HandlerPerson()
handler.lstPerson([
    new Student('Lecio'),
    new Student('Dani'),
    new Professor('Alaor'),
    new Professor('Marluce'),
    new Student('Mel'),
    new Professor('Lucas'),
    new Principal('Markovs'),
    new Coord('Mary')
])