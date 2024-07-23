import React, { useState } from "react";
import Swal from "sweetalert2";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const popup = () => {
    if (email && isValidEmail(email)) {
      Swal.fire({
        title: "Good job!",
        text: "Your mail has been added!",
        icon: "success",
        timer: 9000,
      });
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="bg-bodyBlue mt-[-2px]">
      <div className="container px-3">
        <div
          data-aos="zoom-in"
          className="bg-[url('./assets/images/webp/newsBg-img.webp')] lg:bg-full bg-cover border border-darkWhite rounded-3xl lg:py-[73px] lg:px-28 sm:p-10 p-5 relative lg:mb-[-184px] mb-[-215px] z-10"
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-khula font-bold lg:text-5xl text-4xl lg:leading-[57.6px] leading-[35px] text-darkWhite pb-4 text-center">
              Subscribe our newsletter
            </h2>
            <p className="font-Poppins font-normal text-base text-darkWhite70 max-w-[905px] text-center lg:pb-10 pb-5">
              Mollis magna pulvinar viverra integer ipsum ut quisque in.
              Tincidunt sem turpis at ut aliquam. Tincidunt congue dictum
              blandit elit. Suscipit in aliquam. Mollis magna pulvinar viverra
              integer ipsum ut quisque in. Tincidunt sem turpis at ut aliquam.
              Tincidunt congue dictum blandit elit. Suscipit in aliquam.
            </p>
            <form
              action=""
              className="flex gap-5 max-sm:flex-wrap items-center"
            >
              <input
                required
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                placeholder="Entre you email.."
                className="font-Poppins font-normal text-sm text-darkWhite opacity-60 border border-darkWhite20 bg-transparent p-4 sm:max-w-60 max-sm:w-full w-full outline-none rounded-[8px]"
              />
              <button
                type="button"
                onClick={popup}
                className="font-Poppins font-semibold text-base text-darkWhite py-3.5 px-6 bg-btnBlueGradient rounded-[8px] max-sm:w-full hover:bg-btnBluehover transition-all ease-linear duration-300 text-nowrap"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
