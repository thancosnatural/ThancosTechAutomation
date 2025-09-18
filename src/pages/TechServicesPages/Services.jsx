import HeroTechRated from "@/components/HeroSpotlight";
import TechServices from "@/components/LandingPageComponents/TechServices";
import OurApproach from "@/components/TechServicesComponents/OurApproach";


export default function OurTechServices() {

    return (
        <section className="w-full bg-[#0D0D0D] ">

            <HeroTechRated
                line1="End-to-end "
                highlight="Digital"
                line2Rest="product partner"
                // chips={["WEB DEVELOPMENT", "UX/UI DESIGN", "GRAPHIC DESIGN"]}
                subtitle="From concept to launch, we craft experiences that scale with your business and delight your users."
            />

            <TechServices />

            <OurApproach />

        </section>
    );
}


