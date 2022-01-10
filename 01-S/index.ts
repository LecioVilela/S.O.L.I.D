// Princípio da Responsabilidade Única - Single Responsability Principle

// Exemplo errado

type Database = {
    livros: {
        save: () => {}
    }
}

class DatabaseInstance {
    connect(param: string, param2: string[]): Database {
        return {
            livros: {
                save: () => ({})
            }
        }
    }
}

class Livro {
    private database: Database

    constructor(private titulo: string, private resumo: string) {
        const db = new DatabaseInstance()
        this.database = db.connect("connectionstring", ['livros'])
    }

    getTitulo() {
        return this.titulo
    }

    save() {
        this.database.livros.save()
    }
}

// End Exemplo errado

// Exemplo correto

class LivroCorreto {
    constructor(private titulo:string, private resumo: string) { }

    getTitulo() {
        return this.titulo
    }

    getResumo() {
        return this.resumo
    }
}

class LivroRepository {
    private database: Database

    constructor() {
        const db = new DatabaseInstance()
        this.database = db.connect("connectionstring", ['livros'])
    }

    save(livro: LivroCorreto) {
        const titulo = livro.getTitulo()
        const reumo = livro.getResumo()
        this.database.livros.save()
    }
}

// End Exemplo correto