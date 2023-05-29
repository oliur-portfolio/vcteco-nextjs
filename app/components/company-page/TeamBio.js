import React from "react";

const TeamBio = ({
    name,
    title,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    setTeamId,
}) => {
    return (
        <div className="bg-[#f5f5f7] py-[25px] px-[20px] md:py-[45px] md:px-[40px] relative">
            <button
                onClick={() => setTeamId(null)}
                className="absolute top-[25px] right-[25px] md:top-[25px] md:right-[40px] w-[15px] h-[15px] md:w-[20px] md:h-[20px] xl:w-[30px] xl:h-[30px]"
            >
                <img src="/img/close.svg" alt="close" />
            </button>

            <div className="text-left">
                <h5 className="global__text-size font-bold normal-case pr-10 pb-[15px] border-b-[#d2d2d2] border-b border-solid text-custom-black">
                    {name} {title && `| ${title}`}
                </h5>

                <div className="mt-[15px] space-y-[15px]">
                    {desc1 && <p>{desc1}</p>}
                    {desc2 && <p>{desc2}</p>}
                    {desc3 && <p>{desc3}</p>}
                    {desc4 && <p>{desc4}</p>}
                    {desc5 && <p>{desc5}</p>}
                </div>
            </div>
        </div>
    );
};

export default TeamBio;
