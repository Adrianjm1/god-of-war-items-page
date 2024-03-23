import { items } from "../../utils/dummyData"
import { ItemList } from "../itemList/ItemList"
import { Selector } from "../selector/Selector"
import './container.css'
export const Container = () => {
    return (
        <div style={{ padding: '90px 0px', width: '80%', margin: 'auto' }}>
            <div>
                <h1 style={{ color: '#fff' }}>Condimentum Consecteur</h1>
            </div>
            <Selector />
            <div className="item-container">
                <ItemList items={items} />
            </div>
        </div>
    )
}
