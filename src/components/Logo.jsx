import styled, { keyframes, css } from 'styled-components';
import logoPath from "../logo.svg";


const changeColorKeyframes = keyframes`
  0% {
    filter: hue-rotate(0deg) blur(1px);
    transform: rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg) blur(3px);
  }
  100% {
    filter: hue-rotate(0deg) blur(1px);
    transform: rotate(360deg);
  }
`;

const colorAnimation = (time) => (css`animation: ${changeColorKeyframes} ${time}s infinite forwards linear`);

const StyledLogo = styled.img.attrs({
  alt: "logo"
})`
  ${colorAnimation(props => props.time)};
  width: 10rem;
  margin: auto;
  margin-bottom: 1rem;
  position: relative;
`;

const StyledGlass = styled.div`
  width: 120px;
  height: ${props => props.height};
  background: transparent;
  position: absolute;
  transform: translateX(-50%) rotate(${props => props.rotate});
  top:${props => props.top};
  left: 50%;
  z-index: 1;
  opacity: 0.6;
  border-radius: 10px;
  backdrop-filter: blur(20px);
  /* box-shadow: 0 10px 10px rgba(1, 1, 1, 0.1); */
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  ${props => props.rounded && `border-radius: 0 0 50% 50%`}
`;

const Logo = () => {
  return (
    <section className="logo mb-10">
      <StyledGlass top="15.5%" zIndex="10" height="60px" rounded/>
      <StyledGlass height="120px" />
      <StyledLogo />
    </section>
  )
}

StyledLogo.defaultProps = {
  src: logoPath,
  time: 30
}

StyledGlass.defaultProps = {
  time: 30,
  top: "15.5%",
  rotate: 0
}

export default Logo;


