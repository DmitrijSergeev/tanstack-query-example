import type {ReactNode} from "react";
import s from './header.module.css'
import {Link} from "@tanstack/react-router";

type Props = {
    renderAccountBar: () => ReactNode
};
export const Header = ({renderAccountBar}: Props) => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.linksBlock}>
                    <Link to={'/'}>
                        PlayLists
                    </Link>
                    <Link to={'/my-playlists'}>
                        My PlayLists
                    </Link>
                    <Link to={'/oauth/callback'}>
                        temp tanstack query page
                    </Link>
                </div>
                <div>{renderAccountBar()}</div>
            </div>
        </header>
    );
};

