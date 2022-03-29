import React from "react";
import BroserContainer from "./header-component/BroserContainer";
import MobileBrowserContainer from "./header-component/MobileBrowserContainer";
import  useWindowSize  from '../../hooks/useWindowSIze'

const Header = ()=>{
    const {width} = useWindowSize(); //동적으로 브라우저 viewPort 측정하여 로직 추가
    const isWebBrowser = width>1000?true:false;
    const HeaderComponent = isWebBrowser?BroserContainer:MobileBrowserContainer;

    return(
        <>
            <header style={{height:50}}>
                <HeaderComponent/>
            </header>
        
        </>
    )
}

export default Header;