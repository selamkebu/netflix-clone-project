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
  });

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* logo */}

        <img className={styles.logo} src={logo} alt="" />

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
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* notification */}

          <button className={styles.iconButton}>
            <Bell size={20} />
            <span className={styles.notificationBadge}>3</span>
          </button>

          {/* profile */}

          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              <div className={styles.profileAvatar}>
                <User size={20} />
                <ChevronDown size={20} />
              </div>
            </button>
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}>Account</Link>
                <Link className={styles.profileMenuItem}>help center</Link>
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
