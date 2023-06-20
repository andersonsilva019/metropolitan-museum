import { useState } from 'react'
import { CloseIcon, FavoriteIcon, UnFavoriteIcon } from '../../assets/icons'
import { Modal } from '../Modal'
import defaultImage from '../../assets/images/default-image.svg'
import {
  Container,
  WrapperImage,
  HeaderCard,
  AuthorName,
  Badge,
  MoreDetailsButton,
  HeaderModal,
  ContentModal,
  Group
} from './styles'
import { useFavorites } from '../../hooks/useFavorites'

export type ArtCardProps = {
  id: number;
  name: string;
  img: string;
  artistName: string;
  artistBeginDate: string
  artistEndDate: string
  dimensions: string;
  isPublicDomain: boolean;
  accessionNumber: string;
}

export function ArtCard({
  id,
  name,
  img,
  artistBeginDate,
  artistEndDate,
  artistName,
  isPublicDomain,
  dimensions,
  accessionNumber,
}: ArtCardProps) {

  const { addFavorite, removeFavorite, isInFavorites } = useFavorites()

  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Container>
        {isPublicDomain && <Badge>Public Domain</Badge>}
        <WrapperImage>
          <img src={img || defaultImage} alt={name} />
        </WrapperImage>
        <HeaderCard>
          <strong>{name}</strong>
          <button onClick={!isInFavorites(id) ? () => addFavorite({
            id,
            name,
            img,
            artistBeginDate,
            artistEndDate,
            artistName,
            isPublicDomain,
            dimensions,
            accessionNumber
          }) : () => removeFavorite(id)}>
            {isInFavorites(id) ? (
              <FavoriteIcon color='#0D75FF' size={36} />
            ): (
              <UnFavoriteIcon color='#0D75FF' size={36} />
            )}
          </button>
        </HeaderCard>
        <AuthorName>
          {artistName || 'Unknown'} | {artistBeginDate || '0000'} - {artistEndDate || '0000'} 
        </AuthorName>
        <MoreDetailsButton onClick={openModal}>
          More details
        </MoreDetailsButton>
      </Container>
      <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
        <HeaderModal>
          <h2>{name}</h2>
          <button onClick={closeModal}>
            <CloseIcon color='#58667E' size={18} />
          </button>
        </HeaderModal>
        <ContentModal>
          <img src={img || defaultImage} alt={name} />
          <Group>
            <span>Artist: </span>
            <strong>{artistName || 'Unknown'} ({artistBeginDate || '0000'} - {artistEndDate || '0000'}) </strong>
          </Group>
          <Group>
            <span>Dimensions: </span>
            <strong>{dimensions}</strong>
          </Group>
          <Group>
            <span>Identifier: </span>
            <strong>{accessionNumber}</strong>
          </Group>
        </ContentModal>
      </Modal>
    </>
  )
}