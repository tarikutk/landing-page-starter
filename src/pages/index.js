import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import WorkHard from 'sections/work-hard';
import UltimateFeatures from 'sections/ultimate-features';
import { individual, team, org, icon1, icon2, icon3 } from 'assets/images/icons'
import banner from 'assets/images/banner.png';
import workHard from 'assets/images/work-hard.png';

console.log('image: ', banner);
const image1 = banner;
const image2 = workHard;
const productName = 'Music Gig';

const tagline = "For music bands who would like to find a gig, Music Gig App  is a very convenient tool that connects independent bands with club/bars and other venues";

const visionStatement = 'our Vision is to connect bands with clubs and bars';

const features = [
  {
    id: 1, icon: individual, title: 'Book a band',
    description: `Invite your favorite band to your special event`,
  },
  {
    id: 2, icon: team, title: 'Find a Gig',
    description: `Find a Gig very quick`,
  },
  {
    id: 3, icon: org, title: 'Find events',
    description: `find events with your favorite clubs and bars.`,
  }];

const valuePropositions = [{
  id: 1, icon: icon1, path: '#!', title: '',
  description: `we offer direct booking without agents with more variety of venue near you,`,
},
{
  id: 2, icon: icon2, path: '#!', title: '',
  description: `you will find your band based on their genre, price and location`,
},
{
  id: 3, icon: icon3, path: '#!', title: '',
  description: `we offer alternative bands for venues in case of artist's cancellation.`,
}];
const benefitted = [{ id: 1, label: 'Regent Theater' }, { id: 2, label: 'PianoFight' }, { id: 3, label: 'Revolution Cafe' }]



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout logoName={productName}>
        <Banner productName={productName} tagline={tagline} img={image1} />
        <Services visionStatement={visionStatement} feature={features} />
        <UltimateFeatures valuePropositions={valuePropositions} />
        <WorkHard benefitted={benefitted} img={image2} />
      </Layout>
    </ThemeProvider>
  );
}
