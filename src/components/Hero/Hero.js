import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding id="about">
    <LeftSection>
      <SectionTitle main center>
        Welcome, <br />
        I'm Amann Singh
      </SectionTitle>
      <SectionText>
            I'm a third year software engineering student looking for co-op opportunites to
            test my strengths in the field while developing new skills and knowledge. 
            I am really interested in AI, machine learning, game development, and app development.
      </SectionText>
      <Button onClick = {()=> window.location = "https://drive.google.com/file/d/1NGZifQWr92rL_arVrqGORmJSDmcvTB6K/view?usp=sharing"}>Resume</Button> {/*change*/}
    </LeftSection>

  </Section>
);

export default Hero;