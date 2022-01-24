import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import WorkHard from 'sections/work-hard';
import UltimateFeatures from 'sections/ultimate-features';
import {individual,team,org,icon1,icon2,icon3} from 'assets/images/icons'

const logoName = '💣 app logo 🤖'
const productName = 'Product Name';
const tagline = 'In one line Why is your product important to users';

// const subtagline = 'In one to two sentences explain the value propositon';
const visionStatment = 'In a couple of sentence please describe the the product vision statement';

const feature = [
  {
    id: 1, icon: individual, title: 'Feature 1',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 2, icon: team, title: 'Feature 2',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 3, icon: org, title: 'Feature 3',
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  }];

const valuesTitle = 'Values Title';
const valueSubTitle = 'Subtitle this is'
const valuePropsitions = [{
  id: 1, icon: icon1, path: '#!', title: 'Reason 1', 
  description: `Primary Reason that customers find values`,
},
{
  id: 2, icon: icon2, path: '#!', title: 'Reason 2',
  description: `Additional Content for reason 2`,
},
{
  id: 3, icon: icon3, path: '#!', title: 'Reason 3',
  description: `Additional Content for reason 3`,
}];

const benefitted = [{id: 1, label: 'John Doe'},{id: 2, label: 'Jane Smith'},{id: 3, label: 'Jack Wilks'}]

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout logoName={logoName}>
        <Banner  productName={productName} tagline={tagline} />
        <Services visionStatment={visionStatment} feature={feature}/>
        <UltimateFeatures valuesTitle={valuesTitle} valueSubTitle={valueSubTitle} valuePropsitions={valuePropsitions} />
        <WorkHard benefitted={benefitted}/>
      </Layout>
    </ThemeProvider>
  );
}
