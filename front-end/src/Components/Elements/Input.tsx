import React from 'react';

export interface IInput {
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    id?: string;
    type?: string;
}

export const Input = (props: IInput): JSX.Element => {
    const classes = "text-black leading-normal px-4 py-2 mb-5 md:mb-0 md:mr-5 rounded min-w-350px";

    return (
            <>
                {(!props.label) ? '' : <label htmlFor={props.id}>{props.label}</label>}
                <input type={props.type ?? 'text'} id={props.id} placeholder={props.placeholder}
                       className={classes}
                       onChange={props.changeHandler}/>
            </>
    )
}
