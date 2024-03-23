import { Menu } from "../Menu/component";

export const Menus = ({ menu }) => {
  return (
    <ul>
      {menu.map((menu) => (
        <li>
          <Menu menu={menu} />
        </li>
      ))}
    </ul>
  );
};
