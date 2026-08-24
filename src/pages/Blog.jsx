import React from "react";
import { Link } from "react-router";
import { blogPosts } from "./blogData";

const Blog = () => {
  return (
    <div className="blog-index">
      <section className="af-panel af-content home-info-panel af-page__body af-rise af-rise-3">
        <h1 className="text-4xl! font-bold!">Blog</h1>
        <div className="blog-list" aria-label="Blog articles">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Link to={`/blog/${post.slug}`}>
                <div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <time>{post.date}</time>
                </div>
                <span className="blog-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="home-faq">
          <strong>Questions?</strong>
          <a
            href="https://t.me/account_factory_com"
            target="_blank"
            rel="noreferrer"
          >
            Message support <span>↗</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
