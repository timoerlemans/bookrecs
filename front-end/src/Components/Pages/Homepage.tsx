import React, { useState } from 'react';
import { Input } from '../Elements/Input';
import { Button } from '../Elements/Button';
import { useHistory } from 'react-router-dom';

export function Homepage() {
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        const regex = /[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|\_\@\%^\&\~\>\<]/gi;
        const cleanInput = searchInput.replace(regex, '').trim().replace(/[\s]/gi, '-')
        history.push(`/search/${cleanInput}`)
    }
    return (
            <div className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 text-white flex flex-col justify-center items-center">
                <div className="container mx-auto px-3 py-6">
                    <h1 className="text-5xl text-white text-center">Bookrecs<span className="text-sm">.fyi</span>
                    </h1>
                    <div className="mt-10 flex flex-col md:flex-row md:justify-center md:items-center">
                        <Input placeholder="Search for a book, series or author" changeHandler={
                            (event) => setSearchInput(event.target.value)
                        }
                        />
                        <Button title="Search" clickHandler={handleSubmit}/>
                    </div>
                </div>
            </div>
    )

}
