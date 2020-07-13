import React, { useState, useEffect } from 'react'

import ExampleComponent from 'sample-library'
import 'sample-library/dist/index.css'

const App = () => {
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000)
  }, [])
  return <ExampleComponent bgcolor={'#6a1b9a'} completed={completed} />
}

export default App
