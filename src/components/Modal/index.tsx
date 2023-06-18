import { useEffect } from 'react';
import { Overlay, Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  children?: React.ReactNode;
}


export function Modal({
  closeModal,
  isOpen,
  children
}: ModalProps) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [closeModal])

  return (
    <Overlay isOpen={isOpen}>
      <Container isOpen={isOpen}>
        {children}
      </Container>
    </Overlay>
  )
}