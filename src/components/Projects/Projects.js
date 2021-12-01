import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Video } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants'; // change projects here in this directory



const Projects = () => (

<Section nopadding id ="projects">
  <SectionDivider/>
  <SectionTitle main>Projects</SectionTitle>
  <GridContainer>
    {projects.map(({id, image, title, description, tags, video, source, visit}) =>(
      <BlogCard key={id}>
      
        <Video src={video} controls hidden={video=='0'}/> 
        <Img src={image}/>
        <TitleContent>
          <HeaderThree title>{title}</HeaderThree>
          <Hr/>
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <div>
          <TitleContent>
            <br />
            Stack
            </TitleContent>
          <TagList>
            {tags.map((tag, i) => (
              <Tag key={i}> {tag} </Tag>  
            ))}
          </TagList>
        </div>
       {/*** provide links if able to for projects

        <UtilityList>
         <ExternalLinks href={visit}>Code</ExternalLinks>
         <ExternalLinks herf={source}>Source</ExternalLinks>
        </UtilityList>
       */} 
      </BlogCard>
    ))}
  </GridContainer>
</Section>
);

export default Projects;