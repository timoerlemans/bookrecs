import React from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../interfaces/Book';


export const BookCard = ({props}: { props: IBook }) => {

    const numberInSeries = props.numbersInSeries !== undefined ? (
            <div className="pl-1">
                <dt className="sr-only">Book</dt>
                <dd>#{props.numbersInSeries}</dd>
            </div>
    ) : '';

    const series = props.series ? (
            <>
                <div>
                    <dt className="sr-only">Series</dt>
                    <dd>
                        {props.series}
                    </dd>
                </div>
                {numberInSeries}
            </>
    ) : ''
 
    return (
            <li>
                <Link className="p-4 flex space-x-4" to={`/book/${props.id}`}>
                    <img src={props.cover} alt=""
                         className="flex-none rounded-lg object-cover bg-gray-100"/>
                    <div className="min-w-0 relative flex flex-col justify-center flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                        <h2 className="text-lg font-semibold text-black mb-0.5">
                            {props.title}
                        </h2>
                        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                            <div className="flex-none w-full mt-0.5 font-normal">
                                <dt className="sr-only">Author</dt>

                                <dd className="inline text-black">{props.author}</dd>
                            </div>
                            {series}
                            <div className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                            </div>
                        </dl>
                    </div>
                </Link>
            </li>
    )

}
