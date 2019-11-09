import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import D3TransitionCircle from './D3TransitionCircle';

storiesOf('D3TransitionCircle', module)
  .add('D3TransitionCircle', withInfo()(() => (
    <D3TransitionCircle />
  )));
