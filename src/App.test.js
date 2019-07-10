import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

afterEach(cleanup);

it('works', async () => {
  const ui = <App />;
  const { container, getByLabelText, getByRole } = render(ui);
  fireEvent.drop(getByLabelText('Upload files'), {
    target: { files: [new File([''], 'filename', { type: 'image/png' })] }
  });
  await flushPromises(ui, container);
  expect(getByRole('alert')).toHaveTextContent('1');
});

it('works?', async () => {
  const ui = <App />;
  const { container, getByLabelText, getByRole } = render(ui);
  fireEvent.drop(getByLabelText('Upload files'), {
    target: { files: [new File([''], 'filename', { type: 'image/png' }), new File([''], 'filename2', { type: 'video/mp4' })] }
  });
  await flushPromises(ui, container);
  expect(getByRole('alert')).toHaveTextContent('2');
});


it('works?', async () => {
  const ui = <App />;
  const { container, getByLabelText, getByRole } = render(ui);
  fireEvent.drop(getByLabelText('Upload files'), {
    target: { files: [new File([''], 'filename', { type: 'image/png' }), new File([''], 'filename2', { type: 'video/mp4' }), new File([''], 'filename2', { type: 'video/mp4' })] }
  });
  await flushPromises(ui, container);
  expect(getByRole('alert')).toHaveTextContent('3');
});


it('works?', async () => {
  const ui = <App />;
  const { container, getByLabelText, getByRole } = render(ui);
  fireEvent.drop(getByLabelText('Upload files'), {
    target: { files: [new File([''], 'filename', { type: 'image/png' }), new File([''], 'filename2', { type: 'video/mp4' }), new File([''], 'filename2', { type: 'video/mp4' }), new File([''], 'filename2', { type: 'video/mp4' })] }
  });
  await flushPromises(ui, container);
  expect(getByRole('alert')).toHaveTextContent('4');
});

function flushPromises(ui, container) {
  return new Promise(resolve =>
    setImmediate(() => {
      render(ui, { container })
      resolve(container)
    })
  )
}
