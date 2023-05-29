import React from "react";

const SlashSectionHeading = ({ title, boldTitle }) => {
    return (
        <h1 className="text-[30px] leading-none mb-[30px] md:text-[48px] xl:mb-[50px] 2xl:text-[67px] font-bold 2xl:mb-[50px]">
            <span className="slash__heading font-medium relative inline-block">
                {title}
            </span>
            <span className="block mt-[7px] md:mt-4">{boldTitle}</span>
        </h1>
    );
};

export default SlashSectionHeading;
