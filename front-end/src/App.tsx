import React, { useEffect, useState } from 'react';
import { getBooksBySeries, getPublishedRangeOfSeries, getSeriesByAuthor, getStandaloneBooksByAuthor } from './Utils';
import axios from 'axios';
import { IBookList } from './interfaces/BookList';

function App() {
    const [data, setData] = useState<IBookList>({
        authors: [],
        books: [],
        genres: [],
        series: []
    });
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        axios.get<IBookList>('https://raw.githubusercontent.com/timoerlemans/bookrecs/v1/front-end/src/assets/json/booklist.json')
                // .then(response => response.json())
                .then((response) => {
                    setData(response.data);
                }).finally(() => {
            setLoading(false);
        });
    }, []);

    const {authors, books, genres, series} = data;

    if (loading) {
        return (<div>Loading</div>);
    }

    return (
            <div className="min-h-screen">

                <ul>
                    {authors.map(author => (
                            <li key={`author-${author.id}`}>
                                <span>{author.name}</span>
                                <ul className="ml-5 mb-2">
                                    {
                                        getSeriesByAuthor(series, author.id).map(idvSeries => (
                                                <li key={`series-${idvSeries.id}`}>
                 <span>{idvSeries.name} ({getBooksBySeries(books, idvSeries.id).length} books, published {getPublishedRangeOfSeries(books, idvSeries.id)})
                 </span>
                                                    <ul className="ml-5 mb-2">
                                                        {getBooksBySeries(books, idvSeries.id).map(book => (
                                                                        <li key={`book-${book.id}`}>
                                                                            {book.name} [{book.releaseYear}]
                                                                            ({book.numberInSeries?.find(({key}) => key === idvSeries.id)?.value}/{idvSeries.numberOfBooks})
                                                                        </li>
                                                                )
                                                        )}
                                                    </ul>
                                                </li>
                                        ))
                                    }
                                    {
                                        getStandaloneBooksByAuthor(books, author.id).map(book => (
                                                <li key={`book-${book.id}`}>
                                                    {book.name} [{book.releaseYear}]
                                                </li>
                                        ))
                                    }
                                </ul>

                            </li>
                    ))}

                </ul>
            </div>
    )
}

export default App;
