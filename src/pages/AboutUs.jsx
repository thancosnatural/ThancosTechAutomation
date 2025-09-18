import AboutAutomation from "@/components/AboutUsComponents/AboutAutomation";
import OurApproach from "@/components/AboutUsComponents/OurApproch";
import WhyChooseThancos from "@/components/AboutUsComponents/WhyChooseUs";
import AboutUsBanner from "@/components/AboutUsComponents/AboutUsBanner";


export default function AboutUs() {

  return (
    <section className="w-full bg-[#0D0D0D] ">

      <AboutUsBanner />

      <AboutAutomation />

      <OurApproach />

      <WhyChooseThancos />

    </section>
  );
}
