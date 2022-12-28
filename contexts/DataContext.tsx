import React, { useState, createContext, ReactNode } from "react";

export const DataContext = createContext<any>({});

function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState();
  const [isFething, setIsFething] = useState(false);


  function generateImage(prompt:string) {
    setData(undefined)
    setIsFething(true);
    fetch(`/api/generateimage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    }).then((response) => {
      response.json().then((data) => {
        setData(data);
        setIsFething(false);
      });
    });
  }

  return (
    <DataContext.Provider
      value={{
        data,
        generateImage,
        isFething,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
