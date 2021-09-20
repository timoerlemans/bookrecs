import React, { ChangeEvent } from 'react';
import { Input } from '../Elements/Input';
import { Button } from '../Elements/Button';

export class Homepage extends React.Component {

    input: string = '';

    handleInputChange(text: ChangeEvent<HTMLInputElement>) {
        this.input = text.currentTarget.value;
    }

    handleSubmit() {
        console.log(this.input);
    }

    render() {
        return (

                <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-500 py-6 flex flex-col justify-center items-center">
                    <div className="container-xl mx-auto">
                        <h1 className="text-5xl text-white text-center">Bookrecs<span className="text-sm">.fyi</span>
                        </h1>
                        <div className="mt-10">
                            <Input placeholder="Search for a book, series or author" changeHandler={
                                this.handleInputChange
                            }

                            />
                            <Button title="Search" clickHandler={this.handleSubmit}/>
                        </div>
                    </div>
                </div>
        )
    }
}
