import styles from "../style";
import { discount, cowboy } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div id="mainDiv" className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          id="home"
          className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          >
            <div className="flex flex-row items-center py-[6px] px-4 bg-dimBlue rounded-[10px] mb-2">
              <img
                src={discount}
                alt="discount"
                className="w-[32px] h-[32px]"
              />
              <p className={`${styles.paragraph} ml-2`}>
                <span className="text-white"> 11 Nov |</span> Open Riding Indoor
                Arena <span className="text-white">| $10 per rider</span>
              </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                <span className="text-gradient">Pike Peaks</span>{" "}
                <br className="sm:block hidden" />{" "}
                <span className="text-gradient">Range</span>{" "}
              </h1>
            </div>

            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              <span className="text-gradient">Riders Foundation</span>
            </h1>
            <p
              className={`first-p font-poppins font-normal text-white text-[18px] leading-[30.8px] border-none max-w-[470px] mt-5 `}
            >
              The non-profit Pikes Peak Range Riders Foundation was established
              in 1999. Latigo, a 45 acre equestrian center is home to the Pikes
              Peak Range Riders and their Foundation. The Foundations focus is
              on youth events and activities that have a western, agricultural
              and equine orientation.
            </p>
          </div>

          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <div className="ss:flex hidden md:mr-4 mr-0 ml-40">
              <GetStarted />
            </div>
          </div>

          <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
