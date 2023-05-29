import Footer from "./components/Footer";
import Header from "./components/header/Header";
import "./globals.css";

export const metadata = {
    title: "VCT Eco | Home",
    description:
        "We develop sustainable aviation solutions to achieve carbon neutrality, serving the world's airlines, corporate aviation and the military. Products include Finlets and FDAP Monitoring System.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="bg-custom-white">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
