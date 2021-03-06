import * as React from 'react';
import { render } from '@testing-library/react';

import { colors } from '../../../utils';
import Badge from './Badge';

describe('compoents/Badge', () => {
  describe('<Badge />', () => {
    test('renders with children', () => {
      const { container } = render(<Badge>test badge</Badge>);

      expect(container).toHaveTextContent('test badge');
    });

    test('renders with additional variants', () => {
      const { container } = render(<Badge variant="primary">test badge</Badge>);

      expect(container.firstChild).toHaveStyleRule('background-color', colors.kataBlue);
      expect(container.firstChild).toHaveStyleRule('color', colors.white);
    });
  });
});
