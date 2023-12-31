import { Button } from "@material-tailwind/react";
import bannerImg from "../assets/banner.jpg";
import { Link } from "react-router-dom";
import useAos from "../hooks/useAos";

const Banner = () => {
  useAos();
  const backgroundStyles = {
    backgroundImage: `url(${bannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      style={backgroundStyles}
      className=" h-auto lg:h-screen brightness-125"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div
          className=" flex flex-col lg:flex-row justify-center items-center
          py-14 lg:py-0 lg:h-screen w-11/12 md:w-9/12 lg:w-6/12 mx-auto "
        >
          <div
            data-aos="zoom-out"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="text-center my-8 lg:my-0 "
          >
            <h1 className="text-3xl text-blue-gray-100 lg:text-6xl  font-serif font-bold">
              Bring order to both your work and personal life .
            </h1>
            <p className=" lg:text-xl mt-3 lg:mt-5 text-[#bba1ca] ">
              Attain focus, order, and tranquility using{" "}
              <strong className="text-[#8700CC] font-Inter">TaskNest</strong>. A
              leading task management and to-do list application globally
            </p>
            <Link to="/user/dashboard">
              <Button
                className=" mt-6 lg:mt-10 bg-gradient-to-r  from-[#6F00CC]  to-[#9000CC] hover:bg-gradient-to-l hover:from-[#6F00CC]  hover:to-[#9000CC]  py-1 lg:py-2 rounded-md  font-semibold text-base text-[#fff] "
                size="md"
              >
                Let&apos;s Explore
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
