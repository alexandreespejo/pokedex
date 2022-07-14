import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background-color: ${({theme})=>theme.white};
`

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  height: calc(100% - 6.5rem);
  width: 70%;
`

export const PokemonListContainer = styled.div`
  grid-area: 2 / 2 / 7 / 7;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 1rem;

  overflow-y: scroll;

  flex: 1;

  margin: 20px 0;
`

export const FilterBar = styled.div`
  grid-area: 1 / 1 / 2 / 6;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.5rem;
  width: 100%;
`

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.dark_gray };
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 1.25rem;
  width:40%;

  background-color: ${({ theme }) => theme.light_gray };

  border-radius: 50px;
  padding: 5px;
`

export const Input = styled.input.attrs(()=>(
  {
    placeholder:'Pesquisar por nome ou número'
  }
))`
  color: ${({ theme }) =>theme.dark_gray};
  background-color: ${({ theme }) => theme.light_gray };

  border: none;
  height: 100%;
  padding-left: 10px;
  width: calc(100% - 2rem);

`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content:center;
  cursor: pointer;

  color: ${({ theme }) =>theme.red};

  border: none;
  height: 100%;
  width: 2rem;

  :active{
    opacity:0.5;
  }
`

export const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content:center;
  cursor: pointer;

  border: 1px solid ${({ theme }) =>theme.red};
  color: ${({ theme }) =>theme.red};
  background-color: transparent;

  padding: 5px 20px;
  border-radius: 10px;
  margin-left:10px;
  svg {
    margin-left:10px;
  }
  :active{
    opacity:0.5;
  }
`