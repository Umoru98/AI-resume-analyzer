import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, isLoading } = usePuterStore();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/auth"); // redirect wherever you prefer
  };

  return (
    <nav className="navbar flex items-center justify-between">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">Resumind</p>
      </Link>

      <div className="flex gap-4 items-center">
        {auth.isAuthenticated ? (
          <>
            <Link to="/upload" className="primary-button w-fit">
              Upload Resume
            </Link>
            <button
              onClick={handleLogout}
              className="secondary-button w-fit cursor-pointer"
              disabled={isLoading}
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/auth" className="primary-button w-fit">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
