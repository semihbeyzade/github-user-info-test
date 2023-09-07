import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Öffentliche Repositories: {user.public_repos}</p>
      <h3>Repositories:</h3>
      <ul>
        {user.repos.map((repo) => (
          <li key={repo.id}>
            <strong>{repo.name}</strong>: {repo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;