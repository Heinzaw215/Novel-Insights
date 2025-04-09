import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-orange-700 text-orange-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <h5 className="text-lg font-bold text-orange-300">About Us</h5>
            <p className="text-orange-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <h5 className="text-lg font-bold text-orange-300">Contact Us</h5>
            <ul className="list-none">
              <li className="mt-2">
                <Link href="#" className="text-orange-400 hover:text-orange-100">
                  <i className="fas fa-envelope mr-2"></i>Email Us
                </Link>
              </li>
              <li className="mt-2">
                <Link href="#" className="text-orange-400 hover:text-orange-100">
                  <i className="fas fa-phone mr-2"></i>Call Us
                </Link>
              </li>
              <li className="mt-2">
                <Link href="#" className="text-orange-400 hover:text-orange-100">
                  <i className="fas fa-map-marker-alt mr-2"></i>Visit Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <h5 className="text-lg font-bold text-orange-300">Follow Us</h5>
            <ul className="list-none">
              <li className="mt-2">
                <Link href="#" className="text-orange-400 hover:text-orange-100">
                  <i className="fab fa-facebook-f mr-2"></i>Facebook
                </Link>
              </li>
              <li className="mt-2">
                <Link href="#" className="text-orange-400 hover:text-orange-100">
                  <i className="fab fa-twitter mr-2"></i>Twitter
                </Link>
              </li>
              <li className="mt-2">
                <Link href="#" className="text-orange-400 hover:text-orange-100">
                  <i className="fab fa-instagram mr-2"></i>Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-orange-600 text-orange-100 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;