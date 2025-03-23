import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useEffect } from 'react';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const { countryId } = useParams();
  useEffect(() => {
    console.log(countryId);
  }, [countryId]);
  return (
    <Section>
      <Container>
        <Heading title="Country" bottom />
        <GoBackBtn />
      </Container>
    </Section>
  );
};

export default Country;
