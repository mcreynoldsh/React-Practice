import React from 'react'
import Character from "./Character";
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CharacterList() {
  const [characterList, setCharList] = useState(null)

  const getCharList = async () =>{
      const response = await axios.get('https://rickandmortyapi.com/api/character/1,2,3')
      setCharList(response.data)
  }

  useEffect(()=>{
      getCharList()
  })
  return (
    <div>
    { characterList && characterList.map((character)=>(<Character currCharacter={character}/>))}
    </div>
  )
}
