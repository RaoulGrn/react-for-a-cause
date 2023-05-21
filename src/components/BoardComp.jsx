import { board } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const BoardComp = () => (
  <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section
        id="board"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h1 className={`${styles.heading2}`}>Board of Directors</h1>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}></p>
          </div>
        </div>
        <div className="flex flex-wrap sm:justify-wrap justify-center w-full feedback-container relative z-[1]">
          {board.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default BoardComp;
