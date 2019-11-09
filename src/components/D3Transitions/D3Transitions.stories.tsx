import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import D3Transitions from './D3Transitions';

storiesOf('D3Transitions', module)
  .add('D3Transitions', withInfo()(() => (
    <D3Transitions />
  )));
