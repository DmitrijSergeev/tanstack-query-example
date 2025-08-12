import { createFileRoute } from '@tanstack/react-router'
import {PlaylistsPages} from "../../pages/playlists-page";

export const Route = createFileRoute('/')({
    component: PlaylistsPages,
})

