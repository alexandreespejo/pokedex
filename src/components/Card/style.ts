import styled from "styled-components";
interface TextProps {
  number ?: boolean;
}

interface TypeProps {
  background : string;
  grass ?: boolean;
}

interface FavoriteButtonProps {
  isFavorite ?: boolean;
}

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  position: absolute;
  display:none;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({isFavorite,theme})=>isFavorite?theme.red:theme.white};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;

  min-height: 15rem;
  padding: 20px;

 &:hover ${FavoriteButton} {
  display:flex;
 }
`

export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 10px;
  padding: 0 5px;


`

export const Type = styled.div<TypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme, grass }) => grass ? theme.font : theme.light_gray};
  background-color: ${({theme, background}) => theme[background] ?? theme.white };

  font-size: 0.7rem;
  border-radius: 5px;

  padding: 5px;
  margin-right: 0.5rem;
`

export const Text = styled.label<TextProps>`
  font-weight: ${({number }) => number?'500':'bold'};
  font-size: ${({number }) => number?'0.7rem':'1rem'} ;

  color: ${({number, theme}) => number?theme.dark_gray:theme.font};
  
  margin-top: 10px;
  padding: 0 5px;
`

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50%;
  width: 80%;

  border-radius: 5px;
  background-color: ${({theme})=>theme.light_gray};
  color: ${({theme})=>theme.white};
`

export const Image = styled.img`
  height: 100%;
`