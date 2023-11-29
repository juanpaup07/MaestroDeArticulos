import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/admin/AdminPanel';
import ArticleList from './components/Catalog/ArticleList';

const App = () => {


  return (

    
    <Router>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>

    </Router>
  );
};

export default App;