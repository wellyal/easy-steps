import React from 'react';
import {render} from 'react-dom';

// locals
import './index.css';
import {Steps} from './components';
import {StepComponent} from './components';
import {StepComponentSecondary} from './components';

render(
  <Steps>
    <StepComponent />
    <StepComponentSecondary />
  </Steps>,
  document.getElementById('root')
);
