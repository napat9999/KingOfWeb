import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © {new Date().getFullYear()} <strong>Napat Namwong</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target={link.link.startsWith("http") ? "_blank" : undefined}
              rel='noopener noreferrer'
              title={link.name}
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
