import React from 'react';
import { booklist } from './booklist';
import { getBooksBySeries, getPublishedRangeOfSeries } from './Utils';

function App() {
    const {authors, books, genres, series} = booklist;


    return (
            <div className="min-h-screen">
                <ul>
                    {authors.map(author => (
                            <li>
                                <span>{author.name}</span>
                                <ul className="ml-5 mb-2">
                                    {
                                        series.filter(serie => author.seriesIds?.includes(serie.id)).map(serie => (
                                                <li>
                                                    <span>{serie.name} ({getBooksBySeries(books, serie.id).length} books, published {getPublishedRangeOfSeries(books, serie.id)})
                                                    </span>
                                                    <ul className="ml-5 mb-2">
                                                        {books.filter(book => serie.bookIds.includes(book.id)).map(book => (
                                                                        <li>
                                                                            {book.name} [{book.releaseYear}]
                                                                            ({book.numberInSeries?.find(({key}) => key === serie.id)?.value}/{serie.numberOfBooks})
                                                                        </li>
                                                                )
                                                        )}
                                                    </ul>
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
