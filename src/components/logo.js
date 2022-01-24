/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';

export default function Logo({ isSticky, logoName, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
        <h1><a>{logoName}</a></h1>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    textTransform: 'uppercase',
    fontWeight: 'bolder'
  }
};
