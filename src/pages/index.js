import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
// import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
// import ExcitingFeatures from 'sections/exciting-features';
import WorkHard from 'sections/work-hard';
import UltimateFeatures from 'sections/ultimate-features';
// import HappyCustomer from 'sections/happy-customer';
// import Blog from 'sections/blog';
// import SubscribeUs from 'sections/subscribe-us';
import individual from 'assets/images/icons/individual.png';
import team from 'assets/images/icons/team.png';
import org from 'assets/images/icons/org.png';
import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';
import icon3 from 'assets/images/icons/3.png';

const logoName = 'Placeholder for the App Title'
const productName = 'Product Name';
const tagline = 'In one line Why is your product important to users';

const subtagline = 'In one to two sentences explain the value propositon';
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
  description: `Additional Content`,
},
{
  id: 3, icon: icon3, path: '#!', title: 'Reason 3',
  description: `Additional Content`,
}];

const benefitted = [{id: 1, label: 'Person 1'},{id: 2, label: 'Person 2'},{id: 3, label: 'Person 3'}]

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout logoName={logoName}>
        <Banner  productName={productName} tagline={tagline} subtagline={subtagline}/>
        <Services visionStatment={visionStatment} feature={feature}/>
        <WorkHard benefitted={benefitted}/>
        {/* <Blog /> */}
        <UltimateFeatures valuesTitle={valuesTitle} valueSubTitle={valueSubTitle} valuePropsitions={valuePropsitions} />
        {/* <ExcitingFeatures valuePropsitions={valuePropsitions}/> */}
        {/* <HappyCustomer /> */}
        {/* <SubscribeUs /> */}
      </Layout>
    </ThemeProvider>
  );
}
