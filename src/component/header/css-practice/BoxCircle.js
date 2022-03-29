import Containers from "./CommonContainer";
import styled, {keyframes}  from 'styled-components'
import useLoging from '../../../hooks/useLoging'

const animation = (style)=>keyframes`
    0%{
        background-color: ${style.first.background};
        left: 0%;
        top:0%;
    }
    25%{
        background-color: ${style.third.background};
        left: ${style.calc};
        top: 0%;
    }
    50%{
        background-color: ${style.third.background};
        top: ${style.calc};
        left: ${style.calc};

    }
    75%{
        background-color: ${style.forth.background};
        left: 0%;
        top:${style.calc};
    } 
    100%{
        background-color: ${style.fifth.background};
        top:0%;
        left:0%;
    }
`

const Box = styled.span`

    width: 30px;
    height: 30px;
    background-color: red;
    position: absolute;
    top: 0;
    left: 0;
    animation:  1.5s ${({style})=>animation(style)} infinite  ${props=>props.direction?props.direction:""};
`



const BoxCircle = ()=>{
    useLoging("BoxCircle");

    const firstBox = {
        first : {
            background : "red"
        },
        second : {
            background : "black"
        },
        third : {
            background : "yellow"
        },
        forth : {
            background : "green"
        },
        fifth : {
            background : "red"
        },
        calc : `100%`
    }

    const secondBox = {
        first : {
            background : "yellow"
        },
        second : {
            background : "pink"
        },
        third : {
            background : "red"
        },
        forth : {
            background : "green"
        },
        fifth : {
            background : "red"
        }
        ,calc : "100%"
    }

    return(
        <Containers style={{width:"100px",height:"100px"}}>
            <Box style={firstBox} />
            <Box style={secondBox} direction={"reverse"}/>
        </Containers>
        )
}

export default BoxCircle;