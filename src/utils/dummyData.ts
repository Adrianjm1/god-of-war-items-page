import { rootImage } from "../core/rootImages";

export const images = [
    'https://i.ebayimg.com/images/g/OCwAAOSwGL5lLat7/s-l1200.webp',
    'https://m.media-amazon.com/images/I/81q4rzjHN-L.jpg',
    'https://i0.wp.com/www.solojugadores.com/wp-content/uploads/2023/01/God-of-War-Ragnarok-mejores-ataques-fuertes-y-ligeros-para-la-lanza-de-draupnir.webp?ssl=1',
    'https://api.duniagames.co.id/api/content/upload/file/7819734811580202820.JPG',
];

export const items = Array(165).fill(null).map((_, index) => ({
    id: index + 1,
    image: images[index % images.length],
    title: 'Kratos Weapon',
    price: `$100`,
    offerPrice: `$80`,
    description: `This is a description for Kratos weapon.`,
}));



export const footerData = [
    {
        type: 'logo',
        content: rootImage.navbar.logo,
        email: 'info@example.com'
    },
    {
        title: 'Chicks Gold',
        items: ['Games', 'About Us', 'Blog', 'Sistemap']
    },
    {
        title: 'Support',
        items: ['Contact Us ', 'FAQ']
    },
    {
        title: 'Legal',
        items: ['Privacy Policy', 'Terms of Service', 'Copyright Policy']
    },
    {
        type: 'image',
        content: rootImage.container.trustpilot
    }
];
