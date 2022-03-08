import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hello There, <br/>
       I Am Prateek Puri
     </SectionTitle>
     <SectionText>
       lorem20    lorem 20 lorem 20 lorem 20
       lorem20    lorem 20 lorem 20 lorem 20
       lorem20    lorem 20 lorem 20 lorem 20
      </SectionText>
      <Button onClick={()=>window.location='https://google.com'}>Download CV</Button>
   </LeftSection>
 </Section>
);

export default Hero;