import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import D3DataEnter from './D3DataEnter';

storiesOf('D3DataEnter', module)
  .add('D3DataEnter', withInfo()(() => (
    <D3DataEnter />
  )));
