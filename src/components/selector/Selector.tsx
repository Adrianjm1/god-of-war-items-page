import React from 'react'
import { GameSelector } from './GameSelector/GameSelector'
import { SearchBar } from './SearchBar/SearchBar/SearchBar'
import { Filter } from './SearchBar/Filter/Filter'
import './selector.css'
export const Selector = () => {
    return (
        <div className='selectors'>
            <GameSelector />
            <div className='search-group'>
                <SearchBar />
                <Filter icon="fa-dollar-sign" smallText="Price" largeText="All" className='borderRight' />
                <Filter icon="fa-feather" smallText="Item type" largeText="All" className='radius-right' />
            </div>

        </div>
    )
}
