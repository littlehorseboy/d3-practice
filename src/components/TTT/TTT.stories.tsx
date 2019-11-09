import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, date, select } from '@storybook/addon-knobs';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import TTT from './TTT';

storiesOf('TTT', module)
  .add('TTT', withInfo()(() => (
    <>
      <TTT />
    </>
  )));
