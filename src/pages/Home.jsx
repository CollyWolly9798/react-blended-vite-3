import Container from '../components/Container/Container';
import CountryList from '../components/CountryList/CountryList';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';

const Home = () => {
  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        <CountryList countries={[]} />
      </Container>
    </Section>
  );
};
export default Home;
