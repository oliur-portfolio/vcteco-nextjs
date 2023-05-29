"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "../../SectionHeading";
import AircraftTab1 from "./AircraftTab1";
import AircraftTab2 from "./AircraftTab2";
import AircraftTab3 from "./AircraftTab3";

const FinletAircraft = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const [activeTabHeight, setActiveTabHeight] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const tabContent = document.querySelector(
            ".aircraft__tab-desktop .aircraft__tab--show"
        );
        if (tabContent) {
            setActiveTabHeight(tabContent.scrollHeight);
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [tabIndex, loading]);

    useEffect(() => {
        const handleWindowResize = () => {
            const tabContent = document.querySelector(
                ".aircraft__tab-desktop .aircraft__tab--show"
            );
            if (tabContent) {
                setActiveTabHeight(tabContent.scrollHeight);
            }
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const handleTabBtn = (index) => {
        setTabIndex(index);
    };

    return (
        <section className="pb-[40px] md:pb-[60px] xl:pb-[100px]">
            <SectionHeading
                title="Finlet Technology"
                boldTitle="Applicable Aircraft"
            />

            <div className="wrapper mt-[40px]">
                {loading ? (
                    <p className="text-xl font-semibold xl:text-2xl">
                        Loading...
                    </p>
                ) : (
                    <div className="flex items-start gap-[80px]">
                        <div className="flex flex-col min-w-full w-full xl:min-w-[340px] xl:w-[340px] xl:mt-[40px]">
                            <div className="mb-[25px] md:mb-[47px]">
                                <button
                                    onClick={() => handleTabBtn(1)}
                                    className={`tab-btn ${
                                        tabIndex === 1
                                            ? "tab-btn--active"
                                            : null
                                    }`}
                                >
                                    Boeing 737 Family
                                </button>

                                <div className="aircraft__tab-mobile">
                                    <AircraftTab1
                                        mobileTab
                                        showTab={tabIndex === 1 ? true : false}
                                    />
                                </div>
                            </div>
                            <div className="mb-[25px] md:mb-[47px]">
                                <button
                                    onClick={() => handleTabBtn(2)}
                                    className={`tab-btn ${
                                        tabIndex === 2
                                            ? "tab-btn--active"
                                            : null
                                    }`}
                                >
                                    C130 /L100 Hercules
                                </button>

                                <div className="aircraft__tab-mobile">
                                    <AircraftTab2
                                        mobileTab
                                        showTab={tabIndex === 2 ? true : false}
                                    />
                                </div>
                            </div>
                            <div className="mb-[25px] md:mb-[47px]">
                                <button
                                    onClick={() => handleTabBtn(3)}
                                    className={`tab-btn ${
                                        tabIndex === 3
                                            ? "tab-btn--active"
                                            : null
                                    }`}
                                >
                                    C17 Globemaster III
                                </button>

                                <div className="aircraft__tab-mobile">
                                    <AircraftTab3
                                        mobileTab
                                        showTab={tabIndex === 3 ? true : false}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className="aircraft__tab-desktop flex-1 relative hidden xl:block"
                            style={{ height: activeTabHeight }}
                        >
                            {/* Tabs */}
                            <AircraftTab1
                                showTab={tabIndex === 1 ? true : false}
                            />
                            <AircraftTab2
                                showTab={tabIndex === 2 ? true : false}
                            />
                            <AircraftTab3
                                showTab={tabIndex === 3 ? true : false}
                            />
                            {/* Tabs */}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FinletAircraft;
