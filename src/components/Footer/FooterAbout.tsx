type FooterAboutProps = {
  title: string;
  content: string;
};

const FooterAbout = ({ title, content }: FooterAboutProps) => (
  <section
    className="w-full px-4"
    aria-labelledby="footer-about-title"
  >
    <h5
      id="footer-about-title"
      className="text-xl text-center font-serif text-gray-900 font-semibold mb-4"
    >
      {title}
    </h5>
    <p className="text-base text-gray-800 leading-relaxed tracking-wide">
      {content}
    </p>

  </section>
);

export default FooterAbout;
