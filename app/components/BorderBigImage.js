"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const BorderBigImage = () => {
    useEffect(() => {
        var bigImage = gsap.timeline();

        bigImage.from(".border__image--big img", {
            duration: 0.8,
            x: 100,
            autoAlpha: 0,
            delay: 0.2,
        });

        return () => {
            bigImage.kill();
        };
    }, []);

    return (
        <div className="border__image--big h-[235px] md:h-[450px] lg:h-[550px]">
            <Image
                className="relative z-10 object-cover"
                src="/img/int-finlets-bw.jpg"
                alt=""
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
};

export default BorderBigImage;
