"use client";

import React from "react";
import ContactCta from "./ContactCta";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    return (
        <>
            {pathname != "/contact" ? <ContactCta /> : null}
            <footer className="py-[50px] bg-custom-black">
                <div className="wrapper">
                    <div className="footer-content">
                        <p className="text-white text-[11px] md:text-[13.5px] text-center">
                            &copy; 2023 Vortex Control Technologies. All Rights
                            Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
