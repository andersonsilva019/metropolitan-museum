import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useDepartments } from '../../services/MuseumApiService'
import { Container, ListWrapper, Item, Identifier } from './styles'
import { DepartmentContext } from '../../context/Department'
import { SearchContext } from '../../context/Search'

export function Sidebar() {

  const navigate = useNavigate()
  const { data } = useDepartments()
  const { 
    saveDepartmentId,
    departmentId
  } = useContext(DepartmentContext)
  const { clearQuery } = useContext(SearchContext)

  function handleSelectDepartment(departmentId: number) {
    clearQuery()
    saveDepartmentId(departmentId)

    if(window.location.pathname === '/favorites') {
      navigate('/')
    }
  }

  return (
    <Container>
      <h2>Departments</h2>
      <ListWrapper>
        {data?.departments.map(department => (
          <Item 
            key={department.departmentId}
            onClick={() => handleSelectDepartment(department.departmentId)}
            isSelected={department.departmentId === departmentId}
          >
            <Identifier>
              {String(department.displayName).substring(0, 2)}
            </Identifier>
            {department.displayName}
          </Item>
        ))}
      </ListWrapper>
    </Container>
  )
}