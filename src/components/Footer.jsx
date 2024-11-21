import GitHubIcon from "@/components/icons/GitHubIcon";
import MailIcon from "@/components/icons/MailIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list--item">
          <a href="mailto:dav4dmeza@proton.me">
            <MailIcon />
          </a>
        </li>
        <li className="footer__list--item">
          <a href="https://github.com/dav4dmeza" target="_blank">
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
