import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <section>
          <h3 className="text-base font-bold text-stone-900">Kodembe Car Yard</h3>
          <p className="mt-2 text-sm text-stone-600">
            Trusted Kenyan salvage car marketplace for rebuildable and parts-only vehicles.
          </p>
        </section>

        <section>
          <h3 className="text-base font-bold text-stone-900">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm text-stone-600">
            <li><Link to="/" className="hover:text-stone-900">Inventory</Link></li>
            <li><Link to="/admin/login" className="hover:text-stone-900">Admin Login</Link></li>
            <li><Link to="/admin/cars" className="hover:text-stone-900">Manage Cars</Link></li>
          </ul>
        </section>

        <section>
          <h3 className="text-base font-bold text-stone-900">Contact</h3>
          <ul className="mt-2 space-y-2 text-sm text-stone-600">
            <li>Email: info@kodembecaryard.co.ke</li>
            <li>Phone: +254 700 000 000</li>
            <li>Nairobi, Kenya</li>
            <li>Mon - Sat: 8:00 AM - 6:00 PM</li>
          </ul>
        </section>

        <section>
          <h3 className="text-base font-bold text-stone-900">Legal</h3>
          <ul className="mt-2 space-y-2 text-sm text-stone-600">
            <li><a href="#" className="hover:text-stone-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-stone-900">Terms of Service</a></li>
            <li><a href="#" className="hover:text-stone-900">Cookie Policy</a></li>
          </ul>
        </section>
      </div>

      <div className="border-t border-stone-200 py-4 text-center text-sm text-stone-600">
        © {year} Kodembe Car Yard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
