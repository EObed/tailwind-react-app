import React, {createContext, useState} from 'react'

export const ProductContext = createContext({})


export const MyProductContextProvider = ({children}) => {
    const [totalProductNumber, setTotalProductNumber] = useState()
  return (
<ProductContext.Provider value={{totalProductNumber, setTotalProductNumber}}>
    {children}
</ProductContext.Provider>
  )
}
