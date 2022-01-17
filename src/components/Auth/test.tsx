import { render, screen } from '@testing-library/react';

import Auth from '.';

describe('<Auth />', () => {
  const { container } = render(<Auth />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Auth/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
