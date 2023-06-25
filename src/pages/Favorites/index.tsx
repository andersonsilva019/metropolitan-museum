import { DefaultLayout } from "../../components/Layout/Default";
// import { useFavorites } from "../../hooks/useFavorites";
import { ArtList } from "../../components/ArtList";
import { Link } from "react-router-dom";

import { Content } from './styles'
import { useFavorites } from "../../hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites } = useFavorites()

  const data = favorites.map(favorite => ({
    objectID: favorite.id,
    primaryImageSmall: favorite.img,
    title: favorite.name,
    artistDisplayName: favorite.artistName,
    artistBeginDate: favorite.artistBeginDate,
    artistEndDate: favorite.artistEndDate,
    dimensions: favorite.dimensions,
    isPublicDomain: favorite.isPublicDomain,
    accessionNumber: favorite.accessionNumber
  }))

  return (
    <DefaultLayout>
      <Content>
        <Link to="/">Voltar</Link>
        {favorites && favorites?.length > 0 ? (<ArtList data={data || []} />) : (
          <div style={{ width: '400px' }}>
            <h2>There is no art to show</h2>
          </div>
        )}
      </Content>
    </DefaultLayout>
  )
}