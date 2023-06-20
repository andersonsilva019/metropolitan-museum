import { createContext, useState } from 'react'

type DepartmentContextType = {
  departmentId: number;
  departmentName: string;
  saveDepartmentName: (department: string) => void;
  saveDepartmentId: (departmentId: number) => void;
}

type DepartmentProviderProps = {
  children: React.ReactNode;
}

export const DepartmentContext = createContext<DepartmentContextType>({
  departmentName: '',
  departmentId: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveDepartmentName: () => { },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveDepartmentId: () => { }
})

export function DepartmentProvider({ children }: DepartmentProviderProps) {

  const [departmentId, setDepartmentId] = useState(0)
  const [departmentName, setDepartmentName] = useState('')

  function saveDepartmentName(department: string) {
    setDepartmentName(department)
  }

  function saveDepartmentId(departmentId: number) {
    setDepartmentId(departmentId)
  }

  return (
    <DepartmentContext.Provider value={{
      departmentName,
      departmentId,
      saveDepartmentName,
      saveDepartmentId
    }}>
      {children}
    </DepartmentContext.Provider>
  )
}