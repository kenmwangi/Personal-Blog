import Layout from '@/components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export default function HomePage({ posts }) {
  return (
    <Layout>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 md:p-0">
        {posts.map((post, index) => (
          <div
            key={index}
            className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <Link href={`/post/${post.slug}`}>
              <a>
                <img
                  src={post.frontmatter.coverImage}
                  alt={post.frontmatter.title}
                />
                <h1 className="p-4 hover:text-fuchsia-500 hover:underline underline-offset-4 transition-all">
                  {post.frontmatter.title}
                </h1>
              </a>
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((file) => {
    const slug = file.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${file}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
