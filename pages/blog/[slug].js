import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/BlogPage.module.css";

export default function Blog({ frontmatter, markdown }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo Blog | {frontmatter.title}</title>
      </Head>
      <button>
        <Link href="/blog">
          <a>Back</a>
        </Link>
      </button>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      {frontmatter?.thumbnail && (
        <Image
          src={frontmatter.thumbnail}
          alt="Post thumbnail image"
          height={300}
          width={400}
        ></Image>
      )}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(
    fs.readFileSync(`./content/blogs/${slug}.md`, "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/blogs");

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  // const paths = filesInProjects.map((file) => {
  //   const filename = file.slice(0, file.indexOf("."));
  //   const en = { params: { slug: filename }, locale: "en" };
  //   const fr = { params: { slug: filename }, locale: "fr" };
  //   const si = { params: { slug: filename }, locale: "si" };
  //   return { params: { slug: filename }, locale: "en" };
  // });

  // Make static paths work with localization
  const paths = [];
  const pathsFor = filesInProjects.forEach((file) => {
    const filename = file.slice(0, file.indexOf("."));
    console.log(filename);
    paths.push({ params: { slug: filename }, locale: "en" });
    paths.push({ params: { slug: filename }, locale: "fr" });
    paths.push({ params: { slug: filename }, locale: "si" });
  });

  // console.log(pathsTest);

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}
