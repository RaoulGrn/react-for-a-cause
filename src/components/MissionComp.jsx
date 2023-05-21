import { mission } from "../assets";
import styles, { layout } from "../style";

const MissionComp = () => (
  <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section id="mission" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img
            src={mission}
            alt="mission-img"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Mission</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            To serve as the focused hub of youth equestrian and agricultural
            activities through a first-class facility, partnerships, programs
            and proactive community outreach.
          </p>
        </div>
      </section>
    </div>
  </div>
);

export default MissionComp;
