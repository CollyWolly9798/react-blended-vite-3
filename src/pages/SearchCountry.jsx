import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import { fetchByRegion } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const SearchCountry = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const region = queryParams.get('region');
  useEffect(() => {
    if (!region) return;
    async function asyncWrapper() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    asyncWrapper();
  }, [region]);
  const getRegion = region => {
    // queryParams.get('region', region);
    // setQueryParams(queryParams);

    setQueryParams({ region });
  };
  return (
    <Section>
      <Container>
        {isLoading && <b>Loading...</b>}
        {error && <b>Something wrong...</b>}
        <SearchForm onSubmit={getRegion} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
