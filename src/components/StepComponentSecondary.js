import React from 'react';
import styled from 'styled-components';

export const StepComponentSecondary = props => {
  return (
    <StepComponentWrapper>
      <h3>StepComponentSecondary</h3>
      <button onClick={() => props.handleBack('boua')}>Back!</button>
    </StepComponentWrapper>
  );
};

const StepComponentWrapper = styled.div`
  padding: 10px;
`;
