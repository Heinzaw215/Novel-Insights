// FooterNewsletter.tsx

type FooterNewsletterProps = {
  heading: string;
  description: string;
  placeholder: string;
  buttonLabel: string;
};

const FooterNewsletter = ({
  heading,
  description,
  placeholder,
  buttonLabel,
}: FooterNewsletterProps) => (
  <section className="bg-orange-400 rounded-xl p-8 text-center shadow-lg mb-10">
    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">{heading}</h3>
    <p className="text-gray-100 mb-6 max-w-xl mx-auto">{description}</p>
    <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <input
        type="email"
        placeholder={placeholder}
        className="px-4 py-2 rounded-full w-full sm:w-80 text-gray-800 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full transition"
      >
        {buttonLabel}
      </button>
    </form>
  </section>
);

export default FooterNewsletter;
