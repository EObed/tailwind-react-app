import React, {createContext, useState} from 'react'

export const ProductContext = createContext({})


export const MyProductContextProvider = ({children}) => {
    const [totalProductNumber, setTotalProductNumber] = useState()
    const [totalAlertNumber, setTotalAlertNumber] = useState()

  return (
<ProductContext.Provider value={{totalProductNumber, setTotalProductNumber, totalAlertNumber, setTotalAlertNumber}}>
    {children}
</ProductContext.Provider>
  )
}
