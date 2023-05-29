import Image from "next/image";
import React, { useRef } from "react";
import TeamBio from "./company-page/TeamBio";

const TeamImage = ({ team, teamId, setTeamId, handleToggleBio }) => {
    const imageRef = useRef(null);

    const scrollToImage = () => {
        if (imageRef.current) {
            const windowHeight = window.innerHeight;
            const imageHeight = imageRef.current.offsetHeight;
            const offset = (windowHeight - imageHeight) / 2;
            const targetPosition =
                imageRef.current.getBoundingClientRect().top +
                window.pageYOffset -
                offset;

            console.log(targetPosition);
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
    };

    return (
        <div
            className={`relative team__thumbnail ${
                teamId === team.id
                    ? "mb-[1300px] md:mb-[730px] lg:mb-[600px] 2xl:mb-[450px]"
                    : ""
            }`}
        >
            <div
                ref={imageRef}
                onClick={() => {
                    handleToggleBio(team.id);
                    scrollToImage();
                }}
                className={`border__image border__image--team h-[130px] md:h-[180px] lg:h-[250px] 2xl:h-[200px] cursor-pointer pb-5 ${
                    teamId === team.id ? "border__image--active" : ""
                }`}
            >
                <Image
                    className="relative z-10 object-cover"
                    src={team.image}
                    alt={team.alt || "Finlet small Images"}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="team__overlay">
                    <h5 className="text-[15px] leading-[20px] md:text-base font-bold text-white text-center">
                        {team.name}
                    </h5>
                    <p className="text-[15px] leading-[20px] md:text-base text-white text-center">
                        {team.title}
                    </p>
                </div>
            </div>

            <div
                className={`team__bio w-[315px] md:w-[705px] lg:w-[945px] xl:w-[1126px] 2xl:w-[1486px] top-[126%] md:top-[120%] ${
                    teamId === team.id
                        ? "z-20 opacity-100 visible"
                        : "-z-50 opacity-0 invisible"
                } ${
                    teamId === 1
                        ? "left-0"
                        : teamId === 2
                        ? "left-[-178px] md:left-[-256px] lg:left-[-335px] xl:left-[-395px] 2xl:left-[-256px]"
                        : teamId === 3
                        ? "left-[0px] md:left-[-512px] lg:left-[-670px] xl:left-[-790px] 2xl:left-[-512px]"
                        : teamId === 4
                        ? "left-[-178px] md:left-[0px] lg:left-[0px] xl:left-[0px] 2xl:left-[-768px]"
                        : teamId === 5
                        ? "left-[0px] md:left-[-256px] lg:left-[-335px] xl:left-[-395px] 2xl:left-[-1024px]"
                        : teamId === 6
                        ? "left-[-178px] md:left-[-512px] lg:left-[-670px] xl:left-[-790px] 2xl:left-[-1280px]"
                        : ""
                }`}
            >
                <TeamBio
                    name={team.name}
                    title={team.title}
                    desc1={team.desc1}
                    desc2={team.desc2}
                    desc3={team.desc3}
                    desc4={team.desc4}
                    desc5={team.desc5}
                    setTeamId={setTeamId}
                />
            </div>
        </div>
    );
};

export default TeamImage;
