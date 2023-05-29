import React from "react";
import Image from "next/image";

const BannerImage = ({ imgUrl, mobileImageHide }) => {
    return (
        <div
            class={`${
                mobileImageHide && "mbl-img-hide"
            } w-full h-[30vh] md:h-[38vh] 2xl:h-[496px] relative`}
        >
            <Image
                src={imgUrl}
                alt="banner image1"
                fill
                unoptimized
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
};

export default BannerImage;
