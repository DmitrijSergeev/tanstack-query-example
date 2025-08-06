import './App.css'
import {client} from "./shared/api/client.ts";
import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";

function App() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setInterval(()=>{
            setIsVisible(prev => !prev);
        }, 5000)
    }, []);

    return (
        <>
            <h2>Hello it-incubator!!!</h2>
            {isVisible && <Playlists/>}
        </>
    )
}

const Playlists = () => {
    const query = useQuery({
        staleTime: Infinity,
        queryKey: ['playlists'],
        queryFn: () => client.GET('/playlists')
    })
    return <div>
        <ul>
            {query.data?.data?.data.map(playlist => (
                <li>
                    {playlist.attributes.title}
                </li>
            ))}
        </ul>
    </div>
}

export default App
