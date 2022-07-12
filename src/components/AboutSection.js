import React from 'react'
import Button from './Button'
import PText from './PText'
import SectionTitle from './SectionTitle'
/* import aboutImg from '../assets/yox2.png'; */
import pcImg from '../assets/mypc1.jpg';
import rainImg from '../assets/rain.jpg';
import styled from 'styled-components';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left, .aboutSection__right {
    flex: 1;
  }

  .aboutSection__right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .aboutSection__right:hover > .one {
    animation: move 1s forwards;
  }

  .aboutSection__right img {
    height: 60%;
    width: 60%;
    position: absolute;
    object-fit: cover;
    -webkit-box-shadow: 8px 8px 11px -9px #000000; 
    box-shadow: 8px 8px 11px -9px #000000;
    border: 2px solid #fff
  }

  .aboutSection__right .one {
    top: 0;
    right: 0;
    z-index: 1;
    animation: unmove 1s forwards;
  }
  .aboutSection__right .two {
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  @keyframes move {
    0% {
        right: 0;
        z-index: 1;
    }
    50% {
        right: -25%;
        z-index: 1;
        transform: scale(1);
    }
    100% {
        right: 0;
        z-index: 10;
        transform: scale(1.2);
    }
}

@keyframes unmove {
    0% {
        right: 0;
        z-index: 10;
        transform: scale(1.2);
    }
    50% {
        right: -25%;
        z-index: 1;
        transform: scale(1);
    }
    100% {
        right: 0;
        z-index: 1;
    }
}

  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left, .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 5rem;
      min-height: 50vh;
    }
    
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper, a {
        width: 100%;
        text-align: center;
      }
    }
  }
`


export default function AboutSection() {
  return (
    <AboutSectionStyle>
        <div className='container'>
            <div className='aboutSection__left'>
                <SectionTitle
                  subheading='Let me introduce myself'
                  heading='About me'
                />
                <PText>
                I'm a Multimedia Engineer student based in Bogotá, Colombia. I'm a web developer, but i also know about animation and modeling.
                </PText>
                <PText>
                I've been learning all of this since 2019 and i'd like to help you to transform your ideas into a useful and innovative product.
                </PText>
                <div className='aboutSection__buttons'>
                  <Button btnLink='/projects' btnText='Works'/>
                  <Button btnLink='/about' btnText='Read More' outline/>
                </div>
            </div>
            <div className='aboutSection__right'>
              <img className='one' src={pcImg} alt=""/>
              <img className='two' src={rainImg} alt=""/>
            </div>
        </div>
    </AboutSectionStyle>
  )
}
