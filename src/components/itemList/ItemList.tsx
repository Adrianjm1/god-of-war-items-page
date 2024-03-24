import { useState } from "react";
import { Card } from "../card/Card";
import Paginator from "./paginator/Paginator";
import { ItemListProps } from "../../interfaces/ItemList.interface";

import './itemList.css'

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);


    return (
        <>

            <div className="item-list">
                {items.slice(startIndex, endIndex).map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>

            <Paginator totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />

        </>
    );
};

