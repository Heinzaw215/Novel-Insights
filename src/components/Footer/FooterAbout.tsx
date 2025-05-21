import { FooterAboutProps } from "@/schemas/footer";
import React from "react";

const FooterAbout = ({ title, content }: FooterAboutProps) => (
  <section
    className="w-full px-4 rows-span-2 md:rows-span-1 min-h-[150px]"
    aria-labelledby="footer-about-title"
  >
    <h5
      id="footer-about-title"
      className="text-[1.5rem] text-center text-gray-900 font-semibold mb-4"
    >
      {title}
    </h5>
    <p className="text-base text-gray-800 leading-relaxed tracking-wide">
      {content}
    </p>

  </section>
);

export default React.memo(FooterAbout);