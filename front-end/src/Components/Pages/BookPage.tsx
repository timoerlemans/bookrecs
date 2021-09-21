import React from 'react';
import { useParams } from 'react-router-dom';

export const BookPage = () => {
    let {id} = useParams() as any;

    return (
            <div className="container mx-auto px-3 py-5">
                <p>Book {id}</p>
            </div>
    )
}
