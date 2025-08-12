import {Outlet} from "@tanstack/react-router";
import {Header} from "../../shared/ui/header/header";
import s from './root-layout.module.css'

export const RootLayout = () => {
    return (
            <>
                <Header renderAccountBar={()=> <div>Account</div>}/>
                <div className={s.container}>
                    <Outlet />
                </div>
            </>
        )
};
