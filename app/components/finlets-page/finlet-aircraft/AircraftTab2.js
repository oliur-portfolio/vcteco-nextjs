import React from "react";

const AircraftTab2 = ({ showTab, mobileTab }) => {
    return (
        <div
            className={`aircraft__tab ${showTab && "aircraft__tab--show"} ${
                mobileTab && "!relative mt-[40px] xl:mt-0"
            }`}
        >
            <img
                src="/img/tab-arrow.png"
                alt="arrow"
                className={`absolute w-[29px] h-[33px] rotate-90 left-[25px] -top-7 xl:left-[-25px] xl:top-[115px] xl:rotate-0`}
            />

            <div className="">
                <p className="mb-5">
                    The Lockheed C-130 Hercules is a four-engine turboprop
                    military transport aircraft capable of using unimproved
                    runways for takeoffs and landings. The C-130 was originally
                    designed as a troop, medical evacuation and cargo transport
                    aircraft. Over 40 models and variants of the Hercules serve
                    with more than 60 nations.
                </p>

                <p className="mb-5">
                    The C-130 entered service in the 1950's. During its years of
                    service the Hercules family has participated in countless
                    military, civilian and humanitarian aid operations. The
                    C-130 has the longest continuous production run of any
                    military aircraft in history with over 2,000 aircraft
                    delivered. The C-130 is also the only military aircraft to
                    remain in continuous production for 50 years with its
                    original customer, as the updated C-130J Super Hercules.
                </p>

                <h5 className="font-bold global__text-size mb-[15px] md:mb-5">
                    Performance Advantages:
                </h5>

                <p>
                    With Finlets installed, the C-130 realizes significant drag
                    reduction, resulting in fuel savings of 6%, reduction of
                    carbon emissions of up to 5%, extended range by 200 nautical
                    miles and increased endurance of 45 minutes. Further, with
                    Finlets installed, the C130 payload increases by 3,000
                    pounds.
                </p>
            </div>
        </div>
    );
};

export default AircraftTab2;
