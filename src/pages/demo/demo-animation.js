import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import styled from 'styled-components';

import Bike from '../../components/demo/Bike';

const StyledAnimation = styled.div`
  h1 {
    margin-bottom: 1em;
  }
  .demo-section {
    margin-bottom: 6em;
    .effect-wrap {
      margin: 2em 0;
    }
  }
  .bike {
    width: 100%;
    #front-wheel,
    #rear-wheel {
      animation: Rotate 2s linear infinite;
      transform-origin: center;
      transform-box: fill-box;
    }
    #pedal-right {
      animation: Rotate 2s linear infinite;
      transform-origin: 22% 86%;
      transform-box: fill-box;
    }
    #pedal-left {
      animation: Rotate 2s linear infinite;
      transform-origin: 78% 14%;
      transform-box: fill-box;
    }
  }
  @keyframes Rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  @media (max-width: 750px) {
  }
  @media (min-width: 751px) {
  }
`;

const Animation = (props) => {
  const location = props.location;
  const pageTitle = 'Demo Fun Animations';
  const pageSlug = 'demo-fun-animations';

  return (
    <Layout location={location}>
      <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
      <StyledAnimation>
        <div className='container'>
          <h1>{pageTitle}</h1>

          <section className='demo-section'>
            <h2 className='font-script' style={{ fontSize: '2.5rem' }}>
              Let's go cycling!
            </h2>
            <div className='effect-wrap'>
              <Bike />
            </div>
          </section>
        </div>
      </StyledAnimation>
    </Layout>
  );
};

export default Animation;
