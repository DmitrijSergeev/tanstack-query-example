import {client} from "../shared/api/client.ts";
import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";

export function PlaylistsPage() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setInterval(()=>{
            setIsVisible(prev => !prev);
        }, 10000)
    }, []);

    return (
        <>
            <h2>Hello it-incubator!!!</h2>
            {isVisible && <Playlists/>}
        </>
    )
}

export const Playlists = () => {
    const query = useQuery({
        //gcTime: 10 * 1000,
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

