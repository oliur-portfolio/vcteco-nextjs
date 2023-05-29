import Image from "next/image";
import React from "react";

const BorderImage = ({ imgUrl, alt }) => {
    return (
        <div className="border__image h-[235px] md:h-[450px] lg:h-[550px] xl:h-[250px] 2xl:h-[340px]">
            <Image
                className="relative z-10 object-cover"
                src={imgUrl}
                alt={alt || "Finlet small Images"}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
};

export default BorderImage;
