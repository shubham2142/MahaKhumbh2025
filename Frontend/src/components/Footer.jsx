import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 border-t py-6 border-neutral-700 bg-neutral-900 text-neutral-300">
      <div className="flex justify-between flex-wrap gap-6 text-sm px-4">
        <div className="min-w-[200px]">
          <h3 className="text-md font-semibold mb-2 text-white">About Mahakumbh</h3>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:text-orange-400">Overview</Link></li>
            <li><Link to="/history" className="hover:text-orange-400">History</Link></li>
            <li><Link to="/culture" className="hover:text-orange-400">Culture</Link></li>
          </ul>
        </div>

        <div className="min-w-[200px]">
          <h3 className="text-md font-semibold mb-2 text-white">Crowd Services</h3>
          <ul className="space-y-1">
            <li><Link to="/crowd-analysis" className="hover:text-orange-400">Crowd Analysis</Link></li>
            <li><Link to="/safety" className="hover:text-orange-400">Safety Guidelines</Link></li>
            <li><Link to="/live-updates" className="hover:text-orange-400">Live Updates</Link></li>
          </ul>
        </div>

        <div className="min-w-[200px]">
          <h3 className="text-md font-semibold mb-2 text-white">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/contact" className="hover:text-orange-400">Contact Us</Link></li>
            <li><Link to="/volunteer" className="hover:text-orange-400">Volunteer</Link></li>
            <li><Link to="/faq" className="hover:text-orange-400">FAQs</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
