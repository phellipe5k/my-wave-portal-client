import { render, screen } from '@testing-library/react';

import Modal from '.';

describe('<Modal />', () => {
  const { container } = render(<Modal />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Modal/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
