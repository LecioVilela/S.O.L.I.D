// Princípio da Segregação de Interface - Interface Segregation Principle

interface ILivro {
    name: string
}

interface ILivroInsert {
    insert(livro: ILivro): any
}

interface ILivroUpdate {
    update(livro: ILivro): any
}

interface ILivroDestroy {
    destroy(livroID: number): any
}

interface ILivroSelect {
    select(livroID: number): any
}

class LivroCrud implements ILivroInsert, ILivroUpdate, ILivroDestroy, ILivroSelect {

    insert(livro: ILivro) {
        // algo a ser implementado
    }

    update(livro: ILivro) {
        // algo a ser implementado
    }

    destroy(livroID: number) {
        //algo a ser implementado
    }

    select(livroID: number) {
        // algo a ser implementado
    }
}