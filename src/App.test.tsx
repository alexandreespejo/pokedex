import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('app teste', () => {
  it('should render page', () => {
      render(<App />);

      expect(screen).toBeTruthy();
    })
});