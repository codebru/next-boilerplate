import Link from 'next/link';

function HeaderLink(props) {
  return (
    <li>
      <Link href={props.link}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
}

function Header() {
  return (
    <div>
      <h1>Test Site</h1>
      <nav>
        <menu>
          <HeaderLink title="home" link="/" />
          <HeaderLink title="about" link="/about" />
        </menu>
      </nav>
    </div>
  );
}

export default Header;
