import BenefitFinlets from "../components/finlets-page/benefit-finlets/BenefitFinlets";
import FinletAircraft from "../components/finlets-page/finlet-aircraft/FinletAircraft";
import FinletDevelopment from "../components/finlets-page/finlet-development/FinletDevelopment";
import ProductFinlets from "../components/finlets-page/product-finlets/ProductFinlets";

export const metadata = {
    title: "VCT Eco | Products | Finlets",
};

export default function Finlets() {
    return (
        <>
            <ProductFinlets />
            <BenefitFinlets />
            <FinletDevelopment />
            <FinletAircraft />
        </>
    );
}
