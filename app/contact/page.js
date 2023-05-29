import SlashSectionHeading from "../components/SlashSectionHeading";

export const metadata = {
    title: "VCT Eco | Contact",
};

export default function Contact() {
    return (
        <section className="relative overflow-hidden pt-[40px] pb-[30px] md:py-20">
            <div className="wrapper">
                <SlashSectionHeading
                    title="Contact Us"
                    boldTitle="Sales & Support"
                />

                <div className="">
                    <p className="max-w-[260px] w-full text-left mb-6">
                        Vortex Control Technologies <br /> 9724 32nd Place West{" "}
                        <br />
                        Everett, WA 98204
                    </p>

                    <div className="mb-6">
                        <p>
                            Sales:{" "}
                            <a
                                href="mailto:sales@vortexct.com"
                                className="!text-custom-green"
                            >
                                sales@vortexct.com
                            </a>
                        </p>
                        <p>
                            General:{" "}
                            <a
                                href="mailto:info@vortexct.com"
                                className="!text-custom-green"
                            >
                                info@vortexct.com
                            </a>
                        </p>
                    </div>

                    <a href="tel:+4256229035">425.622.9035</a>
                </div>
            </div>
        </section>
    );
}
