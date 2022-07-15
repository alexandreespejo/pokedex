
import React, { memo, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container, FavoriteButton, Img, ImageContainer, Text, Type, TypeContainer } from "./style";

interface CardProps {
  data: any;
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
  favorites: string[];
}

const AsyncImage = (props:any) => {
  const [loadedSrc, setLoadedSrc] = useState(null);
  
  useEffect(() => {
      setLoadedSrc(null);
      if (props.src) {
          const handleLoad = () => {
              setLoadedSrc(props.src);
          };
          const image = new Image();
          image.addEventListener('load', handleLoad);
          image.src = props.src;
          return () => {
              image.removeEventListener('load', handleLoad);
          };
      }
  }, [props.src]);
  
  if (loadedSrc === props.src) {
    return (
        <Img {...props} />
    );
  }

  return <FontAwesomeIcon icon={faSpinner} spin color="red"/>;
};

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
        <AsyncImage src={sprites.normal} />
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