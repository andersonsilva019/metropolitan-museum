import { useContext } from 'react'
import { ArtList } from '../../components/ArtList'
import { DefaultLayout } from '../../components/Layout/Default'
import { DepartmentContext } from '../../context/Department'
import { SearchContext } from '../../context/Search'
import { useGetObjectByDepartment, useGetObjects, useSearchObject } from '../../services/MuseumApiService'

export function HomePage() {

  const { departmentId } = useContext(DepartmentContext)
  const { query } = useContext(SearchContext)

  const { data: artsListByDepartment, isFetching: loadingObjectByDepartment } = useGetObjectByDepartment(departmentId)
  const { data: artsList, isFetching: loadingObjects } = useGetObjects()
  const { data: artListBySearch, isFetching: loadingObjectBySearch } = useSearchObject(query)

  if (loadingObjects || loadingObjectByDepartment || loadingObjectBySearch) {
    return (
      <DefaultLayout>
        <h2>Loading...</h2>
      </DefaultLayout>
    )
  }

  return (
    <DefaultLayout>
      {!query && artsListByDepartment?.length !== 0 && <ArtList data={artsListByDepartment || []} />}
      {!query && !artsListByDepartment && <ArtList data={artsList || []} />}
      {query && (artListBySearch || []).length > 0 ? <ArtList data={artListBySearch || []} /> : !artsList?.length && !artsListByDepartment?.length && (
        <div style={{ width: '400px' }}>
          <h2>Ups!... no results found</h2>
        </div>
      )}
    </DefaultLayout>
  )
}