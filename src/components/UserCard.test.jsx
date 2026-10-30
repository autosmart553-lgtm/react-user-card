import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserCard from './UserCard';

describe('UserCard Component', () => {
  const mockUser = {
    profilePicture: 'https://example.com/avatar.jpg',
    name: 'John Doe',
    email: 'john@example.com',
  };

  test('renders profile picture, name, and email', () => {
    render(<UserCard user={mockUser} />);
    const img = screen.getByTestId('profile-picture');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', mockUser.profilePicture);
    expect(img).toHaveAttribute('alt', "John Doe's profile");
    expect(screen.getByTestId('user-name')).toHaveTextContent('John Doe');
    expect(screen.getByTestId('user-email')).toHaveTextContent('john@example.com');
  });

  test('Follow button toggles state on click', () => {
    render(<UserCard user={mockUser} />);
    const button = screen.getByTestId('follow-button');
    expect(button).toHaveTextContent('Follow');
    expect(button).toHaveClass('follow');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Following');
    expect(button).toHaveClass('following');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Follow');
    expect(button).toHaveClass('follow');
  });
});
