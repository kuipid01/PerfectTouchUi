import { createContext, useEffect, useState } from "react";

export const AppointmentFormContext=createContext();


const AppointmentFormContextProvider = ({children}) => {
  const [appoitmentFormOpen, setAppoitmentFormOpen] = useState(false)
  useEffect(() => {
   setAppoitmentFormOpen(false)
  }, [])

return(
<AppointmentFormContext.Provider  value={{appoitmentFormOpen, setAppoitmentFormOpen}} >
{children}
</AppointmentFormContext.Provider>
)
  
  
}

export default AppointmentFormContextProvider