import { useState } from "react"

const BookList = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: "OmanGatDamn!",
            author: "Dexter",
            year: "2015",
            genero: "Rapping",
            lenguage: "Ingles",
            descripcion: "Lorem impsuin dapsdad asdaskdadasda ñasdadñlasdad",
            image: "O",
        },
        {
            id: 2,
            title: "OmanGatDamn2!",
            author: "Dexter",
            year: "2016",
            genero: "Rapping",
            lenguage: "Ingles",
            descripcion: "Lorem impsuin dapsdad asdaskdadasda ñasdadñlasdad",
            image: "O",
        },
        {
            id: 3,
            title: "OmanGatDamn3!",
            author: "Dexter",
            year: "2017",
            genero: "Rapping",
            lenguage: "Ingles",
            descripcion: "Lorem impsuin dapsdad asdaskdadasda ñasdadñlasdad",
            image: "O",
        },
        {
            id: 4,
            title: "OmanGatDamn3!",
            author: "Dexter",
            year: "2018",
            genero: "Rapping",
            lenguage: "Ingles",
            descripcion: "Lorem impsuin dapsdad asdaskdadasda ñasdadñlasdad",
            image: "O",
        }

    ])

    return (
        <div style={{float:"left"}}>
           <h3>Lista de Libros</h3>
           <>
                {
                    books.map(book => {
                        return(
                            <div onClick={() => console.log("CliclLiBRO")} key={book.id}>
                                <h4>{book.image}</h4>
                                <h5>{book.title}</h5>
                                <div>
                                    <p>{book.author} - {book.year}</p>
                                </div>
                            </div>
                        )
                    })
                }
           </>
        </div>
    )
}

export default BookList
