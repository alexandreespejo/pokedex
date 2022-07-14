
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { getPokemons } from "../../service";
import { MainContainer, ContentContainer, PokemonListContainer, InputContainer, Input, SearchButton, FilterBar, OrderContainer, OrderButton } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

interface Pokemon {
  id:string;
  attack: number;
  defense: number;
  evolution?: {
    name?: string;
  };
  hp: number;
  name: string;
  national_number: string;
  sp_atk: number;
  sp_def: number;
  speed: number;
  sprites: { 
    animated: string;
    large: string;
    normal: string;
  };
  total: number;
  type: string[]
}

export default function Home () {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([]);
  const [pokemonsListCopy, setPokemonsListCopy] = useState<Pokemon[]>([]);
  const [favoritePokemons, setFavoritePokemons] = useState<string[]>([]);

  const [selectedType, setSelectedType] = useState('');
  const [filterInput, setFilterInput] = useState('');

  const [isFilterByFavorite, setIsFilterByFavorite] = useState(false);
  const [isFilterDescending, setIsFilterDescending] = useState(false);

  useEffect(() => {
    getPokemons().then(data=>{
      const list = data.results.map((item:Pokemon)=>(
        {...item, id:`${item?.national_number}-${item?.evolution?.name}`})
      );

      setPokemonsList(list);
      setPokemonsListCopy(list);
    })
  },[]);

  useEffect(() => {
    handleFilter();
  },[selectedType, isFilterByFavorite, isFilterDescending]);

  const sortMethod = (a:Pokemon, b:Pokemon) => {
    if(isFilterDescending) return Number(b.national_number) - Number(a.national_number)
    
    return Number(a.national_number) - Number(b.national_number)
  
  }

  const handleFilter = () => {
    
    setPokemonsList(pokemonsListCopy.filter(pokemon => {
      const isTypeSelected = pokemon.type.map(type => type.toLowerCase()).includes(selectedType.toLowerCase()) || selectedType === '';
      const isFavorite = favoritePokemons.includes(pokemon.id) || !isFilterByFavorite;
      const isSearchMatch = filterInput === '' || pokemon.name.toLowerCase().includes(filterInput.toLowerCase()) || pokemon.national_number.toLowerCase().includes(filterInput.toLowerCase());

      return isTypeSelected && isFavorite && isSearchMatch;
    }).sort(sortMethod))
  }

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <FilterBar>
          <InputContainer>
            <Input type='text' value={filterInput} onChange={event => setFilterInput(event.target.value)}/>
            <SearchButton onClick={()=>handleFilter()}>
              <FontAwesomeIcon icon={faSearch} />
            </SearchButton>
          </InputContainer>
          <OrderContainer>
            Ordenar por
            <OrderButton onClick={()=>setIsFilterDescending(state=>!state)}>
              {`Menor número ${isFilterDescending?'último':'primeiro'}`}
              <FontAwesomeIcon icon={isFilterDescending?faAngleUp:faAngleDown} />
            </OrderButton>
          </OrderContainer>
        </FilterBar>
        <SideBar selectedType={selectedType} setSelectedType={setSelectedType} toggleState={isFilterByFavorite} toggle={()=>setIsFilterByFavorite(state=>!state)}/>
        <PokemonListContainer>
          {
            pokemonsList.map((pokemon)=>{
              return <Card key={pokemon.id} data={pokemon} favorites={favoritePokemons} setFavorites={setFavoritePokemons}/>
            })
          }
        </PokemonListContainer>
      </ContentContainer>
    </MainContainer>
  )
}