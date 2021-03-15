import "./App.css";
import React from "react";
import { Post } from "./Post";
import { Pagination } from "./Pagination";

function App() {
  const { useState, useEffect } = React;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => data);
    setPosts(response);
    setLoading(false);
  };

  const paginate = (number) => setCurrentPage(number);

  useEffect(() => {
    fetchPosts();
  }, []);

  // get current posts
  const indexOfTheLastPost = currentPage * postsPerPage;
  const indexOfTheFirstPost = indexOfTheLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfTheFirstPost, indexOfTheLastPost);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Posts</h1>
      <Post posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPAge={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
