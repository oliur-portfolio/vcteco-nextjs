import React from "react";
import SectionHeading from "../SectionHeading";

const CompanyQuote = () => {
    return (
        <section className="py-[40px] md:pt-[60px] md:pb-[70px] bg-[#00a489]">
            <div className="wrapper">
                <div className="">
                    <SectionHeading
                        title="VCT and"
                        boldTitle="The Environment"
                        whiteHeading
                        leftHeading
                    />

                    <p className="mb-[20px] text-custom-white">
                        VCT is committed to developing innovative technologies
                        that will assist the aerospace industry in achieving
                        sustainability and carbon neutrality.
                    </p>

                    <div class="benefits-blockquote mobile-blockquote text-center">
                        <p className="mb-[10px] text-custom-white italic">
                            "We shall require a substantially new manner of
                            thinking if mankind is to survive."
                        </p>

                        <h5 className="text-custom-white italic font-bold global__text-size">
                            ~ Albert Einstein
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyQuote;
