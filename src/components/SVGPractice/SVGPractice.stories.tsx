import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import SVGPracticeLine from './SVGPracticeLine';
import SVGPracticePolyline from './SVGPracticePolyline';

storiesOf('SVGPractice', module)
  .add('SVGPracticeLine', withInfo()(() => (
    <SVGPracticeLine />
  )))
  .add('SVGPracticePolyline', withInfo()(() => (
    <SVGPracticePolyline />
  )));
