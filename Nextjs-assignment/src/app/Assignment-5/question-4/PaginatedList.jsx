// 4. Build a Next.js component that fetches a large dataset from an API and displays it with pagination. Show a limited number of items per page and provide controls to navigate between pages. Use the native fetch and handle data fetching efficiently within the App Router

// app/PaginatedList.jsx


'use client';

import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginatedList({ itemsPerPage }) {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (pageNum) => {
    setLoading(true);
    const skip = (pageNum - 1) * itemsPerPage;

    try {
      const res = await fetch(`https://dummyjson.com/posts?limit=${itemsPerPage}&skip=${skip}`);
      const data = await res.json();
      setPosts(data.posts);
      setTotalPosts(data.total);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Page {page}</h3>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: "1rem" }}>
              <strong>{post.title}</strong><br />
              {post.body}
            </li>
          ))}
        </ul>
      )}

      <Stack spacing={2} alignItems="center" marginTop="1rem">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, val) => setPage(val)}
          shape="rounded"
        />
      </Stack>
    </div>
  );
}
