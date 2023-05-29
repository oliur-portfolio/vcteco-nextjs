"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading";
import TeamImage from "../TeamImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LeadershipTeam() {
    const leadershipTeamThumb = [
        {
            id: 1,
            image: "/img/bio-morgan.jpg",
            alt: "Team Image",
            name: "Andrew G. Morgan",
            title: "CEO",
            desc1: "Andrew (Gil) is the Chief Executive Officer of Vortex Control Technologies. His aviation and aerospace experience is broad and extensive with a career spanning more than 40 years serving as Co-founder of Propeller Investments, President & Chief Operating Officer of World Airways, Chief Operations Officer of Eos Airlines, Executive Vice President of Propeller Airports and other various leadership positions in corporate planning, operations, engineering, finance, and corporate real estate at ValuJet, AirTran, Delta Air Lines and Southern Airways. Gil's experience spans the spectrum of airline companies including a major international network airline, a boutique 'life-style' all business class international air carrier, a world-wide passenger and cargo charter airline, military charter operations, a low-cost airline startup, and a government subsidized U.S. local service air carrier. At World Airways he and his team expanded the fleet by fifty percent, while leading the airline back to profitability and operational excellence. At Eos Airlines he and his team achieved customer service ratings that, according to ZAGAT, were equivalent to Singapore Airlines and beyond that ever achieved by any U.S. airline. Eos achieved a Net Promoter Score of 85%; a score higher than brands such as The Four Seasons Hotels, Ritz Carlton and Harley Davidson. A graduate of the Georgia Institute of Technology with Highest Honors, Gil earned a Bachelor of Aerospace Engineering and later completed an MBA at Georgia State University with a concentration in finance.",
        },
        {
            id: 2,
            image: "/img/bio-dixon.jpg",
            alt: "Team Image",
            name: "Charles Dixon",
            title: "Chief Scientist",
            desc1: "Chuck has over 40 years of experience in the aerospace field with Lockheed Martin Aeronautics Company as a Senior Research Scientist and later as the founder and president of his own aerospace consulting company. Chuck has extensive experience in virtually all areas of Flight Sciences and is a nationally recognized expert in the field of vortex flow phenomenon. He is the originator of the Company's proprietary aerodynamic prediction software, which has the unique capability of predicting vortex flow and post-stall aerodynamic characteristics for aircraft. He is the patent holder of two innovative devices for vortex flow applications: one delays wing stall (VC Eaglets), and the second reduces drag on upward swept fuselage aircraft (VC Finlets). He has also conducted investigations on a variety of R&D projects, including extensive work on both passive and powered high lift concepts. These investigations included both analytical and experimental programs. Chuck's education includes a Master of Science degree in Aeronautical Engineering from the University of Southern California and an MBA from Georgia State University. He is an Associate Fellow of the American Institute of Aeronautics and Astronautics (AIAA), has authored 7 AIAA technical papers and is author/co-author of multiple US patents. He was the recipient of the Ben T. Epps award in 2007 for the best aerospace invention in Georgia granted by the Aerospace Innovation Center of Georgia.",
        },
        {
            id: 3,
            image: "/img/bio-villa.jpg",
            alt: "Team Image",
            name: "Ana Villa",
            title: "Director of Finance",
            desc1: "Ana joined VCT in October of 2016 as the Director of Finance. Prior to joining VCT, Ana was the CFO of Qranio, a Brazilian mobile learning platform focused on customized training solutions for the B2B and B2C markets. Previously, Ana worked in residential mortgage-backed lending at Interaudi Bank, a private bank based in New York City and Miami.",
            desc2: "Ana holds a B.S. in Management from Boston College and a M.B.A. from Columbia Business School.",
        },
        {
            id: 4,
            image: "/img/bio-hooker.jpg",
            alt: "Team Image",
            name: "John R. Hooker",
            title: "Chief Engineer",
            desc1: "John R. Hooker (Rick) is Chief Engineer of VCT. He was previously a Senior Engineer at Lockheed Martin (LM) and led the Aerodynamics and Computational Fluid Dynamics (CFD) organization in Marietta, Georgia. Rick also led Lockheed Martin's entry into NASA's X-plane demonstrator, a Hybrid Wing Body configuration and was the driving force in the development of Microvanes, an innovative drag reduction technology. He has Bachelor's and Master's degrees in Aeronautical Engineering from Purdue University. After graduation he worked at NASA Langley, McDonnell Douglas and Boeing. He is the recipient of numerous honors and awards including two prestigious LM Aero Star Awards (awarded for outstanding technical contributions); two time winner of the LM Engineer of the Month Award; 2014 American Institute of Aeronautics and Astronautics (AIAA) Applied Aerodynamics Best Paper Winner (co-author); member of the team that received NASA's 2015 ARMD Associate Administrator Honorable Mention Award for Technology; Chief Engineer of the 2013 Aviation Week Laurette Awarded Speed Agile Concept Demonstrator (SACD) program; and his work has also been featured on two covers of Aviation Week.",
        },
        {
            id: 5,
            image: "/img/bio-jenkins.jpg",
            alt: "Team Image",
            name: "Bryan S. Jenkins",
            title: "Lead Design Engineer",
            desc1: "Andrew (Gil) is the Chief Executive Officer of Vortex Control Technologies. His aviation and aerospace experience is broad and extensive with a career spanning more than 40 years serving as Co-founder of Propeller Investments, President & Chief Operating Officer of World Airways, Chief Operations Officer of Eos Airlines, Executive Vice President of Propeller Airports and other various leadership positions in corporate planning, operations, engineering, finance, and corporate real estate at ValuJet, AirTran, Delta Air Lines and Southern Airways. Gil's experience spans the spectrum of airline companies including a major international network airline, a boutique 'life-style' all business class international air carrier, a world-wide passenger and cargo charter airline, military charter operations, a low-cost airline startup, and a government subsidized U.S. local service air carrier. At World Airways he and his team expanded the fleet by fifty percent, while leading the airline back to profitability and operational excellence. At Eos Airlines he and his team achieved customer service ratings that, according to ZAGAT, were equivalent to Singapore Airlines and beyond that ever achieved by any U.S. airline. Eos achieved a Net Promoter Score of 85%; a score higher than brands such as The Four Seasons Hotels, Ritz Carlton and Harley Davidson. A graduate of the Georgia Institute of Technology with Highest Honors, Gil earned a Bachelor of Aerospace Engineering and later completed an MBA at Georgia State University with a concentration in finance.",
        },
        {
            id: 6,
            image: "/img/bio-wick.jpg",
            alt: "Team Image",
            name: "Andrew Wick",
            title: "Senior Aerodynamicist",
            desc1: "Andrew Wick is the Aerodynamics Lead at VCT. He is one of the nation's experts in unstructured CFD mesh generation, applied aerodynamic analysis, CFD-based aerodynamic optimization, and propulsion airframe integration. Andrew spent 11 years as a researcher, technical lead, and program manager at the Lockheed Martin Skunk Works. His work has supported numerous aircraft development and production programs including C-130, F-22, C-5, P3, F-35, X-55, HWB, SACD, and the Blackswift hypersonic demonstrator. In 2012, Andrew's work to design and wind tunnel test the Speed Agile Concept Demonstrator contributed to winning an Aviation Week Laureate Award for development of a transonic efficient powered lift transport. In 2013, Andrew was awarded the AIAA Applied Aerodynamics Best Paper for the design and analysis of Over-Wing Nacelles for transonic efficiency. From 2011 to 2017, Andrew was Aerodynamics Lead and co-inventor of the Hybrid Wing Body concept for an ultra-efficient subsonic transport. In September 2015, he was pictured on the cover of Aviation Week alongside the Hybrid Wing Body high speed model in the National Transonic Facility at NASA Langley. Andrew has also contributed to the development and application of numerous drag reductions technologies such as the C-130 and C-17 Microvanes. He is a graduate of the Iowa State University with an M.S. and B.S. in Aerospace Engineering.",
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
                trigger: ".gsap__leadership-img",
                start: "0 95%",
                end: "100% top",
                toggleActions: "play none none reverse",
                markers: false,
            },
        });

        smallImages.from(".gsap__leadership-img .border__image--team", {
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
        <section className="py-10 md:py-20 overflow-hidden">
            <div className="wrapper">
                <SectionHeading title="Leadership" boldTitle="Team" />

                <div>
                    <div className="gsap__leadership-img max-w-[315px] w-full mx-auto md:max-w-full grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-[40px] md:gap-[60px] mt-[45px] md:mt-[65px]">
                        {leadershipTeamThumb.map((team) => (
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
}

export default LeadershipTeam;
