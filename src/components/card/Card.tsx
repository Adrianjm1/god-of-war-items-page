import { rootImage } from "../../core/rootImages";
import { CardProps } from "../../interfaces/ItemList.interface";
import './card.css'
export const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <div className="card">
            <div className="header-container">
                <div className="onsale-stock">
                    <div className="on-sale">
                        <div className="green-pointer">
                        </div>
                        <p>ON SALE</p>
                    </div>
                    <p className="in-stock">In Stock</p>
                </div>
                <div className="stock-input-container">
                    <input defaultValue={1} type="number" className="stock-input" />
                </div>
            </div>
            <div className="img-container">
                <img width={60} height={50} src={item.image} alt={item.title} className="card-image" />
            </div>
            <div className="title-line">
                <h2 className="card-title">{item.title}</h2>
                <img width={30} height={30} src={rootImage.container.tag} alt={item.title} className="card-image" />
            </div>
            <div className="price-line">
                <p className="card-price">{item.offerPrice}</p>
                <p className="card-price-offer">{item.price}</p>
            </div>
            <p className="card-description">{item.description}</p>
            <div className="card-buttons">
                <button className="details-button">Details</button>
                <button className="add-button"><p>ADD </p> <div>
                    <i className="fa fa-shopping-cart icon-cart"></i>
                </div></button>
            </div>
        </div>
    );
};

