import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />);

    expect(getByText('Alexandre')).toBeInTheDocument();
    expect(getByText('Diego')).toBeInTheDocument();
    expect(getByText('Mayk')).toBeInTheDocument();
    expect(getByText('Rodz')).toBeInTheDocument();
  });
});
