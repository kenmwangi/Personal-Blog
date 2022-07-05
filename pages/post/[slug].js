import Layout from '@/components/Layout';
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export default function PostPage({ frontmatter, content }) {
  return (
    <Layout>
      <div className="prose mx-auto">
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');

  const paths = files.map((file) => ({
    params: {
      slug: file.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(file);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
