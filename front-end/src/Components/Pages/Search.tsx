import React from 'react';
import { useParams } from 'react-router-dom';
import { IBook } from '../../interfaces/Book';
import { BookCard } from '../BookCard';

export const Search = () => {
    let {id} = useParams() as any;
    id = id.replace(/[\-]/g, ' ');

    const books: IBook[] = [
        {
            id: '123-123-123',
            title: 'A Game of Thrones',
            author: 'George R.R. Martin',
            cover: 'https://via.placeholder.com/125x180',
            series: 'A Song of Ice and Fire',
            numbersInSeries: 1
        },
        {
            id: '123-123-123',
            title: 'The Return of the Kings',
            author: 'J.R.R. Tolkien',
            cover: 'https://via.placeholder.com/125x180',
            series: 'The Lord of the Rings',
            numbersInSeries: 3
        },
        {
            id: '123-123-123',
            title: 'Project Hail Mary',
            author: 'Andy Weir',
            cover: 'https://via.placeholder.com/125x180'
        }
    ]
    return (
            <div className="container mx-auto px-3 py-5">
                <h1 className="text-4xl">Searching for: <span className="text-5xl underline">{id}</span></h1>


                <ul className="divide-y divide-gray-100">
                    {books.map(book => (
                            <BookCard props={book}/>
                    ))}
                </ul>
            </div>

    )
}

