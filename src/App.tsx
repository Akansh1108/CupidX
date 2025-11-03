import React, { useState } from 'react';
import { User, Match } from './types';
import './App.css';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [matches, _setMatches] = useState<Match[]>([]);
  const [currentView, setCurrentView] = useState<'profile' | 'swipe' | 'matches'>('profile');

  const handleLogin = (userData: User) => {
    setUser(userData);
    setCurrentView('swipe');
  };

  const handleSwipe = (direction: 'left' | 'right', targetUserId: string) => {
    if (direction === 'right') {
      // Add match logic here
      console.log('Swiped right on user:', targetUserId);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>CupidX</h1>
        {user && (
          <nav>
            <button
              onClick={() => setCurrentView('swipe')}
              className={currentView === 'swipe' ? 'active' : ''}
            >
              Discover
            </button>
            <button
              onClick={() => setCurrentView('matches')}
              className={currentView === 'matches' ? 'active' : ''}
            >
              Matches
            </button>
            <button
              onClick={() => setCurrentView('profile')}
              className={currentView === 'profile' ? 'active' : ''}
            >
              Profile
            </button>
          </nav>
        )}
      </header>

      <main className="app-main">
        {!user ? (
          <div className="login-view">
            <h2>Welcome to CupidX</h2>
            <p>Find your perfect match today!</p>
            <button
              onClick={() => handleLogin({
                id: '1',
                name: 'Demo User',
                age: 25,
                bio: 'Just testing the app',
                photos: [],
                interests: ['music', 'travel']
              })}
              className="login-btn"
            >
              Get Started
            </button>
          </div>
        ) : (
          <div className="main-content">
            {currentView === 'profile' && (
              <div className="profile-view">
                <h2>Your Profile</h2>
                <div className="profile-card">
                  <h3>{user.name}</h3>
                  <p>Age: {user.age}</p>
                  <p>{user.bio}</p>
                  <div className="interests">
                    {user.interests.map((interest, index) => (
                      <span key={index} className="interest-tag">{interest}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {currentView === 'swipe' && (
              <div className="swipe-view">
                <h2>Discover People</h2>
                <div className="swipe-card">
                  <p>Demo profile card</p>
                  <div className="swipe-actions">
                    <button onClick={() => handleSwipe('left', 'demo')}>Pass</button>
                    <button onClick={() => handleSwipe('right', 'demo')}>Like</button>
                  </div>
                </div>
              </div>
            )}
            {currentView === 'matches' && (
              <div className="matches-view">
                <h2>Your Matches</h2>
                {matches.length === 0 ? (
                  <p>No matches yet. Keep swiping!</p>
                ) : (
                  <div className="matches-grid">
                    {matches.map((match) => (
                      <div key={match.id} className="match-card">
                        <h4>{match.users[0].name}</h4>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
