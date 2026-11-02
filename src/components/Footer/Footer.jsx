import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import styles from "./Footer.module.css";

const socialLinks = [
  {
    name: "Facebook",
    Icon: FaFacebookF,
    url: "https://www.facebook.com/netflix",
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    url: "https://www.instagram.com/netflix",
  },
  {
    name: "Twitter",
    Icon: FaTwitter,
    url: "https://x.com/netflix",
  },
  {
    name: "YouTube",
    Icon: FaYoutube,
    url: "https://www.youtube.com/netflix",
  },
];

const linkColumns = [
  ["Audio Description", "Investor Relations", "Legal Notices"],
  ["Help Centre", "Jobs", "Cookie Preferences"],
  ["Gift Cards", "Terms of Use", "Corporate Information"],
  ["Media Centre", "Privacy", "Contact Us"],
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social media icons */}
        <nav className={styles.socialLinks} aria-label="Social media links">
          {socialLinks.map(({ name, Icon, url }) => (
            <a
              key={name}
              href={url}
              className={styles.socialLink}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </nav>

        {/* Footer link columns */}
        <nav className={styles.links} aria-label="Footer navigation">
          {linkColumns.map((column, index) => (
            <ul key={index} className={styles.linkColumn}>
              {column.map((label) => (
                <li key={label}>
                  <a href="#" className={styles.footerLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        {/* Copyright */}
        <p className={styles.copyright}>© 1997–2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
