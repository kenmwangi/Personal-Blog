import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-fuchsia-100 mb-8 py-4">
      <header className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-semibold text-gray-700">
            Ken Mwangi&trade;
          </a>
        </Link>
        <nav>
          <ul className="flex gap-4 text-base text-gray-600">
            <li className="hover:bg-fuchsia-400 p-2 hover:text-white rounded-lg">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:bg-fuchsia-400 p-2 hover:text-white rounded-lg">
              <Link href="/open-source">Open source</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
