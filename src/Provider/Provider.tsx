import React, { useContext, useEffect, useState } from 'react';
import ProfileContext from './Context';

interface Provider {
    children: React.ReactNode;
}

const Provider =  ({ children }: Provider) => {
  const [data, setData] = useState<any>({
    globalState: {
      status: 'success',
      message: 'The connection with your wallet has been success'
    }
  });

  useEffect(() => {
  }, [])

  return (
    <ProfileContext.Provider value={ { data, setData }}>
      { children }
    </ProfileContext.Provider>
    
  )
}

export default Provider;