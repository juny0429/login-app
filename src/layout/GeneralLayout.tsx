import React from "react";
import Header from "../components/Header";

interface GeneralLayoutProps {
    children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {

    return (
        <div>
            <Header></Header>
            { children }
        </div>
    );
}

export default GeneralLayout;