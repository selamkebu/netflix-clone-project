import logo from "../../assets/image/logo.png";
import { Link } from "react-router";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navs = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by Language",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* logo */}

        <img className={styles.logo} src={logo} alt="logo" />

        {/* navLinks */}

        <nav className={styles.nav}>
          {navs.map((nav) => (
            <Link key={nav} className={styles.navLink} to="#">
              {nav}
            </Link>
          ))}
        </nav>

        {/* right side section */}

        <div className={styles.rightSection}>
          {/* search */}

          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
              // ADDED: aria-label because the button only has an icon
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
                // ADDED: focuses the input as soon as it opens
                autoFocus
              />
            )}
          </div>

          {/* notification */}

          {/* ADDED: aria-label because the button only has an icon */}
          <button className={styles.iconButton} aria-label="Notifications">
            <Bell size={20} />
            <span className={styles.notificationBadge}>3</span>
          </button>

          {/* profile */}

          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
              // ADDED: aria-label because the button only has icons
              aria-label="Profile menu"
            >
              <div className={styles.profileAvatar}>
                <User size={20} />
                <ChevronDown size={20} />
              </div>
            </button>
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link to="#" className={styles.profileMenuItem}>
                  Account
                </Link>
                <Link to="#" className={styles.profileMenuItem}>
                  help center
                </Link>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
