import { screen, render } from '@testing-library/react';
import App from './App';

describe('Default test to keep CI Workflow from crying about having no tests', () => {
  test('should exist', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { name: 'Template' });

    expect(heading).toBeInTheDocument();
  });
});
