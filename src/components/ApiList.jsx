import { useState, useEffect } from "react"

function ApiList() {
  const [characters, setCharacters] = useState([])
  const fetchData = async ()=>{
    try {
      const data = await fetch("https://rickandmortyapi.com/api/character")
      const res = await data.json()
      console.log(res.results)
      setCharacters(res.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchData()
  }, [])
  return (
    <>
    {characters.map((character)=> 
      <div key={character.id}>
        <h3>{character.name}</h3>
      </div>
    )}
    </>
  )
}

export default ApiList