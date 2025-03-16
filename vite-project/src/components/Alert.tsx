import React, { ReactNode } from 'react'

interface Props {
    text: string;
    children: ReactNode;//string
    onClose: () => void;
}
const Alert = ({ text, children, onClose }: Props) => {
    return (
        <div>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                {text}
                {children}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
            </div>
        </div>
    )
}

export default Alert
