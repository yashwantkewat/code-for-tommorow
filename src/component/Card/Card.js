import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Card = ({ post }) => {
  const { dispatch } = useContext(AppContext);

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_POST', payload: post.id });
  };

  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Card;
