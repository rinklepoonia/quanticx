import React from "react";
import FooterLogo from "../assets/images/png/footer-logo.png";
import {
  Insta,
  In,
  Twitter,
  YouTube,
  Contact,
  Mail,
} from "../components/Icons";

function Footer() {
  return (
    <div className="bg-bodyBlue mt-[-1px]">
      <div className="container px-3">
        <div className="row">
          <div className="lg:w-[41.66%] w-full max-lg:px-3">
            <a href="">
              {" "}
              <img
                className="w-[118px] pb-8"
                src={FooterLogo}
                alt="FooterLogo"
              />
            </a>
            <p className="font-Poppins font-normal text-base text-darkWhite70 pb-5">
              Ziverra integer ipsum ut quisque in. Tincidunt sem turpis at
              <span className="lg:block">
                ut aliquam. Tincidunt congue dictum blandit elit. Suscipit in
              </span>
              aliquam.
            </p>
            <div className="flex items-center gap-[10px]">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-[38px] h-[38px] rounded-full  bg-cardGradient flex items-center justify-center hover:shadow-CardShadaw"
              >
                <Insta />
              </a>
              <a
                href="https://in.linkedin.com/"
                target="_blank"
                className="w-[38px] h-[38px] rounded-full  bg-cardGradient flex items-center justify-center hover:shadow-CardShadaw"
              >
                <In />
              </a>
              <a
                href="https://x.com/?lang=en"
                target="_blank"
                className="w-[38px] h-[38px] rounded-full  bg-cardGradient flex items-center justify-center hover:shadow-CardShadaw"
              >
                <Twitter />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="w-[38px] h-[38px] rounded-full  bg-cardGradient flex items-center justify-center hover:shadow-CardShadaw"
              >
                <YouTube />
              </a>
            </div>
          </div>
          <div className="lg:w-[58.33%] w-full px-3 lg:pt-28 pt-5">
            <div className="row lg:justify-end">
              <div className="sm:w-[33.33%] w-full px-3">
                <ul>
                  <li className="font-Poppins font-normal text-base text-darkWhite pb-[18px]">
                    Home
                  </li>
                  <li className="pb-[18px]">
                    <a
                      href=""
                      className="font-Poppins font-normal text-base text-darkWhite70 hover:text-darkWhite"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="pb-[18px]">
                    <a
                      href=""
                      className="font-Poppins font-normal text-base text-darkWhite70 text-nowrap hover:text-darkWhite"
                    >
                      Products & Services
                    </a>
                  </li>
                  <li className="pb-[18px]">
                    <a
                      href=""
                      className="font-Poppins font-normal text-base text-darkWhite70 hover:text-darkWhite"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-Poppins font-normal text-base text-darkWhite70 hover:text-darkWhite"
                    >
                      FAQs & Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sm:w-[33.33%] w-full px-3">
                <ul>
                  <li className="font-Poppins font-normal text-base text-darkWhite pb-[18px]">
                    Contact Us
                  </li>
                  <a
                    href="tel:+4733378901"
                    className="flex items-center gap-5 pb-[18px]"
                  >
                    <Contact />
                    <p className="font-Poppins font-normal text-base text-darkWhite70 hover:text-darkWhite">
                      +91 1223-447-89
                    </p>
                  </a>
                  <a
                    href="mailto:someone@example.com"
                    className="flex items-center gap-5"
                  >
                    <Mail />
                    <p className="font-Poppins font-normal text-base text-darkWhite70 hover:text-darkWhite">
                      @quanticxai.in
                    </p>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
