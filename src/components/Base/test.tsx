import { render, screen } from '@testing-library/react';

import Base from '.';

describe('<Base />', () => {
  const { container } = render(<Base />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Base/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
