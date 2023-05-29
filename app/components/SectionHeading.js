import React from "react";

const SectionHeading = ({
    title,
    boldTitle,
    desc,
    whiteHeading,
    leftHeading,
}) => {
    return (
        <div className="mx-auto md:max-w-full mb-[25px]">
            <h3
                className={`text-[24px] leading-[30px] md:text-[34px] md:leading-[40px] xl:text-[39px] xl:leading-[46px] ${
                    leftHeading ? "text-left" : "text-center"
                } ${whiteHeading && "text-custom-white"}`}
            >
                {title}{" "}
                {boldTitle && (
                    <span className="font-bold inline-block">{boldTitle}</span>
                )}
            </h3>

            {desc && (
                <p className="max-w-[1100px] text-center m-auto pt-4">{desc}</p>
            )}
        </div>
    );
};

export default SectionHeading;
