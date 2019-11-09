import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import D3DataExit from './D3DataExit';

storiesOf('D3DataExit', module)
  .add('D3DataExit', withInfo()(() => (
    <D3DataExit />
  )));
