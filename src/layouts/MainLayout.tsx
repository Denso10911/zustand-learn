import React from 'react';
import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";

interface Props {

}

const MainLayout: React.FC<Props> = () => {
    return (
        <div className="flex flex-col min-w-screen min-h-screen bg-cyan-800 text-white">
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;