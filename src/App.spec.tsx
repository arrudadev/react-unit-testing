import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import App from './App';

describe('App Component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />);

    expect(getByText('Alexandre')).toBeInTheDocument();
    expect(getByText('Diego')).toBeInTheDocument();
    expect(getByText('Mayk')).toBeInTheDocument();
    expect(getByText('Rodz')).toBeInTheDocument();
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const inputElement = getByPlaceholderText('Novo Item');
    const addButton = getByText('Adicionar');

    userEvent.type(inputElement, 'Novo');
    userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText('Novo')).toBeInTheDocument();
    });
  });

  it('should be able to remove new item from the list', async () => {
    const { getByText, getAllByText } = render(<App />);

    const removeButtons = getAllByText('Remover');

    userEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return getByText('Alexandre');
    });
  });

  it('should be able to remove new item from the list (other way to test)', async () => {
    const { queryByText, getAllByText } = render(<App />);

    const removeButtons = getAllByText('Remover');

    userEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText('Alexandre')).not.toBeInTheDocument();
    });
  });
});
