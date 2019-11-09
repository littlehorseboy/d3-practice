import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import D3DataFontSize from './D3DataFontSize';

storiesOf('D3DataFontSize', module)
  .add('D3DataFontSize', withInfo()(() => (
    <D3DataFontSize />
  )));
