import useLoging from '../hooks/useLoging'
import styled, { keyframes}  from 'styled-components'
import { Container } from '../commonTag/Common'
import { useState } from 'react'

const SkilCheckForm = ()=>{
    useLoging("SkilCheckForm");
    
    const [data, setData] = useState([
        {name : "HTML", gauge : 90},
        {name : "CSS", gauge : 90},
        {name : "JS", gauge : 50},
        {name : "REACT", gauge : 20},
        {name : "VUE.js", gauge : 90},
        {name : "Spring", gauge : 100},
        {name : "RDBMS", gauge : 90},

    ])

    const getColors = (index)=>{
       const colors =  ["black", "yellow","red","blue","green"];
       return colors[index%colors.length];
    }


    const inputs = data.map((item,index)=>{
        return(
       <InputContainer>
            <PContainer>
                <span>{item.name}</span>
                <span>{item.gauge}%</span>
            </PContainer>
            <InputWithBarContainer>
                <InputWithBar gauge={item.gauge} backgroundColor={getColors(index)}/>
            </InputWithBarContainer>
       </InputContainer>   
        )  
    })

    return(
        <Container>
            <SkilFormContainer>
                <HeaderOfForm>
                    SOFTWARE SKILLS
                </HeaderOfForm>
                <InputFormsBody>
                    {inputs}
                </InputFormsBody>
            </SkilFormContainer>
        </Container>
    )
}

export default SkilCheckForm;

const SkilFormContainer = styled.div`

    width: 500px;
    height: 90%;
    background-color: rgba(8, 7, 7, 0.56);
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const HeaderOfForm = styled.h1`
    text-align: center;
    line-height: 100%;
    color: white;
    height: 10%;
    border-bottom: 2px solid white;
`

const InputFormsBody = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
`

const InputContainer = styled.div`
    width: 100%;
    flex:1;
`

const PContainer = styled.p`
    position: relative;
    height: 40%;
    margin: 0;
    & span{
        color: white;
        font-weight: 900;
        position: absolute;
        top: 100%;
        transform: translateY(-100%);
    }

    & span:nth-child(1){
        left: 3%;
    }
        
    & span:nth-child(2){
        right: 3%;
    }
`

const InputWithBarContainer = styled.div`
    height: 60%;    
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    
`
const gaugeUp = gauge => keyframes`
  from {
    width: 0;
    }
  to {
    width : ${gauge}%
  }
`

const InputWithBar = styled.span`
        width: 100%;
        height: 50%;
        position: relative;
        display: block;
        background-color: white;

        &::before{
            content:'';
            height: 100%;
            left: 0;
            position: absolute;
            animation: ${prpos=>gaugeUp(prpos.gauge)} 1s linear;
            background-color: ${props=>props.backgroundColor};
            animation-fill-mode: forwards;  
        }

`

