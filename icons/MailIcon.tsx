import React from 'react'
import { IIcon } from '../interfaces/ComponentInterfaces'

const MailIcon: React.FC<IIcon> = ({width, height, className}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 22 21"
            fill="none"
            className={className}
        >
            <path
                d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <path
                d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    )
}

export default MailIcon