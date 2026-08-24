import React from "react";
import { Link, useParams } from "react-router";
import { getBlogPost } from "./blogData";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <section className="af-panel af-content blog-detail af-rise af-rise-3">
        <p className="page-kicker">404 / Article not found</p>
        <h1>That article is not available.</h1>
        <Link className="blog-back" to="/blog">
          Back to blog <span>↗</span>
        </Link>
      </section>
    );
  }

  return (
    <article className="af-panel af-content blog-detail af-rise af-rise-3">
      <nav className="af-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Catalog</Link>
        <span>/</span>
        <Link to="/blog">Blog</Link>
        <span>/</span>
        <span>{post.title}</span>
      </nav>
      <header className="blog-detail__header">
        <p className="page-kicker">Account Factory / Field guide</p>
        <h2 className="text-4xl font-bold">{post.title}</h2>
        <div className="blog-detail__meta flex my-4 gap-2">
          <time className="text-[#8f929b] text-sm">{post.date}</time>
          <span className="text-[#8f929b] text-sm">·</span>
          <span className="text-[#8f929b] text-sm">8 min read</span>
        </div>
        <p className="blog-detail__lead text-[#8f929b]">{post.description}</p>
      </header>
      <div className="blog-detail__body mt-4">
        {post.sections.map((section) => (
          <section className="blog-section" key={section.heading}>
            <h2 className="text-3xl font-semibold my-4">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.subsections?.map(([heading, text]) => (
              <div className="blog-subsection" key={heading}>
                <h3>{heading}</h3>
                <p>{text}</p>
              </div>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.table && (
              <div className="blog-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Profile</th>
                      <th>Lifespan</th>
                      <th>Best for</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {section.faqs?.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </section>
        ))}
      </div>
      <footer className="home-faq">
        <strong>Questions about a position?</strong>
        <a
          href="https://t.me/account_factory_com"
          target="_blank"
          rel="noreferrer"
        >
          Message support <span>↗</span>
        </a>
      </footer>
    </article>
  );
};

export default BlogDetail;
