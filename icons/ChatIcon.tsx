import React from 'react'
import { IIcon } from '../interfaces/ComponentInterfaces'

const ChatIcon: React.FC<IIcon> = ({height, width, className}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 22 22"
            fill="none"
            className={className}
        >
            <path
                d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
            <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
            <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
        </svg>
    )
}

export default ChatIcon