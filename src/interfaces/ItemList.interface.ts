export interface Item {
    id: number;
    image: string;
    title: string;
    price: string;
    description: string;
    offerPrice: string;

}

export interface ItemListProps {
    items: Item[];
}


export interface CardProps {
    item: Item;
}