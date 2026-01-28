import GitHub from "../icon/github";
import GitLab from "../icon/gitlab";
import LinkedIn from "../icon/linkedin";

const Footer = () => {
  return (
    <footer className="container">
      <section className="border-t border-gray-500 flex items-center justify-between py-4">
        <div className="text-xs font-semibold">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="https://github.com/subashf23s"
              target="_blank"
              title="Github"
            >
              <GitHub />
            </a>
          </li>
          <li>
            <a
              href="https://gitlab.com/subashsuni55"
              target="_blank"
              title="Gitlab"
            >
              <GitLab />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/subash-t-6bb006270"
              target="_blank"
              title="Linkedin"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
