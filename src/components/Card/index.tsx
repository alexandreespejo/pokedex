
import React, { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Container, FavoriteButton, Image, ImageContainer, Text, Type, TypeContainer } from "./style";

interface CardProps {
  data: any;
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
  favorites: string[];
}

const Card = ({data, setFavorites, favorites}: CardProps) => {
  const {id, name, type, national_number, sprites} = data;

  const handleFavorite = () => {
    if(favorites.includes(id)) return setFavorites(state=>state.filter(fav=>fav!==id));
    setFavorites(state=>[...state, id]);
  }

  return (
    <Container>
     
      <ImageContainer>
        <FavoriteButton onClick={()=>handleFavorite()} isFavorite={favorites.includes(id)}>
          <FontAwesomeIcon border={true} icon={faHeart} />
        </FavoriteButton>
        <Image src={sprites.normal} /> 
      </ImageContainer>
      <Text number>N°{national_number}</Text>
      <Text>{name}</Text>
      <TypeContainer>
        {
          type.map((label:string)=>(
            <Type key={label} background={label.toLowerCase()} grass={label==='Grass'}>
              {label}
            </Type>
          ))
        }
      </TypeContainer>
    </Container>
  )
}

export default memo(Card)