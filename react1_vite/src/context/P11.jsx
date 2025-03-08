import React from 'react'
import { TransDetailsProvider } from './ExampleContext'
import C11 from './C11'
import C22 from './C22'
import C33 from './C33'
import C44 from './C44'
const P11 = () => {
    return (
        <div>
            <TransDetailsProvider>
                <C11 />
                <C22 />
                <C33 />
                <C44 />
            </TransDetailsProvider>
        </div>
    )
}

export default P11
