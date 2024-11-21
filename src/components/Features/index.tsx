import SectionTitle from "../Common/SectionTitle";
import InfiniteCarousel from "./InfiniteCarousel";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="w-full pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="Our Main Sponsers"
          paragraph="There are Many Sponsers For Encouraging Our Potential To Embark the World."
        />

        <div className="-mx-[100%] flex flex-wrap lg:mt-20">
          <InfiniteCarousel/>
        </div>
      </div>
    </section>
  );
};

export default Features;
