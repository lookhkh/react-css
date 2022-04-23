import styled from 'styled-components'


const SidePage = ()=>{
    return(
        <MainContainer>
            <SidePageWithButton>
                <button>X</button>
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
    width: 30% ;
    background-color: black ;

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