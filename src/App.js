import React from 'react';
import { AppProvider } from './context/AppContext';
import CardList from './component/CardList/CardList';
import Loading from './component/Loading/Loading';

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <h1>Posts</h1>
        <CardList />
        <Loading />
      </div>
    </AppProvider>
  );
};

export default App;
