import React from "react";

export const Post = ({ posts, loading }) => {
  return (
    <ul className="list-group mb-4">
      {loading && <h1 className="text-primary mb-3">Loading...</h1>}
      {posts?.map(({ id, title, body }) => (
        <li key={id} className="list-group-item">
          {title}
        </li>
      ))}
    </ul>
  );
};
