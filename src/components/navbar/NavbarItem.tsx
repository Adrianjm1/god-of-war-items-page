import { rootImage } from "../../core/rootImages";

interface NavbarItemProps {
    item: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ item }) => (
    <div key={item} className="navbar-item">
        <p>{item}</p>
        <img className='downArrow-icon' width={10} src={rootImage.navbar.downArrow} />
    </div>
);