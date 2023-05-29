"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isToggledMenu, setIsToggledMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsToggledMenu((prev) => !prev);
    };

    useEffect(() => {
        const bodyTag = document.querySelector("body");

        if (isToggledMenu) {
            bodyTag.classList.add("overflow-hidden");
        } else {
            bodyTag.classList.remove("overflow-hidden");
        }

        return () => {
            bodyTag.classList.remove("overflow-hidden");
        };
    }, [isToggledMenu]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header
            id="header"
            className={`header ${isScrolled && "sticky__header"} ${
                isToggledMenu ? "h-screen" : ""
            }`}
        >
            <nav className="relative flex flex-wrap items-center justify-center p-0 m-0 transition-all duration-[0.3s] ease-linear lg:flex-nowrap lg:justify-start">
                <div
                    className={`wrapper flex relative py-3 md:py-0 ${
                        isToggledMenu
                            ? "flex-col"
                            : "flex-row items-center justify-between"
                    }`}
                >
                    <Link
                        onClick={() => {
                            if (isMobile) {
                                setTimeout(() => {
                                    setIsDropdownOpen(false);
                                    setIsToggledMenu(false);
                                }, 400);
                            }
                        }}
                        href="/"
                        className="relative w-[130px] h-[66px] md:w-[195px] md:h-[100px] mt-0"
                    >
                        <Image
                            src="/img/logo.jpg"
                            alt="logo"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </Link>

                    <button
                        onClick={handleToggleMenu}
                        className={`navbar__toggler lg:hidden absolute w-[20px] h-[20px] top-[45px] md:top-[50px] right-[30px] md:right-0 -translate-y-1/2 ${
                            isToggledMenu && "change"
                        }`}
                    >
                        <div className="absolute top-0 left-0 w-full h-full">
                            <span className="bar1 toggle-bar"></span>
                            <span className="bar2 toggle-bar"></span>
                            <span className="bar3 toggle-bar"></span>
                        </div>
                    </button>

                    <div
                        className={`desktop-menu lg:block ${
                            isToggledMenu ? "block" : "hidden"
                        }`}
                    >
                        <NavItems
                            isToggledMenu={isToggledMenu}
                            setIsToggledMenu={setIsToggledMenu}
                            handleToggleMenu={handleToggleMenu}
                            isDropdownOpen={isDropdownOpen}
                            setIsDropdownOpen={setIsDropdownOpen}
                            isMobile={isMobile}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
