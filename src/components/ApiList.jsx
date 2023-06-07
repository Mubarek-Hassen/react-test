// import { useState, useEffect } from "react";
// import axios from "axios";
import useFetch from "../hooks/useFetch";

function ApiList() {
  const { data, error, loading } = useFetch("https://rickandmortyapi.com/api/characte")
  console.log(data)
  if (loading) return <h1>Loading...</h1>
  if(error) return <h1>Error</h1>
  if(data) return (
    <>
    {data.results.map((character)=> <h3 key={character.id}>{character.id} - {character.name}</h3> )}
    </>
  )
}

export default ApiList















  // const fetchData = async ()=>{
  //   try {
  //     const res = await axios.get("https://rickandmortyapi.com/api/character")
  //     console.log(res.data.results)
  //     setCharacters(res.data.results)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(()=>{
  //   fetchData()
  // }, [])