import React from 'react';
import MetaTags from 'react-meta-tags';

class Component1 extends React.Component {
  render() {
    return (
        <div class="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta id="meta-description" name="description" content="Third year software engineering student looking for co-op opportunites to
            test my strengths in the field while developing new skills and knowledge." />
            <meta id="og-title" property="og:title" content="Amann Singh Portfolio" />
            <meta id="og-image" property="og:image" content="/images/img2.png" />
          </MetaTags>
          <div class="content"> Amann Singh </div>
        </div>
      )
  }
}