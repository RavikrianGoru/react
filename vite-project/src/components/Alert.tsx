import React, { ReactNode } from 'react'

interface Props {
    text: string;
    children: ReactNode;//string
}
const Alert = ({ text, children }: Props) => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {text}
                {children}
            </div>
        </div>
    )
}

export default Alert
