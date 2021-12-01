import React from 'react';
import { DiPython, DiReact } from 'react-icons/di';
import {RiInvisionLine} from 'react-icons/ri';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've worked with a few technologies throughout my class work expreince from back-end to design
   </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem"/>
       <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
         Expereince with <br/>
         React.js and JavaScript
        </ListParagraph>
      </ListContainer>
     </ListItem>
     <ListItem>
       <DiPython size="3rem"/>
       <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
         Expereince with <br/>
         Python and PosgreSQL
        </ListParagraph>
      </ListContainer>
     </ListItem><ListItem>
       <RiInvisionLine size="3rem"/>
       <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
         Expereince with <br/>
         InVision
        </ListParagraph>
      </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
