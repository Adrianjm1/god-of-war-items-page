import { items } from "../../utils/dummyData"
import { Filter } from "../selector/SearchBar/Filter/Filter"

export const ItemContainerHeader = () => {
    return (
        <div className="item-container-header">
            <p className="text"> Showing 15 - from {items.length} items</p>
            <Filter icon="fa-sliders" smallText="Sort by" largeText="Featured" />
        </div>
    )
}
