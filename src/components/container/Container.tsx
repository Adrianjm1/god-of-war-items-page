import { items } from "../../utils/dummyData"
import { ItemList } from "../itemList/ItemList"
import { Selector } from "../selector/Selector"
import { ItemContainerHeader } from "./ItemContainerHeader"
import './container.css'
export const Container = () => {
    return (
        <div style={{ padding: '90px 0px', width: '80%', margin: 'auto' }}>
            <div>
                <h1 className="title-page" >Condimentum Consecteur</h1>
            </div>
            <Selector />
            <div className="item-container">
                <ItemContainerHeader />
                <ItemList items={items} />
            </div>
        </div>
    )
}
