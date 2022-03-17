import { useState } from 'react';

import type { LocationProps } from '../../@types/Location';
import Map from '../../components/Map';
import { fetchData } from './utils';

import * as S from './styles';

function Home() {
  const [searchedLocation, setSearchedLocation] =
    useState<LocationProps | null>(null);

  function handleGetplace(place: any) {
    fetchData(place, setSearchedLocation);
  }

  return (
    <S.Main>
      <S.Title>Cadastrar Operação</S.Title>
      <S.MapContainer>
        <S.Input
          onBlur={place => {
            handleGetplace(place.target.value);
          }}
        />
        <Map place={searchedLocation} />
      </S.MapContainer>
    </S.Main>
  );
}

export default Home;
