import React from "react";
import styles from "./Footer.module.css";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      url: "https://www.facebook.com/netflix",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      url: "https://www.instagram.com/netflix",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      url: "https://twitter.com/netflix",
    },
    {
      icon: <FaYoutube />,
      label: "YouTube",
      url: "https://www.youtube.com/netflix",
    },
  ];

  const footerLinks = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Centre", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Centre", "Privacy", "Contact Us"],
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className={styles.footerLinks}>
          {footerLinks.map((column, index) => (
            <ul key={index}>
              {column.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>© 1997-2026 Netflix, Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
