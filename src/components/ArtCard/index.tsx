import { useState } from 'react'
import { CloseIcon, FavoriteIcon } from '../../assets/icons'
import { Modal } from '../Modal'
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

export function ArtCard() {

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
        <Badge>Domínio público</Badge>
        <WrapperImage>
          <img src="https://picsum.photos/200/300" alt="Imagem de teste" />
        </WrapperImage>
        <HeaderCard>
          <strong>Angels and demons</strong>
          <button>
            <FavoriteIcon color='#0D75FF' size={36} />
          </button>
        </HeaderCard>
        <AuthorName>Leonardo da Vinci - 1978</AuthorName>
        <MoreDetailsButton onClick={openModal}>
          More details
        </MoreDetailsButton>
      </Container>
      <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
        <HeaderModal>
          <h2>Angels and demons</h2>
          <button onClick={closeModal}>
            <CloseIcon color='#58667E' size={18}/>
          </button>
        </HeaderModal>
        <ContentModal>
          <img src="https://picsum.photos/200/300" alt="Imagem de teste" />
          <Group>
            <span>Autor: </span>
            <strong>Leonardo (1990 - 9212)</strong>
          </Group>
          <Group>
            <span>Dimensões: </span>
            <strong>200x400</strong>
          </Group>
          <Group>
            <span>Identificação: </span>
            <strong>234234.--42342</strong>
          </Group>
        </ContentModal>
      </Modal>
    </>
  )
}