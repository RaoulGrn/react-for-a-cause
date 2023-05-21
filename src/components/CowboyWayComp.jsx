import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const CowboyWayComp = () => (
  <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section id="cowboy-way" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>The Cowboy Way</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Instilling the core values of the Cowboy Way through exposure,
            mentoring and leadership helps the youth of our community take steps
            toward being good, solid, productive young men and women that we can
            be proud of.
          </p>

          <Button type="button" text="Go Top" href={"#home"} styles={`mt-10`} />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default CowboyWayComp;
