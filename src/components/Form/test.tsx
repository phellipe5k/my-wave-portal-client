import { render, screen } from '@testing-library/react';

import Form from '.';

describe('<Form />', () => {
  const { container } = render(<Form />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Form/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
