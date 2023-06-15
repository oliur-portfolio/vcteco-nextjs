"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({
    isToggledMenu,
    setIsToggledMenu,
    isMobile,
    isDropdownOpen,
    setIsDropdownOpen,
}) => {
    const pathname = usePathname();

    const toggleDropdown = () => {
        setIsDropdownOpen((prevDropdown) => !prevDropdown);
    };

    const handleMobileDropdown = () => {
        toggleDropdown();
        setIsToggledMenu(false);
    };

    const handleMobileNavClose = () => {
        setIsDropdownOpen(false);
        setIsToggledMenu(false);
    };

    // Set Menu Items
    const menuItems = [
        { label: "Home", link: "/" },
        {
            label: "Products",
            link: "/finlets",
            subMenu: [
                { label: "Finlets", link: "/finlets" },
                { label: "FDAP Monitor", link: "fdap-monitor" },
            ],
        },
        { label: "Services", link: "/services" },
        { label: "Company", link: "/company" },
        { label: "Contact Us", link: "/contact" },
        { label: "Partners", link: "/partners" },
    ];

    return (
        <ul className="flex-col lg:flex-row ml-auto mb-lg-0 flex pl-0 list-none">
            {menuItems.map((menu, i) => (
                <li
                    key={i}
                    className={`mb-[30px] first:mt-[50px] lg:mr-[42px] lg:mb-0 lg:first:mt-0 lg:last:mr-0 list-none relative dropdown-hover ${
                        isDropdownOpen && "show"
                    }`}
                >
                    <Link
                        href={menu.link}
                        onClick={
                            isMobile && menu.subMenu
                                ? handleMobileDropdown
                                : isMobile
                                ? handleMobileNavClose
                                : null
                        }
                        className={`nav-link inline-block lg:block ${
                            pathname === menu.link ? "active" : ""
                        } ${isToggledMenu ? "py-0" : "py-[35px]"}`}
                    >
                        {menu.label}
                    </Link>

                    {menu.subMenu && (
                        <div className="dropdown-container ml-[40px] mt-[30px] lg:ml-0 lg:mt-0">
                            <ul>
                                {menu.subMenu.map((subItem, i) => (
                                    <li
                                        key={i}
                                        className="mr-0 mt-0 mb-[20px] last:mb-0"
                                    >
                                        <Link
                                            href={subItem.link}
                                            onClick={
                                                isMobile
                                                    ? handleMobileNavClose
                                                    : null
                                            }
                                            className="nav-link"
                                        >
                                            {subItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavItems;
