import { ArtCard } from '../ArtCard'
import { Container } from './styles'

type ArtListProps = {
  data: {
    objectID: number
    primaryImageSmall: string
    isPublicDomain: boolean
    artistDisplayName: string
    artistBeginDate: string
    artistEndDate: string
    title: string
    accessionNumber: string
    dimensions: string
  }[]
}

export function ArtList({ data }: ArtListProps) {
  return (
    <Container>
      {data?.map(art => (
        <ArtCard
          key={art.objectID}
          img={art.primaryImageSmall}
          name={art.title}
          artistName={art.artistDisplayName}
          artistBeginDate={art.artistBeginDate}
          artistEndDate={art.artistEndDate}
          dimensions={art.dimensions}
          isPublicDomain={art.isPublicDomain}
          accessionNumber={art.accessionNumber}
          id={art.objectID}
        />
      ))}
    </Container>
  )
}