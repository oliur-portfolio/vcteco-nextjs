import React from "react";
import SectionHeading from "../../SectionHeading";
import GreenFinlet from "./GreenFinlet";
import GreenFdap from "./GreenFdap";
import GreenService from "./GreenService";

const GreenTec = () => {
    return (
        <section
            id="green-tec"
            className="overflow-hidden pt-[50px] lg:pb-[80px]"
        >
            <div className="px-[30px] md:px-[50px]">
                <SectionHeading
                    title="Green Technology"
                    boldTitle="Takes Flight"
                    desc="Moving towards carbon neutral aircraft operations won't be easy.
                Here's how VCT is supporting the world's airlines, corporate
                aviation and the military. Enabling everyone to be part of the
                solution to climate change today."
                />
            </div>

            <div className="mt-[110px]">
                <GreenFinlet />
                <GreenFdap />
                <GreenService />
            </div>
        </section>
    );
};

export default GreenTec;
