import { useState, useEffect } from 'react';

const useResize = (width: number) => {
    const [isWindowLarger, setIsWindowLarger] = useState(window.innerWidth > width);

    useEffect(() => {
        const handleResize = () => {
            setIsWindowLarger(window.innerWidth > width);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]); // Depend on 'width' so if it changes, the effect runs again

    return isWindowLarger;
}

export default useResize;