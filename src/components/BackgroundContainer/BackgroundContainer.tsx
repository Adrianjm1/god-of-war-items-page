import React, { ReactNode } from 'react';
import { rootImage } from '../../core/rootImages';

interface BackgroundContainerProps {
    children: ReactNode;
}

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({ children }) => {
    return (
        <div className='background-container' style={{ position: 'relative' }}>
            <div style={{
                backgroundImage: `url(${rootImage.container.background})`,
                backgroundSize: 'cover', // Asegura que la imagen cubra todo el div
                backgroundPosition: 'center', // Centra la imagen en el div
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }} />
            <div style={{
                backgroundColor: 'rgba(69, 70, 89, 0.8)', // #454659 con transparencia 0.9
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }} />
            <div style={{ position: 'relative' }}>
                {children}
            </div>
        </div>
    )
}