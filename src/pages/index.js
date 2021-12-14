import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Home = () => {
  return (
    <Layout>
        <title>Amann Singh </title>
        <meta name="title" content="Amann Singh "/>
        <meta name="description" content="Portfolio showcasing my work as software engineer student "/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://amannsingh.netlify.app/"/>
        <meta property="og:title" content="Amann Singh"/>
        <meta property="og:description" content="Portfolio showcasing my work as software engineer student"/>
        <meta property="og:image" content="../../public/images/img2.png"></meta>
      <Section grid> 
        <Hero />
         <BgAnimation /> 
       </Section> 
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
