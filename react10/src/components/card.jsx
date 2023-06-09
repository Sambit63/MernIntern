import React from 'react';

function Card({ postid,Id,title,email,body }) {
  return (
    <div>
      <h1>{postid}</h1>
      <h2>{Id}</h2>
      <h3>{title}</h3>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
}

export default Card;