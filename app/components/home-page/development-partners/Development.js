import React from "react";
import Image from "next/image";
import SectionHeading from "../../SectionHeading";

const Development = () => {
    return (
        <section className="py-[40px] md:py-[70px] text-center">
            <div className="px-[30px] md:px-[50px]">
                <SectionHeading title="Development Partners" />
            </div>

            <div className="wrapper">
                <div className="relative w-full h-[50px] md:w-[600px] md:h-[90px] lg:w-[1070px] lg:h-[136px] mx-auto">
                    <Image
                        src="/img/client-logos-single.jpg"
                        alt="Clients"
                        fill
                        priority
                        unoptimized
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
        </section>
    );
};

export default Development;
