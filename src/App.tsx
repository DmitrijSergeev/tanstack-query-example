import {useEffect} from 'react'
import './App.css'

function App() {
    useEffect( () => {

        const response = fetch('https://musicfun.it-incubator.app/api/1.0/playlists', {
            headers: {
                'api-key': 'b9b93a14-5751-4e3b-a9c4-4e1503c25972'
            }
        }).then(response => response.json())
        console.log(response)
    }, []);

  return (
    <>
        Hello it-incubator!!!
    </>
  )
}

export default App
