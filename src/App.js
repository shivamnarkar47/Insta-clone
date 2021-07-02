import React from 'react';
import './style.css';
import Header from './Header';
import InstaStory from './InstaStory';
import Feed from './Feed';

export default function App() {
  return (
    <div>
      <Header />
      <InstaStory />
      <Feed />
    </div>
  );
}
