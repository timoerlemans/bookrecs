import React from 'react';
import { useParams } from 'react-router-dom';

export const Search = () => {
    let {id} = useParams() as any;
    return (
            <>
                <p>Searching for: {id}</p>
            </>
    )
}

