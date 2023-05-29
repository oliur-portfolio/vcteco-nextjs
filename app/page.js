import Development from "./components/home-page/development-partners/Development";
import GreenTec from "./components/home-page/green-tec/GreenTec";
import BannerHero from "./components/home-page/home-banner/BannerHero";

export default function Home() {
    return (
        <>
            <BannerHero />
            <GreenTec />
            <Development />
        </>
    );
}
