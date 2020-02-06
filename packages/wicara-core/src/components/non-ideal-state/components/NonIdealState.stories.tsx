import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { SystemWrapper, SystemBlock } from '../../../utils/storybook';

import { Paragraph } from '../../../foundations';
import NonIdealState from './NonIdealState';

const readme = require('../README.md');

const story = storiesOf('Core|Components/Non-Ideal State', module).addDecorator(SystemWrapper);

story.add(
  'default',
  () => (
    <SystemBlock title="Non-Ideal State" subtitle="Used to inform users that some contents are unavailable.">
      <NonIdealState
        image={<img src="https://via.placeholder.com/318x310.png" alt="No Project Selected" />}
        title="No Project Selected"
      >
        <Paragraph m={0}>You have not selected a project. Please select one from the dropdown on the left.</Paragraph>
      </NonIdealState>
    </SystemBlock>
  ),
  {
    notes: {
      markdown: readme,
    },
  }
);
