import React from 'react';
import Layout from './hoc/Layout/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Articles from './Containers/Articles/Articles';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      
    </div>
  );
}

export default App;
