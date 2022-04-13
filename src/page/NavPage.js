import useLoging from '../hooks/useLoging'
import styled  from 'styled-components'
import { Container } from '../commonTag/Common'


const AtagCont = ({color, name})=>{
    return(
        <>
            <AtagContainer color={color}>
                <NavItem data-name={name}>{name}</NavItem>
            </AtagContainer>
        </>
    )
}
const NavPage = ()=>{

    useLoging("NavPage");

    return(
        <Container color="green">
            <MainBar>
                <AtagCont color="red" name="메일"/>
                <AtagCont color="green" name="카페"/>
                <AtagCont color="blue" name="지식IN"/>
                <AtagCont color="yellow" name="블로그"/>
            </MainBar>
        </Container>
    )
}


const MainBar = styled.nav`
    width: 90%;
    padding: 1.2rem;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.5rem;

`

const AtagContainer = styled.div`

    flex: 1;
    height: 60px;
    padding: 10px 0;
    text-align: center;
    overflow: hidden;
    position: relative;
    
    &:hover a{
        color: ${props=>props.color};
        top: calc(0% - 1rem);
    }
  
`

const NavItem = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;


    font-weight: 800;
    font-size: 1.5rem;
    transition: 0.3s linear;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);


    &::after{
        content:attr(data-name);
        position: absolute;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        top: calc(100%);
    }
`

export default NavPage;