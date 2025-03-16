import React from 'react'

interface Props {
    children: string;
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'danger';//optional and set of valid data for color property like enum in java

}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
    return (
        <div>
            <button color='primary' type="button" className={'btn btn-' + color} onClick={onClick}>{children}</button>
        </div >
    )
}

export default Button
