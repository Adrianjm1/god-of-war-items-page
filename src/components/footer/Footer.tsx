import './footer.css'
import { FooterContent } from './footerContent/FooterContent'
import { Rrss } from './rrss/Rrss'
export const Footer = () => {
    return (
        <div className='footer'>
            <Rrss />
            <hr className='divider' />
            <FooterContent />
        </div>
    )
}
