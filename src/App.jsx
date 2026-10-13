import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HallList from './components/HallList';
import './App.css';

function App() {
  const [page, setPage] = useState('halls');

  return (
    <div className="app">
      <Navbar currentPage={page} onNavigate={setPage} />
      <main className="app__main">
        {page === 'halls' && <HallList />}
        {page === 'apply' && <div className="placeholder">Application form coming soon…</div>}
        {page === 'track' && <div className="placeholder">Tracker coming soon…</div>}
      </main>
      <footer className="app__footer">
        DIU Nest · Smart Hall Seat Management
      </footer>
    </div>
  );
}

export default App;
