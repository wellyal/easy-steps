import React from 'react';
import {compose, withProps, withHandlers, withState} from 'recompose';
import styled, {css} from 'styled-components';
import uuidv1 from 'uuid/v1';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

const enhancer = compose(
  withState('slideIndex', 'setSlideIndex', 0),
  withProps(({children}) => ({
    steps: children
  })),
  withHandlers({
    handleNext: ({setSlideIndex, slideIndex}) => () => {
      setSlideIndex(slideIndex + 1);
    },
    handleBack: ({setSlideIndex, slideIndex}) => () => {
      setSlideIndex(slideIndex - 1);
    }
  })
);

export const Steps = enhancer(({steps, handleBack, handleNext, slideIndex}) => {
  const stepsEnhanced = React.Children.map(steps, step =>
    React.cloneElement(step, {handleBack, handleNext})
  );

  return (
    <StepsContainer>
      {stepsEnhanced.map((step, index) => {
        return (
          <StepWrapper active={index === slideIndex} key={uuidv1()}>
            {step}
          </StepWrapper>
        );
      })}
      <div>
        <button onClick={handleBack}>
          <FaAngleLeft />
        </button>
        <button onClick={handleNext}>
          <FaAngleRight />
        </button>
      </div>
    </StepsContainer>
  );
});

const StepsContainer = styled.div``;

const StepWrapper = styled.div`
  background: #fff;
  display: none;

  ${props =>
    props.active &&
    css`
      display: block;
    `};
`;
