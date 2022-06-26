import Star from "../assets/images/icon-star.svg";
import thanks from "../assets/images/illustration-thank-you.svg";
import Ratebox from "./Ratebox";

export default function Card() {
  return (
    <div className="flex  bg-[#1C1E21] h-screen w-screen">
      <section className="cardsfront container mx-auto  flex flex-col gap-7  justify-center items-center text-white ">
        <div className=" mx-3 max-w-sm p-8 rounded-2xl bg-gradient-to-tr from-[#19202A]/90 via-[#19202A] to-[#1F2630] shadow-lg ">
          <img
            src={Star}
            alt="star"
            className="bg-[#252D37] p-3 rounded-full"
          />

          <h1 className="font-semibold text-3xl py-5">How did we do?</h1>
          <p className="text-[#7C8798] max-w-xs">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-evenly py-7">
            <Ratebox />
          </div>

          <div>
            <button className=" submit bg-[#FB7413] w-full py-3 font-semibold tracking-wider rounded-full hover:bg-white hover:text-[#FB7413]">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Thank you page */}

        <div className=" flex flex-col justify-center items-center mx-3 max-w-sm p-8 rounded-2xl bg-gradient-to-tr from-[#19202A]/90 via-[#19202A] to-[#1F2630] shadow-lg ">
          <img src={thanks} alt="thanks" />
          <p className="mt-10  text-[#FB7413] text-center bg-[#252D37] py-2 px-3 rounded-full">
            You selected 4 out of 5
          </p>
          <div className="py-5 text-center">
            <h2 className="text-3xl font-semibold text-center ">Thank You!</h2>
            <p className="mt-5 text-[#7C8798]">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
