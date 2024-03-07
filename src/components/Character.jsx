import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Character({currCharacter}) {

  return (
    <div>
      {currCharacter && currCharacter.name}
    </div>
  )
}
