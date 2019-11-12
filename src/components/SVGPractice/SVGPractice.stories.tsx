import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-disable import/no-unresolved */
import { withInfo } from '@storybook/addon-info';
/* eslint-enable */
import SVGPracticeLine from './SVGPracticeLine';
import SVGPracticePolyline from './SVGPracticePolyline';
import SVGPracticePolygon from './SVGPracticePolygon';
import SVGPracticePath from './SVGPracticePath';
import SVGPracticePathHV from './SVGPracticePathHV';
import SVGPracticePathC from './SVGPracticePathC';
import SVGPracticePathS from './SVGPracticePathS';
import SVGPracticePathQT from './SVGPracticePathQT';

storiesOf('SVGPractice', module)
  .add('SVGPracticeLine', withInfo()(() => (
    <SVGPracticeLine />
  )))
  .add('SVGPracticePolyline', withInfo()(() => (
    <SVGPracticePolyline />
  )))
  .add('SVGPracticePolygon', withInfo()(() => (
    <SVGPracticePolygon />
  )))
  .add('SVGPracticePath', withInfo()(() => (
    <SVGPracticePath />
  )))
  .add('SVGPracticePathHV', withInfo()(() => (
    <SVGPracticePathHV />
  )))
  .add('SVGPracticePathC', withInfo()(() => (
    <SVGPracticePathC />
  )))
  .add('SVGPracticePathS', withInfo()(() => (
    <SVGPracticePathS />
  )))
  .add('SVGPracticePathQT', withInfo()(() => (
    <SVGPracticePathQT />
  )));
