"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GreenService = () => {
    useEffect(() => {
        const greenServiceBox = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsap-green-service",
                start: "-200 50%",
                end: "50% top",
                toggleActions: "play none none reverse",
                markers: false,
            },
        });

        greenServiceBox.from(".gsap-green-service .gsap-green-service-img", {
            duration: 0.6,
            x: -100,
            autoAlpha: 0,
        });

        const greenServiceBoxBtn = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsap-green-service .learn-btn",
                start: "-80px 90%",
                end: "100% top",
                toggleActions: "play none none reverse",
                markers: false,
            },
        });

        greenServiceBoxBtn.to(".gsap-green-service .learn-btn", {
            duration: 0.8,
            autoAlpha: 1,
            delay: 0.1,
        });

        return () => {
            greenServiceBox.kill();
            greenServiceBoxBtn.kill();
        };
    }, []);

    return (
        <div class="gsap-green-service mt-[180px] md:mt-[500px] lg:mt-0 relative">
            <div class="gsap-green-service-img top-[-30%] h-[200px] md:h-[446px] md:w-full md:top-[-440px] lg:h-[620px] xl:h-[565px] absolute w-full lg:w-[50vw] 2xl:h-[553px] left-0 lg:top-1/2 lg:-translate-y-1/2">
                <Image
                    src="/img/home-consulting.jpg"
                    alt="consulting"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div class="wrapper">
                <div class="px-[17px] py-[30px] max-w-[1475px] md:pt-0 w-full mb-0 mx-auto my-0 md:pl-[45px] md:pr-[25px] border-2 border-solid border-custom-border">
                    <div
                        class="box-right-text w-full lg:w-[38vw] xl:w-[35vw] 2xl:w-[645px] max-w-full mt-[50px] ml-auto md:mt-[40px]"
                        id="box-right-offset"
                    >
                        <h5 className="text-[24px] md:text-[34px] mb-[15px] text-center md:text-left ">
                            Consulting Services
                        </h5>
                        <div class="box-para-text">
                            <p className="mb-[25px]">
                                VCT works directly with military and commercial
                                aircraft clients to provide a detailed analysis
                                of their fleets, while developing proprietary
                                software and products to improve aerodynamic
                                performance and carbon reduction.
                            </p>
                            <p className="mb-0">
                                Our highly qualified team of proven engineers
                                are unparalleled in experience and can tailor a
                                custom program to meet customer specific needs.
                            </p>
                        </div>

                        <div>
                            <a
                                href="https://vcteco.com/services"
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

export default GreenService;
