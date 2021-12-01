import React from 'react';
import MetaTags from 'react-meta-tags';

export const Meta =() => {
    return(
        <div class="wrapper">
          <MetaTags>
            <title>Amann Singh</title>
            <meta id="meta-description" name="description" content="Third year software engineering student looking for co-op opportunites to
            test my strengths in the field while developing new skills and knowledge." />
            <meta id="og-title" property="og:title" content="Amann Singh Portfolio" />
            <meta id="og-image" property="og:image" content="/images/img2.png" />
            <meta id="og-type" property="og:type" content="Website" />
          </MetaTags>
          <div class="content"> Amann Singh </div>
        </div>
      )
  }
