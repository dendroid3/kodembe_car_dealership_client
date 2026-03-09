import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <section>
          <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">Kodembe Car Yard</h3>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
            Trusted Kenyan salvage car marketplace for rebuildable and parts-only vehicles.
          </p>
        </section>

        <section>
          <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm text-stone-600 dark:text-stone-300">
            <li><Link to="/" className="hover:text-stone-900 dark:hover:text-stone-100">Inventory</Link></li>
            <li><Link to="/admin/login" className="hover:text-stone-900 dark:hover:text-stone-100">Admin Login</Link></li>
            <li><Link to="/admin/cars" className="hover:text-stone-900 dark:hover:text-stone-100">Manage Cars</Link></li>
          </ul>
        </section>

        <section>
          <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">Contact</h3>
          <ul className="mt-2 space-y-2 text-sm text-stone-600 dark:text-stone-300">
            <li>Email: info@kodembecaryard.co.ke</li>
            <li>Phone: +254 700 000 000</li>
            <li>Nairobi, Kenya</li>
            <li>Mon - Sat: 8:00 AM - 6:00 PM</li>
          </ul>
        </section>

        <section>
          <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">Legal</h3>
          <ul className="mt-2 space-y-2 text-sm text-stone-600 dark:text-stone-300">
            <li><a href="#" className="hover:text-stone-900 dark:hover:text-stone-100">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-stone-900 dark:hover:text-stone-100">Terms of Service</a></li>
            <li><a href="#" className="hover:text-stone-900 dark:hover:text-stone-100">Cookie Policy</a></li>
          </ul>
        </section>
      </div>

      <div className="border-t border-stone-200 py-4 text-center text-sm text-stone-600 dark:border-stone-800 dark:text-stone-300">
        © {year} Kodembe Car Yard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
