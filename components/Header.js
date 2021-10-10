import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container"></div>
      <Link href="/" passHref>
        <h2>Way To Sync</h2>
      </Link>
    </header>
  );
}
