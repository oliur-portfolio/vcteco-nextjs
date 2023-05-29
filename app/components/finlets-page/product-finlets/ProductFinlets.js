import React from "react";
import SlashSectionHeading from "../../SlashSectionHeading";
import BorderBigImage from "../../BorderBigImage";

const ProductFinlets = () => {
    return (
        <section className="relative overflow-hidden pt-[40px] pb-[30px] md:pt-20 md:pb-[65px]">
            <div className="wrapper">
                <SlashSectionHeading title="Products" boldTitle="Finlets" />
            </div>

            <div className="px-0 w-full mx-auto xl:max-w-[1140px] 2xl:max-w-[1490px]">
                <div className="flex flex-col-reverse xl:flex-row items-start gap-[40px] md:gap-[50px] xl:gap-[90px]">
                    <div className="px-[30px] w-full mx-auto md:px-[8px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:flex-1 2xl:max-w-[650px]">
                        <p className="mb-[20px] last-of-type:mb-0">
                            A vortex (plural: vortices) is a spinning, often
                            turbulent, flow of fluid. Any spiral motion with
                            closed streamlines is vortex flow.
                        </p>
                        <p className="mb-[20px] last-of-type:mb-0">
                            All aircraft produce vortices in flight,
                            particularly at the wing tips, wing to fuselage
                            interface, and aft fuselage.
                        </p>
                        <p className="mb-[20px] last-of-type:mb-0">
                            Vortex flow is a significant source of aircraft
                            drag, particularly on aircraft with upswept after
                            bodies such as the C-130, C-17 and B-737.
                        </p>
                        <p className="mb-[20px] last-of-type:mb-0">
                            Finlets are an array of fins on the aft fuselage of
                            the aircraft that reshape the airflow to improve the
                            pressure distribution and reduce flow separation and
                            thereby reduce pressure drag. This reduction in
                            aerodynamic drag results in less aircraft fuel
                            consumption and fewer carbon emissions, with the
                            benefits of increasing aircraft range and endurance.
                            Using the Company's proprietary knowhow in
                            conjunction with Computational Fluid Dynamics (CFD),
                            VCT is able to design a Finlet configuration that
                            will minimize the aerodynamic drag of any aircraft.
                        </p>
                        <p className="mb-[20px] last-of-type:mb-0">
                            Finlets are patented and our software is copyright
                            protected. Our proprietary technologies enable
                            engineers to model, predict, redirect and control
                            aircraft vortex flow in order to reduce fuel
                            consumption and carbon emissions.
                        </p>
                    </div>

                    <div className="w-full pl-0 xl:flex-1">
                        <BorderBigImage />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductFinlets;
