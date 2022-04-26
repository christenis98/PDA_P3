import React from 'react';
import BookCard from './BookCard';

const ListaLibros = (props) => {
    return(
        <div className='list'>
            {
                props.books.map((book, i) => {
                    return <BookCard 
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        autor={book.volumeInfo.authors}
                    />
                })
            }
        </div>
    )
}

export default ListaLibros;