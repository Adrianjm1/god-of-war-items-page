import React from 'react'
import { rootImage } from '../../../core/rootImages'
import './rrss.css'
export const Rrss = () => {
    const rrss = [rootImage.rrss.facebook, rootImage.rrss.instagram, rootImage.rrss.twitter, rootImage.rrss.discord]


    return (
        <div className="rrss">
            {rrss.map((r, index) => <img key={index} src={r} className="rrss-item" alt="rrssx" />)}
        </div>
    )
}
