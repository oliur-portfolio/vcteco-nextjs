"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GreenFdap = () => {
    useEffect(() => {
        const greenFdapBox = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsap-green-fdap",
                start: "-200 50%",
                end: "50% top",
                toggleActions: "play none none reverse",
                markers: false,
            },
        });

        greenFdapBox.from(".gsap-green-fdap .gsap-green-fdap-img", {
            duration: 0.6,
            x: 100,
            autoAlpha: 0,
        });

        const greenFdapBoxBtn = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsap-green-fdap .learn-btn",
                start: "-80px 90%",
                end: "100% top",
                toggleActions: "play none none reverse",
                markers: false,
            },
        });

        greenFdapBoxBtn.to(".gsap-green-fdap .learn-btn", {
            duration: 0.8,
            autoAlpha: 1,
            delay: 0.1,
        });

        return () => {
            greenFdapBox.kill();
            greenFdapBoxBtn.kill();
        };
    }, []);

    return (
        <div class="gsap-green-fdap mt-[180px] md:mt-[500px] lg:mt-0 relative">
            <div class="gsap-green-fdap-img top-[-20%] h-[200px] md:h-[446px] md:w-full md:top-[-440px] lg:h-[620px] xl:h-[565px] absolute w-full lg:w-[50vw] 2xl:h-[553px] right-0 lg:top-1/2 lg:-translate-y-1/2">
                <Image
                    src="/img/home-fdap.jpg"
                    alt="fdap"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div class="wrapper">
                <div class="px-[17px] py-[30px] mb-[20px] max-w-[1475px] md:pt-0 md:pb-[40px] w-full md:mb-40 mx-auto my-0 md:pl-[45px] 2xl:pb-[82px] md:pr-[25px] border-2 border-solid border-custom-border">
                    <div
                        class="w-full lg:w-[38vw] xl:w-[35vw] 2xl:w-[645px] max-w-full mt-[50px] mr-auto md:mt-[40px]"
                        id="box-right-offset"
                    >
                        <h5 className="text-[24px] md:text-[34px] mb-[15px] text-center md:text-left ">
                            FDAP Monitor
                        </h5>
                        <div class="box-para-text">
                            <p className="mb-[25px]">
                                Flight Data Analysis Program Monitoring System
                                (FDAP Monitor) continuously tracks relevant
                                aircraft performance parameters contained in an
                                aircraft's Flight Data Analysis Program (FDAP).
                                The FDAP Monitor will:
                            </p>

                            <ol className="list-decimal pl-[18px]">
                                <li className="pl-[4px] pb-[5px] last:pb-0">
                                    Track aircraft flight control alignment for
                                    all control surfaces on individual aircraft.
                                </li>
                                <li className="pl-[4px] pb-[5px] last:pb-0">
                                    Enable users to rapidly identify and correct
                                    control surface rigging issues, saving fuel,
                                    and reducing carbon emissions.
                                </li>
                                <li className="pl-[4px] pb-[5px] last:pb-0">
                                    Accurately track specific range for each
                                    aircraft.
                                </li>
                                <li className="pl-[4px] pb-[5px] last:pb-0">
                                    Provide data for OEM guarantee compliance
                                    for specific ranges (to within +/- 0.15%),
                                    with 95% statistical confidence.
                                </li>
                                <li className="pl-[4px] pb-[5px] last:pb-0">
                                    Provide management reports based on customer
                                    needs and specifications.
                                </li>
                            </ol>
                        </div>

                        <div className="">
                            <a
                                href="https://vcteco.com/finlets"
                                className="learn-btn custom-btn mt-[30px] mx-auto md:ml-0"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreenFdap;
