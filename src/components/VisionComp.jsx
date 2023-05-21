import { vision } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const VisionComp = () => (
  <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Vision</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            To instill the core values of The Cowboy Way in the youth of our
            community through exposure, mentoring and leadership in equestrian
            and agricultural activities.
          </p>
          <Button type="button" text="Go Top" href="#home" styles="mt-10" />
        </div>

        <div className={layout.sectionImg}>
          <img src={vision} alt="vision" className="w-[100%] h-[100%]" />
        </div>
      </section>
    </div>
  </div>
);

export default VisionComp;
