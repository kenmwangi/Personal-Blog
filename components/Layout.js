import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, title, keywords, description }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main className="container mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultprops = {
  title: 'Home | Ken Mwangi',
  keywords: 'personal, blog, nextjs, SEO, fullstack, developer',
  description:
    'Personal blog designed using Nextjs, tailwindcss and markdown to document my fullstack developer journey',
};
