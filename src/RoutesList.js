import React from 'react';
import { Route, Routes } from 'react-router-native';
import Home from 'views/Home';
import Search from 'views/Search';
import Statistics from 'views/Statistics/Statistics';
import About from 'views/About/About';
import AddDebt from 'views/AddDebt';

export const RoutesList = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/search" element={<Search />} />
    <Route exact path="/statistics" element={<Statistics />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/addDebt" element={<AddDebt />} />
  </Routes>
);
