import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../Components/Home';

describe('Home render', () => {
  test('test1', () => {
    const user: string = '';
    render(
      <Home
        setsubject={() => {}}
        setuser={() => {}}
        navigate={() => {}}
        user={user}
        setnavvisible={() => {}}
      />
    );
  });
});
describe('Home', () => {
  test('test2', () => {
    const user: string = '';
    render(
      <Home
        setsubject={() => {}}
        setuser={() => {}}
        navigate={() => {}}
        user={user}
        setnavvisible={() => {}}
      />
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

describe('Home=>button', () => {
  test('test2', () => {
    const user: string = '';
    render(
      <Home
        setsubject={() => {}}
        setuser={() => {}}
        navigate={() => {}}
        user={user}
        setnavvisible={() => {}}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
