"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading";
import TeamImage from "../TeamImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DirectorsTeam = () => {
    
    const directorsTeamThumb = [
        {
            id: 1,
            image: "/img/bio-b-smith.jpg",
            alt: "Team Image",
            name: "Brett Smith",
            title: "Chairman",
            desc1: "Brett is the Founder and Chief Investment Officer of Propeller Investments. Previously, from 1999 to 2006, Brett co-founded and served as Chairman & CEO of ei3 Corporation, responsible for all corporate finance, strategic direction, licensing and partnership activities. From 1996 to 1998, he was VP & Director of Business Development at Presstek, Inc. where he was part of the restructuring team for their equipment Subsidiary. Prior to that he held positions in areas of business development and analysis with Asia Times newspaper and Susquehanna Investment Group. Brett has served on the Board of Directors for ICAD, a publicly traded company (NASDAQ: ICAD) and on the boards of various organizations including The United Ways Children with Learning Disabilities Foundation. Currently, Brett is a member of the NY Committee of Human Rights Watch and serves as a Trustee for the Dublin School and The Landmark School and is a licensed private pilot. Brett holds a BA in Political Science from Emory University.",
        },
        {
            id: 2,
            image: "/img/bio-horowitz.jpg",
            alt: "Team Image",
            name: "Scott J. 'Doc' Horowitz, Ph.D.",
            title: "(Astronaut, Ret., Colonel, USAF, Ret.)",
            desc1: "Selected as a pilot by NASA in March 1992, Scott is a veteran of four space flights and has logged over 1,138 hours in space. He served as pilot on STS-75 (1996), STS 82 (1997) and STS-101 (2000), and was the commander on STS-105 (2001). He retired from NASA in October 2004 to serve as Director of Space Transportation and Exploration at A.T.K.-Thiokol in Utah. In September 2005 he returned to NASA as Associate Administrator for the Exploration Systems Mission Directorate, NASA Headquarters, Washington, D.C., until October of 2007. He served as an USAF test pilot, F-15 fighter pilot and T-38 instructor pilot, and retired from the USAF as a Colonel in 2004. Scott has logged over 6,500 hours of flight time in more than 50 different aircraft. He also taught graduate level engineering courses for California State University at Fresno and Embry Riddle University and was an Associate Scientist for the Lockheed Georgia Company. Scott received a BS in Engineering from California State University at Northridge and MS and PhD degrees in Aerospace Engineering from the Georgia Institute of Technology. Scott has designed and built experimental aircraft, modified sports cars, and is the inventor of the Ares I launch vehicle concept that, if approved and funded, would enable NASA to send our future astronauts into space, far safer than today's Space Shuttle.",
        },
        {
            id: 3,
            image: "/img/bio-kerrey.jpg",
            alt: "Team Image",
            name: "The Honorable Bob Kerrey",
            title: "",
            desc1: "As a courageous public servant, decorated Vietnam veteran and education leader, Bob represents the contributory spirit that distinguishes our nation. Today he is executive chairman of the Minerva Institute for Research and Scholarship.",
            desc2: "Bob represented Nebraska in the United States Senate for two terms. A recognized leader in the Senate he served on the Senate's Appropriations Committee, the Senate Finance Committee, and on the Senate Select Committee.",
            desc3: "Preceding his service in the U.S. Senate Bob was elected as the 35th Governor of the State of Nebraska.",
            desc4: "Bob's career as businessman included building a chain of restaurants and health clubs that employed more than 1,000 people in Nebraska. Upon graduation from the University of Nebraska Bob joined the U.S. Navy where he served three years as a Navy Seal during the Vietnam War where he received the Congressional Medal. He was born and raised in Lincoln, Nebraska.",
        },
        {
            id: 4,
            image: "/img/bio-cs.jpg",
            alt: "Team Image",
            name: "Peter Smith",
            title: "",
            desc1: "Peter is a Partner with Del Mar Asset Management where he focuses on Special Situations and Asian investment strategies. Prior to Del Mar he was a Partner and Chief Investment Officer at Evolution Capital Management, responsible for directing all trading and risk management. Peter is one of seven original Partners/Managing Directors of the Susquehanna International Group of Companies, where he was a Director responsible for all operations of Susquehanna's Asia-Pacific activities, and has been intimately involved in risk-taking at all levels. He has also served as a member of the Philadelphia Stock Exchange Business Conduct Committee. He spent the first 8 years of his career at GWF Enterprise where he directed proprietary trading activities in index and equity options on the Philadelphia Stock Exchange. Peter studied Political Science at Boston University.",
        },
    ];

    const [teamId, setTeamId] = useState(null);

    const handleToggleBio = (id) => {
        if (id === teamId) {
            setTeamId(null);
            return;
        }

        setTeamId(id);
    };

    useEffect(() => {
        const smallImages = gsap.timeline({
            scrollTrigger: {
                trigger: ".gsap__director-img",
                start: "0 95%",
                end: "100% top",
                toggleActions: "play none none reverse",
                markers: false,
            },
        });

        smallImages.from(".gsap__director-img .border__image--team", {
            duration: 1.6,
            autoAlpha: 0,
            stagger: 0.3,
            delay: 0.2,
        });

        return () => {
            smallImages.kill();
        };
    }, []);

    return (
        <section className="pb-10 md:pb-20 overflow-hidden">
            <div className="wrapper">
                <SectionHeading title="Board of" boldTitle="Directors" />

                <div>
                    <p>
                        The VCT team includes experienced aerodynamicists and
                        design engineers, flight test pilots, a president of one
                        of America's largest aerospace manufacturers, an airline
                        president and a NASA space shuttle astronaut.
                    </p>

                    <div className="gsap__director-img max-w-[315px] w-full mx-auto md:max-w-full grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-[40px] md:gap-[60px] mt-[45px] md:mt-[65px]">
                        {directorsTeamThumb.map((team) => (
                            <TeamImage
                                key={team.id}
                                team={team}
                                teamId={teamId}
                                setTeamId={setTeamId}
                                handleToggleBio={handleToggleBio}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectorsTeam;
