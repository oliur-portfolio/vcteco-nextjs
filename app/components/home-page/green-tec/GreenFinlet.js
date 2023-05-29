"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GreenFinlet = () => {
    useEffect(() => {
        const greenFinletBox = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsap-green-finlet",
                start: "-200 50%",
                end: "50% top",
                toggleActions: "play none none reverse",
                markers: false,
            },
        });

        greenFinletBox.from(".gsap-green-finlet .gsap-green-finlet-img", {
            duration: 0.6,
            x: -100,
            autoAlpha: 0,
        });

        const greenFinletBoxBtn = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsap-green-finlet .learn-btn",
                start: "-80px 90%",
                end: "100% top",
                toggleActions: "play none none reverse",
                markers: false,
            },
        });

        greenFinletBoxBtn.to(".gsap-green-finlet .learn-btn", {
            duration: 0.8,
            autoAlpha: 1,
            delay: 0.1,
        });

        return () => {
            greenFinletBox.kill();
            greenFinletBoxBtn.kill();
        };
    }, []);

    return (
        <div class="gsap-green-finlet mt-[180px] md:mt-[500px] lg:mt-0 relative">
            <div class="gsap-green-finlet-img top-[-30%] h-[200px] md:h-[446px] md:w-full md:top-[-440px] lg:h-[620px] xl:h-[565px] absolute w-full lg:w-[50vw] 2xl:h-[553px] left-0 lg:top-1/2 lg:-translate-y-1/2">
                <Image
                    src="/img/home-finlets.jpg"
                    alt="finlets"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div class="wrapper">
                <div class="px-[17px] py-[30px] mb-[20px] max-w-[1475px] md:pt-0 md:pb-[40px] w-full md:mb-40 mx-auto my-0 md:pl-[45px] 2xl:pb-[82px] md:pr-[25px] border-2 border-solid border-custom-border">
                    <div
                        class="box-right-text w-full lg:w-[38vw] xl:w-[35vw] 2xl:w-[645px] max-w-full mt-[50px] ml-auto md:mt-[40px]"
                        id="box-right-offset"
                    >
                        <h5 className="text-[24px] md:text-[34px] mb-[15px] text-center md:text-left ">
                            Finlets
                        </h5>
                        <div class="box-para-text">
                            <p className="mb-[25px]">
                                Normally the airflow around the aft body of an
                                aircraft becomes separated which causes drag,
                                reduces performance, and increases fuel
                                consumption and carbon emissions.
                            </p>
                            <p className="mb-0">
                                VCT Finlets control vortex flow to reduce
                                aircraft aerodynamic drag translating into a
                                reduction in aircraft fuel consumption and
                                carbon emissions by 1% to 6% depending upon
                                aircraft type.
                            </p>
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

export default GreenFinlet;
