import SlashSectionHeading from "../components/SlashSectionHeading";

export const metadata = {
    title: "VCT Eco | Partners",
};

export default function Partners() {
    return (
        <section className="relative overflow-hidden pt-[40px] pb-[30px] md:py-20">
            <div className="wrapper">
                <SlashSectionHeading
                    title="Partners"
                    boldTitle="Client Login"
                />

                <div className="">
                    <p className="mb-[25px]">
                        Please login to access the VCT partner dashboard.
                    </p>

                    <form
                        action="https://vcteco.com/partners/login"
                        role="form"
                        method="post"
                    >
                        <div className="grid grid-cols-1 gap-5 max-w-[280px] w-full">
                            <input
                                type="email"
                                id="exampleInputEmail1"
                                placeholder="Email"
                                name="user_email"
                                required
                                className="input__style"
                            />

                            <input
                                type="password"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                name="user_password"
                                required
                                className="input__style"
                            />
                        </div>

                        <button
                            className="custom-btn mt-[30px] ml-0"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
