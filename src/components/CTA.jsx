import { data } from "autoprefixer";
import { useRef, useCallback, useState } from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  const [donated, setDonated] = useState(false);
  const firstName = useRef();
  const lastName = useRef();
  const amount = useRef();
  const city = useRef();
  const state = useRef();
  const zip = useRef();
  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        firstName: firstName.current?.value,
        lastName: lastName.current?.value,
        amount: amount.current?.value,
        city: city.current?.value,
        state: state.current?.value,
        zip: zip.current?.value,
      };

      if (
        [
          firstName.current?.value,
          lastName.current?.value,
          amount.current?.value,
          city.current?.value,
          zip.current?.value,
        ].includes("")
      ) {
        alert("Please fill all the inputs!");
      } else {
        console.log(data);
        setDonated(true);
      }
    },
    []
  );

  return (
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          id="donate"
          className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
          <div className="flex-1 flex flex-col">
            <h2 className={`${styles.heading2}`}>Support Us</h2>
            <p
              className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
            >
              Without community support through generous support and donations
              like yours, Latigo could not do its work. The Board Members want
              you to know that we appreciate your donation and will utilize it
              to the best of our ability to carry out our mission. The Pikes
              Peak Range Riders Foundation is a charitable foundation that is
              tax exempt under section 501(c)(3) of the Internal Revenue
              Service.
            </p>
          </div>
          <div
            className={`flex-col justify-center items-center sm:ml-10 ml-0 sm:mr-0 mr-10`}
          >
            <form
              className={`w-full max-w-lg ${donated ? "hidden" : ""}`}
              onSubmit={formHandler()}
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    ref={firstName}
                    className="appearance-none block w-full bg-gray-200 text-grey border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    ref={lastName}
                    className="appearance-none block w-full bg-gray-200 text-grey border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-amount"
                  >
                    Amount($ USD)
                  </label>
                  <input
                    ref={amount}
                    className="appearance-none block w-full bg-gray-200 text-grey border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-amount"
                    type="number"
                    placeholder="Thank you"
                  />
                  <p className="text-white text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    City
                  </label>
                  <input
                    ref={city}
                    className="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Albuquerque"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    State
                  </label>
                  <div className="relative">
                    <select
                      ref={state}
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-grey-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                  >
                    Zip
                  </label>
                  <input
                    ref={zip}
                    className="appearance-none block w-full bg-gray-200 text-gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="number"
                    placeholder="90210"
                  />
                </div>
              </div>
              <Button type="submit" text="Donate" />
            </form>
          </div>
          <div
            className={`animate-pulse flex-1 flex flex-col ${
              donated ? "" : "hidden"
            }`}
          >
            <h2 className={styles.heading2}>Thank you!</h2>
            <p
              className={`$font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5`}
            >
              We appreciate you supporting us {firstName.current?.value}. One of
              our colleagues will get back in touch with you soon! Have a great
              day!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CTA;
