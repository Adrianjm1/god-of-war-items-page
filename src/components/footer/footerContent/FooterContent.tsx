import { footerData } from '../../../utils/dummyData'
import './footerContent.css'


export const FooterContent = () => {

    return (
        <div>

            <div className="footer-content">
                {footerData.map((column, index) => (
                    <div key={index} className="footer-column">
                        {column.type === 'logo' && (
                            <>
                                <img width={200} style={{ marginBottom: 10 }} src={column.content} alt="Logo" />
                                <p className='footer-titles'> {column.email}</p>
                            </>
                        )}
                        {column.title && (
                            <div className='column-title'>
                                <h3 className='footer-titles'>{column.title}</h3>
                                <div className='column-subs'>
                                    {column.items.map((item, i) => (
                                        <p className='footer-subs' key={i}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                        {column.type === 'image' && (
                            <div className='trustpilot'>
                                <img width={100} height={20} src={column.content} alt="Imagen" />
                                <p>Trustpilot reviews</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='footer-end'>
                &copy; 2020 Chicksgold.com. All rights reserved.
            </div>
        </div>
    )
}
