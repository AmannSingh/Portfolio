import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:605-970-0768">604-970-0768</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:amann.singh7@outlook.com">amann.singh7@outlook.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>You must be the change you wish to see in the world - Ghandi</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href = "https://github.com/AmannSingh">
            <AiFillGithub size = "3rem"/>
          </SocialIcons>
          <SocialIcons href = "https://linkedin.com/in/amann-singh">
            <AiFillLinkedin size = "3rem"/>
          </SocialIcons>
          <SocialIcons href = "https://instagram.com/amannsingh_">
            <AiFillInstagram size = "3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
