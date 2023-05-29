"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import SectionHeading from "../../SectionHeading";
import BorderImage from "../../BorderImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FinletDevelopment = () => {
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
        <section className="pt-[32px] pb-[40px] md:pt-[76px] md:pb-[80px]">
            <div className="wrapper">
                <div className="">
                    <SectionHeading
                        title="Finlet"
                        boldTitle="Development"
                        leftHeading
                    />

                    <p className="mb-[20px] last-of-type:mb-0">
                        Using the Company's proprietary software in conjunction
                        with Computational Fluid Dynamics (CFD) software, VCT is
                        able to analyze each aircraft and individually adapt the
                        VC Finlet configuration for maximum performance.
                    </p>

                    <p className="mb-[20px] last-of-type:mb-0">
                        VCT has created Vortex Control Finlets (VC Finlets)
                        which are fins added to the aft fuselage of an aircraft
                        to control vortex flow and reduce drag.
                    </p>

                    <h5 className="global__text-size mb-[20px] font-bold">
                        The Science of VC Finlets
                    </h5>

                    <p className="mb-[20px] last-of-type:mb-0">
                        Vortex Control Finlets use controlled vortex flow to
                        reduce aircraft aerodynamic drag which translates into a
                        reduction in aircraft fuel consumption. Normally the
                        airflow around the aft body of an aircraft becomes
                        separated which causes drag, reduces performance and
                        increases fuel consumption. VC Finlets shape the
                        aerodynamic flow on the aft body of an aircraft to
                        re-attach the flow and reduce aerodynamic drag.
                    </p>

                    <p className="mb-[20px] last-of-type:mb-0">
                        Vortex Control Finlets have produced drag reductions in
                        a range of up to 10% depending upon aircraft type. For
                        aircraft with low wings, oval fuselages but appreciable
                        after-body upsweep angles, Vortex Control Finlets can
                        produce drag reductions in the range up to 4% depending
                        upon aircraft type.
                    </p>
                </div>

                <div className="gsap-semi-img-container mt-[40px] md:mt-[60px] hidden xl:grid grid-cols-3 xl:gap-[50px] 2xl:gap-[60px]">
                    <BorderImage
                        imgUrl="/img/finlets-right.jpg"
                        alt="Finlet development Image"
                    />
                    <BorderImage
                        imgUrl="/img/finlets-tunnel.jpg"
                        alt="Finlet development Image"
                    />
                    <BorderImage
                        imgUrl="/img/banner-image2.jpg"
                        alt="Finlet development Image"
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
                            imgUrl="/img/finlets-right.jpg"
                            alt="Finlet development Image"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <BorderImage
                            imgUrl="/img/finlets-tunnel.jpg"
                            alt="Finlet development Image"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <BorderImage
                            imgUrl="/img/banner-image2.jpg"
                            alt="Finlet development Image"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default FinletDevelopment;
