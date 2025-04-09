type FooterAboutProps = {
  title: string;
  content: string;
};

const FooterAbout = ({ title, content }: FooterAboutProps) => (
  <section className="w-full md:w-1/3 xl:w-1/4 px-4">
    <h5 className="text-xl font-serif text-white font-semibold mb-4">{title}</h5>
    <p className="text-base text-gray-100 leading-relaxed tracking-wide">
      {content}
    </p>
  </section>
);

export default FooterAbout;
