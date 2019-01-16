import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
import Form from '../Form';

test('#02', () => {
  const {
    getByLabelText,
    getByText,
    getByTestId,
    container
  } = render(
    <Form>
      <select>
        <option>select a gender</option>
      </select>
    </Form>
  );

  expect(container.select).toMatchSnapshot();

  //expect(getByText('select a gender')).toHaveTextContent('select a gender');
});
