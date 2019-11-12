import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import SVGPracticeLine from './SVGPracticeLine';
import SVGPracticePolyline from './SVGPracticePolyline';
import SVGPracticePolygon from './SVGPracticePolygon';

storiesOf('SVGPractice', module)
  .add('SVGPracticeLine', withInfo()(() => (
    <SVGPracticeLine />
  )))
  .add('SVGPracticePolyline', withInfo()(() => (
    <SVGPracticePolyline />
  )))
  .add('SVGPracticePolygon', withInfo()(() => (
    <SVGPracticePolygon />
  )));
