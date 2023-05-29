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

const ServiceMainHero = () => {
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
                <SlashSectionHeading title="Services" boldTitle="Consulting" />

                <div className="">
                    <p className="mb-[20px] last-of-type:mb-0">
                        VCT has been offering aerodynamic engineering software
                        solutions and consulting services to our customers since
                        2010. We specialize in developing technologies that
                        reduce carbon emissions and fuel consumption. We also
                        offer our customers detailed aerodynamic analysis and
                        design, innovative technology integration solutions,
                        rapid design and prototyping, and aircraft flight
                        performance validation.
                    </p>
                </div>

                <div className="gsap-semi-img-container mt-[40px] md:mt-[60px] hidden xl:grid grid-cols-3 xl:gap-[50px] 2xl:gap-[60px]">
                    <BorderImage
                        imgUrl="/img/services-left.jpg"
                        alt="Services Image"
                    />
                    <BorderImage
                        imgUrl="/img/service-center.jpg"
                        alt="Services Image"
                    />
                    <BorderImage
                        imgUrl="/img/service-right.jpg"
                        alt="Services Image"
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
                            imgUrl="/img/services-left.jpg"
                            alt="Services Image"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <BorderImage
                            imgUrl="/img/service-center.jpg"
                            alt="Services Image"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <BorderImage
                            imgUrl="/img/service-right.jpg"
                            alt="Services Image"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default ServiceMainHero;
