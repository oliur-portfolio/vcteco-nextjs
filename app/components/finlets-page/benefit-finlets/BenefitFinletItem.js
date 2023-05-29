import React from "react";

const BenefitFinletItem = ({ item }) => {
    return (
        <li className="flex gap-[10px] md:gap-[25px] mb-5 last:mb-0">
            <span>
                <img
                    src="/img/finlet-arrow.svg"
                    alt="arrow"
                    className="min-w-[10px] max-w-[10px] h-[26px] object-contain"
                />
            </span>
            <h5 className="text-custom-white global__text-size">
                {item.title}
            </h5>
        </li>
    );
};

export default BenefitFinletItem;
