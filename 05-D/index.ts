interface IBook {
    name: string
}

interface IBookInsert {
    insert(book: IBook) : any
}

interface IBookDestroy {
    destroy(bookID: number): any
}

class BookCrud implements IBookInsert, IBookDestroy {

    insert(book: IBook) {
        // something to implement
    }

    destroy(bookID: number) {
        // something to implement
    }
}

class BookInsertUseCase {
    constructor(private bookAdd: IBookInsert) { }
    insert(book: IBook) {
        this.bookAdd.insert(book)
    }
}

const useCase = new BookInsertUseCase(new BookCrud())