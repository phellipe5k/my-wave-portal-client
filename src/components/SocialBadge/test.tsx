import { render, screen } from '@testing-library/react';

import SocialBadge from '.';

describe('<SocialBadge />', () => {
  const { container } = render(<SocialBadge />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /SocialBadge/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
