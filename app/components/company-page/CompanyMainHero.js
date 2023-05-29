"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import SlashSectionHeading from "../SlashSectionHeading";
import BorderImage from "../BorderImage";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyMainHero = () => {
    useEffect(() => {
        const semiImages = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsap-semi-img-container",
                start: "0 95%",
                end: "100% top",
                toggleActions: "play none none reverse",
                markers: false,
            },
        });

        semiImages.from(".gsap-semi-img-container .border__image img", {
            duration: 1.8,
            autoAlpha: 0,
            stagger: 0.4,
            delay: 0.2,
        });

        return () => {
            semiImages.kill();
        };
    }, []);

    return (
        <section className="relative overflow-hidden pt-[40px] pb-[30px] md:py-20">
            <div className="wrapper">
                <SlashSectionHeading
                    title="The Company"
                    boldTitle="Our History"
                />

                <div className="">
                    <p className="mb-[20px] last-of-type:mb-0">
                        Over a decade ago, VCT embraced the challenge of
                        unleashing the powerful potential inherent in
                        aerodynamically controlling the vortices emanating from
                        the aft fuselage of aircraft.
                    </p>

                    <p className="mb-[20px] last-of-type:mb-0">
                        Through a combination of analytical and empirical
                        methods involving computational fluid dynamics (CFD),
                        wind tunnel and flight test data, VCT has successfully
                        developed patented technologies that control vortices,
                        reducing an aircraft operator's carbon emissions and
                        fuel consumption.
                    </p>

                    <p className="mb-[20px] last-of-type:mb-0">
                        VCT's senior engineering team are veterans of
                        Lockheed-Martin's Advanced Development Programs, also
                        known as the "Lockheed Skunkworks".
                    </p>
                </div>

                <div className="gsap-semi-img-container mt-[40px] md:mt-[60px] hidden xl:grid grid-cols-3 xl:gap-[50px] 2xl:gap-[60px]">
                    <BorderImage
                        imgUrl="/img/company-left.jpg"
                        alt="Company Image"
                    />
                    <BorderImage
                        imgUrl="/img/company-center.jpg"
                        alt="Company Image"
                    />
                    <BorderImage
                        imgUrl="/img/company-right.jpg"
                        alt="Company Image"
                    />
                </div>
            </div>

            <div className="xl:hidden mt-[36px] md:mt-[50px] ">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={700}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    <SwiperSlide>
                        <BorderImage
                            imgUrl="/img/company-left.jpg"
                            alt="Company Image"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <BorderImage
                            imgUrl="/img/company-center.jpg"
                            alt="Company Image"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <BorderImage
                            imgUrl="/img/company-right.jpg"
                            alt="Company Image"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default CompanyMainHero;
