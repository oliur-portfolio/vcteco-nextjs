"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import SlashSectionHeading from "../SlashSectionHeading";
import BorderImage from "../BorderImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FdapMainHero = () => {
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
                    title="Products"
                    boldTitle="FDAP Monitor"
                />

                <div className="">
                    <p className="mb-[20px] last-of-type:mb-0">
                        VCT's FDAP Monitor analyzes flight data - collected by
                        aircraft via their Digital Flight Data Recorders (DFDRs)
                        - to identify occurrences and trends that if corrected
                        will result in more efficient operations.
                    </p>

                    <p className="mb-[20px] last-of-type:mb-0">
                        VCT has demonstrated that a typical airline operation
                        can improve fuel efficiency on the order of 1% if the
                        airline monitors flight control rigging and corrects
                        flight control alignment as necessary. In 2019 airlines
                        worldwide consumed 95 billion gallons of fuel. A savings
                        of 1% through correcting flight control alignment
                        deficiencies identified by VCT's FDAP Monitor would save
                        950 million gallons of fuel. At $2 per gallon this
                        amounts to a $1.9 Billion reduction in fuel cost. The
                        annual reduction in carbon emissions is 20 Billion
                        pounds, this is equivalent to almost $200 million in
                        carbon credits.
                    </p>

                    <p className="mb-[20px] last-of-type:mb-0">
                        The VCT FDAP Monitor can also be utilized to measure
                        changes in aircraft drag to within +/- 0.15% with 95%
                        statistical confidence. This can save airlines millions
                        of dollars annually by fine-tuning flight plan fuel
                        loads. It can also support airlines in negotiations with
                        OEMs regarding fuel efficiency guarantees, as the VCT
                        FDAP Monitor provides much more statistically
                        significant data than current flight test methods, with
                        a noise reduction of +/- 0.5% to at least +/- 0.15%.
                    </p>

                    <p className="mb-[20px] last-of-type:mb-0">
                        Our FDAP Monitor technology has been validated by
                        Michael Mendenhall, a member of the NASA Engineering &
                        Safety Center Aerosciences Technical Discipline Team.
                        VCT has a patent pending for this technology.
                    </p>
                </div>

                <div className="gsap-semi-img-container mt-[40px] md:mt-[60px] hidden xl:grid grid-cols-3 xl:gap-[50px] 2xl:gap-[60px]">
                    <BorderImage
                        imgUrl="/img/fdap-left.jpg"
                        alt="Fdap monitor Image"
                    />
                    <BorderImage
                        imgUrl="/img/fdap-center.jpg"
                        alt="Fdap monitor Image"
                    />
                    <BorderImage
                        imgUrl="/img/fdap-right.jpg"
                        alt="Fdap monitor Image"
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
                            imgUrl="/img/fdap-left.jpg"
                            alt="Fdap monitor Image"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <BorderImage
                            imgUrl="/img/fdap-center.jpg"
                            alt="Fdap monitor Image"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <BorderImage
                            imgUrl="/img/fdap-right.jpg"
                            alt="Fdap monitor Image"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default FdapMainHero;
