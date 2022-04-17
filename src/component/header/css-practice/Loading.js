import useLoging from '../../../hooks/useLoging'
import Containers from './CommonContainer'
import styled, {keyframes}  from 'styled-components'

const Loading = ()=>{

    useLoging("Loading");

    return(
        <>
          <Containers style={{border:"none"}}>
              <Ball color="red" delay="0"/>
              <Ball color="yellow" delay="0.2s"/>
              <Ball color="blue" delay="0.4s"/>
          </Containers>
        </>
    )
}

export default Loading

const loading = keyframes`
    0%{
        opacity: 0;
        transform: scale(0.5);
    }
    50%{
        opacity: 100%;
        transform: scale(1);
    }
    100%{
        opacity: 0%;
        transform: scale(0.5);
    }
`

const Ball = styled.span`

    width: 10%;
    height: 10%;
    display: inline-block;
    background-color: ${props => props.color};
    border-radius: 50%;
    animation: 1.5s ${loading} linear infinite;
    animation-delay: ${props => props?.delay};

`


