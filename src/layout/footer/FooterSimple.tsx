import { CustomLink } from 'ui/src/components/CustomLink';
import { CORPORATION_LINK } from './Footer';

export const FooterSimple = () => {
  return (
    <footer className="g-footer g-footer--simple">
      <nav className="corp">
        {CORPORATION_LINK.map((link) => (
          <CustomLink
            key={link.id}
            hierarchy="link-gray"
            label={link.title}
            href={link.href}
            size="md"
            target="_blank"
          />
        ))}
      </nav>

      <p className="g-footer__bottom">©NHN COMMERCE Corp. All rights reserved.</p>
    </footer>
  );
};
