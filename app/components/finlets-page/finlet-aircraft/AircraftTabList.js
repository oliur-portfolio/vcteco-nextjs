import React from "react";

const AircraftTabList = ({ title, value }) => {
    return (
        <li className="bg-white even:bg-gray-100 pl-[20px] md:pl-10 px-0 py-[6px] even:py-[14px] md:py-[14px] xl:py-5 xl:even:py-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <div className="max-w-[490px] xl:max-w-[370px] 2xl:max-w-[490px] w-full">
                    <h6 className="global__text-size">{title}</h6>
                </div>

                <div className="max-w-[170px] w-full">
                    <p className="font-bold md:font-normal">{value}</p>
                </div>
            </div>
        </li>
    );
};

export default AircraftTabList;
