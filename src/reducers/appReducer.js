const appReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_POSTS':
        return {
          ...state,
          posts: action.payload.posts,
          totalPages: action.payload.totalPages,
          loading: false,
        };
      case 'CHANGE_PAGE':
        return {
          ...state,
          currentPage: action.payload,
        };
      case 'REMOVE_POST':
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default appReducer;
  