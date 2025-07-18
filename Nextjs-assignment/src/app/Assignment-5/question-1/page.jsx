// 1. Create a Next.js component using the App Router that fetches data on the server side (SSR) from a public API (e.g., JSONPlaceholder) and displays the results on the page.


// This is a server component by default (No "use client")

// Server Component - Next.js App Router (SSR)
// Server Component using GoRest API (English Posts)

// Server Component using DummyJSON API (English posts)

import React from "react";

const PostsPage = async () => {
    
  // Fetch only posts tagged “english”
  const res = await fetch("https://dummyjson.com/posts/tag/english");
  if (!res.ok) throw new Error("Failed to fetch English posts");
  
  const { posts } = await res.json();

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        Question 1. Create a Next.js component using the App Router that fetches data on the server side (SSR) from a public API (e.g., JSONPlaceholder) and displays the results on the page.

        {/* This Next.js App Router page uses <strong>SSR</strong> and fetches only
        posts tagged “english” from DummyJSON. */}
      </p>

      <main style={{ padding: "2rem" }}>
        <h1>English Blog Posts (DummyJSON – Server‑Rendered)</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "1.5rem" }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>
                Tags: {post.tags.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default PostsPage;
