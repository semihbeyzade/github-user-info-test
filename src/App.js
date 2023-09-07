import React, { useState } from 'react';
import axios from 'axios';
import User from './User';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

      setUser({
        name: response.data.name,
        public_repos: response.data.public_repos,
        repos: reposResponse.data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
        })),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Github Benutzerinformationen</h1>
      <input
        type="text"
        placeholder="Github Benutzername eingeben"
        value={username}
        onChange={handleChange}
      />
      <button onClick={fetchData}>Daten abrufen</button>
      {user && <User user={user} />}
    </div>
  );
}

export default App;

