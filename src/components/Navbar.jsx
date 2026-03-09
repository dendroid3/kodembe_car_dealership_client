import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ theme, onToggleTheme }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('admin_token');

  function handleLogout() {
    localStorage.removeItem('admin_token');
    navigate('/');
  }

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur dark:border-stone-800 dark:bg-stone-900/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Kodembe Car Yard
        </Link>
        <div className="flex items-center gap-3 text-sm font-medium text-stone-700 dark:text-stone-200">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-md border border-stone-300 px-3 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-800"
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
          <Link to="/" className="hover:text-stone-950 dark:hover:text-stone-50">Inventory</Link>
          {token ? (
            <>
              <Link to="/admin/cars" className="hover:text-stone-950 dark:hover:text-stone-50">Admin</Link>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-md bg-stone-900 px-3 py-2 text-white hover:bg-stone-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/admin/login" className="rounded-md bg-amber-500 px-3 py-2 text-stone-900 hover:bg-amber-400">
              Admin Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
