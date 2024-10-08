import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li
            key={i}
            className={`${item.has_dropdown ? "has-dropdown" : ""} ${
              item.mega_menu ? "has-megamenu" : ""
            }`}
          >
            <Link href={item.link}>{item.title}</Link>

            {item.sub_menus && (
              <ul className="submenu">
                {item.sub_menus.map((sub_item, sub_i) => (
                  <li key={sub_i} className={`${sub_item.sub_menus ? "has-dropdown" : ""}`}>
                    <Link href={sub_item.link}>{sub_item.title}</Link>

                    {sub_item.sub_menus && (
                      <ul className="submenu">
                        {sub_item.sub_menus.map((nested_item, nested_i) => (
                          <li key={nested_i}>
                            <Link href={nested_item.link}>{nested_item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {item.mega_menu && (
              <ul className="mega-menu">
                {item.mega_menu.map((mega_item, mega_i) => (
                  <li key={mega_i}>
                    <Link href={mega_item.link}>{mega_item.title}</Link>
                    <ul className="mega-menu-layout">
                      {mega_item.layout.map((m_item, m_i) => (
                        <li key={m_i}>
                          <Link href={m_item.link}>{m_item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
