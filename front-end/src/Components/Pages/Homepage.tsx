import React, { useState } from 'react';
import { Input } from '../Elements/Input';
import { Button } from '../Elements/Button';
import { useHistory } from 'react-router-dom';

export function Homepage() {
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        history.push(`/search/${searchInput}`)
        console.log(searchInput);
    }
    return (
            <>
                <h1 className="text-5xl text-white text-center">Bookrecs<span className="text-sm">.fyi</span>
                </h1>
                <div className="mt-10 flex flex-col md:flex-row md:justify-center md:items-center">
                    <Input placeholder="Search for a book, series or author" changeHandler={
                        (event) => setSearchInput(event.target.value)
                    }

                    />
                    <Button title="Search" clickHandler={handleSubmit}/>
                </div>
            </>
    )

}
