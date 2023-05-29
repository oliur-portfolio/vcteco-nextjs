import React from "react";

const ContactCta = () => {
    return (
        <section class="px-0 py-14 xl:pt-[65px] xl:pb-20 bg-custom-green">
            <div class="wrapper">
                <div class="flex flex-col xl:flex-row items-center justify-between">
                    <div class="contact-text">
                        <p className="text-left text-white w-full md:max-w-[600px] lg:max-w-[855px] ml-0 md:ml-[35px]">
                            VCT develops sustainable aviation solutions to
                            achieve carbon neutrality for today's commercial &
                            military aircraft
                        </p>
                    </div>

                    <div class="contact-btn">
                        <a
                            href="https://vcteco.com/contact"
                            className="custom-btn custom-btn--transparent"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCta;
