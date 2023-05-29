"use client";

import { useEffect, useRef } from "react";
import BannerImage from "./BannerImage";
import CountUp from "react-countup";
import { gsap } from "gsap";

const BannerHero = () => {
    const countUpRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    if (countUpRef.current) {
                        countUpRef.current.start;
                    }

                    observer.unobserve(countUpRef.current);
                }
            },
            { threshold: 0 }
        );

        observer.observe(countUpRef.current);

        return () => {
            if (countUpRef.current) {
                observer.unobserve(countUpRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const banner = gsap.timeline();

        banner.from(".banner-content h1", {
            duration: 1.5,
            autoAlpha: 0,
            delay: 0.4,
        });
        banner.from(
            ".banner-content h1 span",
            {
                duration: 1.5,
                autoAlpha: 0,
            },
            "-=0.8"
        );

        return () => {
            banner.kill();
        };
    }, []);

    return (
        <section className="pt-[3px] 2xl:pt-[70px]">
            <div className="wrapper">
                <div className="min-h-[340px] md:min-h-[310px] mt-[50px] xl:min-h-[400px]">
                    <div className="banner-content">
                        <h1 className="text-[28px] mb-0 leading-[36px] md:text-[38px] md:leading-none lg:text-[46px] 2xl:text-[67px] 2xl:mb-[5px]">
                            Carbon Reduction Solutions For{" "}
                            <span className="mt-[5px] md:mt-[8px] xl:mt-[5px] inline md:block font-bold">
                                Today's Commercial & Military Fleet
                            </span>
                        </h1>

                        <p className="text-[18px] leading-[28px] my-[10px] md:my-[25px] sm:leading-none sm:text-[22px] lg:leading-none lg:text-[26px] 2xl:text-[29px] 2xl:font-normal xl:my-[25px]">
                            Sustainable Aviation Solutions To Achieve Carbon
                            Neutrality
                        </p>

                        <div className="max-w-[500px] pr-[7px] lg:max-w-[850px] 2xl:max-w-[950px] w-full border flex justify-between pl-[7px] lg:pr-[27px] py-[7px] border-solid border-[#272b2f]">
                            <div class="flex flex-col items-start lg:items-center lg:flex-row">
                                <div class="fuel-number countup-number">
                                    <p
                                        ref={countUpRef}
                                        className="text-[19px] leading-[28px] md:leading-[1.4] md:text-[24px] 2xl:text-[26px] bg-custom-black text-custom-white md:tracking-[3px] w-[138px] md:w-[230px] flex justify-center items-center md:my-0 pt-[3px] font-courier font-normal"
                                    >
                                        <CountUp
                                            start={1029920 - 525120}
                                            end={1029920}
                                            delay={0}
                                            duration={10}
                                            separator=","
                                            decimal="."
                                            prefix=""
                                            suffix=""
                                        />
                                    </p>
                                </div>

                                <div>
                                    <p class="text-[13px] leading-[16px] mt-[6px] lg:mt-0 md:text-[16px] 2xl:text-[18px] md:leading-[28px] lg:ml-2.5 xl:my-0 font-normal">
                                        Fuel Gallons Saved
                                    </p>
                                </div>
                            </div>

                            <div class="flex flex-col items-start lg:items-center lg:flex-row">
                                <div class="lbs-number countup-number">
                                    <p
                                        ref={countUpRef}
                                        class="text-[19px] leading-[28px] md:leading-[1.4] md:text-[24px] 2xl:text-[26px] bg-custom-black text-custom-white md:tracking-[3px] w-[138px] md:w-[230px] flex justify-center items-center md:my-0 pt-[3px] font-courier font-normal"
                                    >
                                        <CountUp
                                            start={21499657 - 525120}
                                            end={21499657}
                                            delay={0}
                                            duration={10}
                                            separator=","
                                            decimal="."
                                            prefix=""
                                            suffix=""
                                        />
                                    </p>
                                </div>

                                <div>
                                    <p class="text-[13px] leading-[16px] mt-[6px] lg:mt-0 md:text-[16px] 2xl:text-[18px] md:leading-[28px] lg:ml-2.5 xl:my-0 font-normal">
                                        Lbs. Carbon Saved
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full max-w-[2000px]">
                <BannerImage imgUrl="/img/banner-image1.jpg" mobileImageHide />
                <BannerImage imgUrl="/img/home-mid.jpg" />
                <BannerImage imgUrl="/img/finlet4.jpg" mobileImageHide />
            </div>
        </section>
    );
};

export default BannerHero;
