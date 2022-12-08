import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useEffect } from 'react'
export const About = () => {
    const a = useContext(noteContext);
    useEffect(() => {
      a.update();
      // eslint-disable-next-line
    }, [])
    
  return (
    <div>
        This is About {a.state.name} her class is {a.state.class}
    </div>
  )
}
