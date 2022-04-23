import styled from 'styled-components';
import { useState, useCallback } from 'react'; 

const SidePage = ()=>{

    const [clicekd,setClicekd] = useState(false);
    const [msg , setMsg] = useState("x")

    const clickHandler = useCallback(()=>{
        setClicekd(!clicekd)
        setMsg(!clicekd?"->":"x")
    },[clicekd]);

    return(
        <MainContainer>
            <SidePageWithButton className={clicekd?"clicked":""}>
                <button onClick={clickHandler}>{msg}</button>
            </SidePageWithButton>
        </MainContainer>
        )
}

export default SidePage;

const MainContainer = styled.div`
    width: 100% ;
    height : 100%;
    border: 1px solid black ;
    position: relative;
`

const SidePageWithButton = styled.div`
    position: absolute ;
    right:0 ;
    height:100% ;
    width: 0% ;
    background-color: black ;
    transition:0.5s ;
    &.clicked{
        width:30% ;
    }
    & button{
        box-sizing : border-box;
        display:flex ;
        justify-content:center ;
        align-items:center ; 
        padding: 10px;
        position: absolute ;
        left:-24px;
        width:20px;
        height: 20px ;
        top:50% ;
        transform:translateY(-50%) ;
    }
`