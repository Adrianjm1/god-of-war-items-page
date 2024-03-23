import React from 'react'
import './fliter.css'
interface FilterProps {
    icon: string;
    smallText: string;
    largeText: string;
    className?: string
}

export const Filter: React.FC<FilterProps> = ({ icon, smallText, largeText, className }) => {
    return (
        <div className={`filter ${className}`}>
            <i className={`fas ${icon} green-icon`}></i>
            <div>
                <small className='smallText'>{smallText}</small>
                <p>{largeText}</p>
            </div>
            <i className="fas fa-chevron-down"></i>
        </div>
    );
};