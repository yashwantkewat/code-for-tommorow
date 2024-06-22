import React, { createContext, useReducer } from 'react';
import appReducer from '../reducers/appReducer';
import getPosts from '../api/api';

const initialState = {
  posts: [],
  currentPage: 1,
  totalPages: 0,
  loading: true,
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const fetchPosts = async () => {
    const posts = await getPosts();
    const totalPages = Math.ceil(posts.length / 6);
    dispatch({ type: 'FETCH_POSTS', payload: { posts, totalPages } });
  };

  setTimeout(() => {
    fetchPosts();
  }, 5000);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
