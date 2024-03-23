import { rootImage } from "../../core/rootImages"
import './currencies.css'
export const Currencies = () => {

    const paymentMethods = [rootImage.currencies.visa, rootImage.currencies.masterCard, rootImage.currencies.american, rootImage.currencies.skrill]
    const crypto = [rootImage.currencies.greenBtc, rootImage.currencies.btc, rootImage.currencies.eth, rootImage.currencies.litecoin]

    return (
        <div className="methods-section">
            <div className="currencies-content">

                <div className="payment-methods">
                    {paymentMethods.map((paymentMethod, index) => <img key={index} src={paymentMethod} className="acc" alt="payment method" />)}
                </div>

                <div className="crypto-methods">
                    {crypto.map((paymentMethod, index) => <img key={index} className="crypto" src={paymentMethod} alt="payment method" />)}
                    <p>  and 50+  More</p>
                </div>
            </div>
        </div>
    )
}
