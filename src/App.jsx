import React from 'react';
import Header from './components/header.jsx';
import Card from './components/card.jsx';
import { travelData } from './data';
import './App.css';

function App() {
  const cards = travelData.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {cards}
      </main>
    </div>
  );
}

export default App;