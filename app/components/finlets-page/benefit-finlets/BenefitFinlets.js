import React from "react";
import SectionHeading from "../../SectionHeading";
import BenefitFinletItem from "./BenefitFinletItem";

const BenefitFinlets = () => {
    const benefitFinletItemLeft = [
        {
            title: "In many cases, increased payload",
        },
        {
            title: "Increased time on station (important for military aircraft)",
        },
        {
            title: "Reduced Carbon Emissions - Example: 750,000 lbs. per year for a single Boeing 737 aircraft",
        },
        {
            title: "The drag reduction is in addition to other devices, such as winglets, if they are also installed on the aircraft",
        },
    ];

    const benefitFinletItemRight = [
        {
            title: "The modification is light weight and has minimum impact to an aircraft's structure and can be accomplished in four elapsed hours and sixteen man hours by line maintenance",
        },
        {
            title: "VCT Finlets are a totally passive system with no impact to aircraft systems or maintenance costs other than routine visual inspections.",
        },
    ];

    return (
        <section className="pt-[35px] pb-[50px] md:pt-[60px] md:pb-[70px] bg-custom-black">
            <div className="wrapper">
                <div className="">
                    <SectionHeading
                        title="Additional"
                        boldTitle="Benefits of Finlets"
                        whiteHeading
                        leftHeading
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[130px] max-w-[1350px]">
                        <ul>
                            {benefitFinletItemLeft.map((item, i) => (
                                <BenefitFinletItem item={item} key={i} />
                            ))}
                        </ul>

                        <ul>
                            {benefitFinletItemRight.map((item, i) => (
                                <BenefitFinletItem item={item} key={i} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitFinlets;
