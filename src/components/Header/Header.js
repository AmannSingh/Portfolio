import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Helmet>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://amannsingh.netlify.app/"/>
      <meta property="og:title" content="Amann Singh "/>
      <meta property="og:description" content="Portfolio showcasing my work as software engineer student "/>
      <meta property="og:image" content="/images/img2.png"/>
    </Helmet>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems: "center", color:"white", marginBottom:"20px"}}>
          <DiCssdeck size = "3rem"/>  
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://github.com/AmannSingh">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://linkedin.com/in/amann-singh">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://instagram.com/amannsingh_">
        <AiFillInstagram size = "3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
