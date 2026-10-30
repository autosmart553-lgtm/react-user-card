import React, { useState } from 'react';

const UserCard = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="user-card" data-testid="user-card">
      <img
        src={user.profilePicture}
        alt={`${user.name}'s profile`}
        className="profile-picture"
        data-testid="profile-picture"
      />
      <h2 data-testid="user-name">{user.name}</h2>
      <p data-testid="user-email">{user.email}</p>
      <button
        onClick={handleFollowToggle}
        className={isFollowing ? 'following' : 'follow'}
        data-testid="follow-button"
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default UserCard;
