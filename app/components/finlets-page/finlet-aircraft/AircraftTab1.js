import React from "react";
import AircraftTabList from "./AircraftTabList";

const AircraftTab1 = ({ showTab, mobileTab }) => {
    return (
        <div
            className={`aircraft__tab ${showTab && "aircraft__tab--show"} ${
                mobileTab && "!relative mt-[40px] xl:mt-0"
            }`}
        >
            <img
                src="/img/tab-arrow.png"
                alt="arrow"
                className={`absolute w-[29px] h-[33px] rotate-90 left-[25px] -top-7 xl:left-[-25px] xl:top-[37px] xl:rotate-0`}
            />

            <div className="">
                <p className="mb-5">
                    Since entering service in April of 1968, the Boeing 737 has
                    become one of the most ubiquitous airliners to serve the
                    traveling public, globally.
                </p>

                <h5 className="font-bold global__text-size mb-[15px] md:mb-5">
                    Estimated Fuel Savings using VCT Finlets on the worldwide
                    Boeing 737 fleet
                </h5>
            </div>

            <ul className="aircraft__lists">
                <AircraftTabList title="Worldwide Fleet" value="7,000" />

                <AircraftTabList
                    title="Flight Hours Per Year (Utilization)"
                    value="3,650"
                />

                <AircraftTabList title="Gallons Saved Per Year" value="263M" />

                <AircraftTabList
                    title="Fuel Savings Per Aircraft Annually (Est. At $2 Per Gallon) With a 1.2% Savings Per Aircraft"
                    value="$75,000"
                />

                <AircraftTabList
                    title="Reduction In Carbon Emission"
                    value="5.56bn Pounds"
                />

                <AircraftTabList
                    title="Worldwide Fleet Savings Per Year"
                    value="$526M"
                />
            </ul>
        </div>
    );
};

export default AircraftTab1;
