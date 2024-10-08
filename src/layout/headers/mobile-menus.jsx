import React, { useState } from "react";
import Link from "next/link";
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [openMenus, setOpenMenus] = useState({});

  // Toggle menu visibility
  const toggleMenu = (menuTitle) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuTitle]: !prev[menuTitle],
    }));
  };

  // Recursive function to render submenus
  const renderSubMenu = (subMenus, parentTitle) => (
    <ul
      className="submenu"
      style={{
        display: openMenus[parentTitle] ? "block" : "none",
      }}
    >
      {subMenus.map((sub, i) => (
        <li key={i} className={sub.sub_menus ? "has-dropdown" : ""}>
          <Link href={sub.link}>{sub.title}</Link>
          {/* If the submenu has its own nested items, render them recursively */}
          {sub.sub_menus && (
            <>
              <a
                className={`mean-expand ${openMenus[sub.title] ? "mean-clicked" : ""}`}
                onClick={() => toggleMenu(sub.title)}
                style={{ fontSize: "18px", cursor: "pointer" }}
              >
                <i className="fal fa-plus"></i>
              </a>
              {renderSubMenu(sub.sub_menus, sub.title)}
            </>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="mean-nav">
      <ul>
        {menu_data.map((menu, i) => (
          <React.Fragment key={i}>
            {!menu.has_dropdown && (
              <li>
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            )}

            {menu.has_dropdown && !menu.mega_menu && (
              <li className="has-dropdown">
                <Link href={menu.link}>{menu.title}</Link>
                <a
                  className={`mean-expand ${openMenus[menu.title] ? "mean-clicked" : ""}`}
                  onClick={() => toggleMenu(menu.title)}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  <i className="fal fa-plus"></i>
                </a>
                {renderSubMenu(menu.sub_menus, menu.title)}
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;
