import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'

export default function GalleryNavigation({ galleries }) {

  const navItems = galleries.map(gallery => (
    <li>
      <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>
        {gallery.name}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/">Home</NavLink>
      <ul>
      {navItems}
      </ul>
    </nav>
  );
}
