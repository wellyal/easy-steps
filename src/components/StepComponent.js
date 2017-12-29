import React from 'react';
import styled from 'styled-components';

export const StepComponent = props => {
  return (
    <StepComponentWrapper>
      <h3>StepComponents</h3>
      <button onClick={() => props.handleNext('boua')}>Go!</button>
    </StepComponentWrapper>
  );
};

const StepComponentWrapper = styled.div`
  padding: 10px;
`;
