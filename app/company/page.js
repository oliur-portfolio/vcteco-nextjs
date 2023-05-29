import CompanyMainHero from "../components/company-page/CompanyMainHero";
import CompanyQuote from "../components/company-page/CompanyQuote";
import DirectorsTeam from "../components/company-page/DirectorsTeam";
import LeadershipTeam from "../components/company-page/LeadershipTeam";

export const metadata = {
    title: "VCT Eco | Company",
};

export default function Company() {
    return (
        <>
            <CompanyMainHero />
            <CompanyQuote />
            <LeadershipTeam />
            <DirectorsTeam />
        </>
    );
}
