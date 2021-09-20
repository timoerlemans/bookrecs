import React from 'react';

export interface IButtonProps {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    title: string;
    bgColor?: string;
    textColor?: string;
    id?: string;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = (props: IButtonProps): JSX.Element => {
    const classes = [
        'rounded-xl',
        'px-4', 'py-2', `bg-${props.bgColor ?? 'white'}`, `text-${props.textColor ?? 'black'}`]

    return (<button id={props.id} type={props.type ?? 'button'}
                    className={classes.join(' ')}
                    onClick={props.clickHandler}>{props.title ?? ''}</button>
    )
}

