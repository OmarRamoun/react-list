import Logo from './Logo';
import styled from "styled-components";


const StyledHero = styled.div.attrs({
  className: "mb-20 border-b border-gray-200 pb-16",
})``;

const Heading = styled.h1.attrs({
  className: "sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
})``;

const Description = styled.p.attrs({
  className: "text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto",
})``;


const Hero = () => {
  return (
    <StyledHero>
      <Logo />
      <Heading>
        ISRA IS MY HEART 💖
      </Heading>
      <Description>
        An awesome GraphQl ToDo List App that I have made to my favorite person in the world. A person that I love more than myself. My Life, My Future. Isra 🤗.
      </Description>
    </StyledHero>
  )
}


Heading.defaultProps = {
  children: "To-Do List"
}


export default Hero;
