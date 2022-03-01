import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { List } from './index';

describe('List Component', () => {
  it('should render list items', () => {
    const { getByText } = render(
      <List initialItems={['Alexandre', 'Diego', 'Mayk', 'Rodz']} />,
    );

    expect(getByText('Alexandre')).toBeInTheDocument();
    expect(getByText('Diego')).toBeInTheDocument();
    expect(getByText('Mayk')).toBeInTheDocument();
    expect(getByText('Rodz')).toBeInTheDocument();
  });

  it('should render list items with the value that been passed in initialItems property', () => {
    const { getByText, queryByText, rerender, unmount } = render(
      <List initialItems={['Alexandre']} />,
    );

    expect(getByText('Alexandre')).toBeInTheDocument();

    unmount();

    rerender(<List initialItems={['Diego']} />);

    expect(getByText('Diego')).toBeInTheDocument();
    expect(queryByText('Alexandre')).not.toBeInTheDocument();
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(
      <List initialItems={[]} />,
    );

    const inputElement = getByPlaceholderText('Novo Item');
    const addButton = getByText('Adicionar');

    userEvent.type(inputElement, 'Novo');
    userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText('Novo')).toBeInTheDocument();
    });
  });

  it('should be able to remove new item from the list', async () => {
    const { getByText, getAllByText } = render(
      <List initialItems={['Alexandre']} />,
    );

    const removeButtons = getAllByText('Remover');

    userEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return getByText('Alexandre');
    });
  });

  it('should be able to remove new item from the list (other way to test)', async () => {
    const { queryByText, getAllByText } = render(
      <List initialItems={['Alexandre']} />,
    );

    const removeButtons = getAllByText('Remover');

    userEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText('Alexandre')).not.toBeInTheDocument();
    });
  });
});
