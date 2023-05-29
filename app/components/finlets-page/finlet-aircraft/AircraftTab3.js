import React from "react";

const AircraftTab3 = ({ showTab, mobileTab }) => {
    return (
        <div
            className={`aircraft__tab ${showTab && "aircraft__tab--show"} ${
                mobileTab && "!relative mt-[40px] xl:mt-0"
            }`}
        >
            <img
                src="/img/tab-arrow.png"
                alt="arrow"
                className={`absolute w-[29px] h-[33px] rotate-90 left-[25px] -top-7 xl:left-[-25px] xl:top-[195px] xl:rotate-0`}
            />

            <div className="">
                <p className="mb-5">
                    The Boeing C-17 Globemaster III is a large military
                    transport aircraft developed for the United States Air Force
                    (USAF). The C-17 is used for rapid strategic airlift of
                    troops and cargo to main operating bases or forward
                    operating bases throughout the world. It can also perform
                    tactical airlift, medical evacuation and airdrop missions.
                </p>

                <h5 className="font-bold global__text-size mb-[15px] md:mb-5">
                    Performance Advantages:
                </h5>

                <p className="mb-10">
                    With Finlets installed, the C-17 realizes significant drag
                    reduction, resulting in fuel savings of 1.4%.
                </p>
            </div>
        </div>
    );
};

export default AircraftTab3;
