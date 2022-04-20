import React, { useCallback, useState  } from 'react';
import { Container } from '../commonTag/Common';
import styled  from 'styled-components'


const Hanburger = ()=>{
    
    const [clicked, setClicked] = useState(false);

    const onChangeHandler = ()=>{
        setClicked(state=>!state)
        console.log(clicked)
    }

    const createSpan = (num)=>{
        const arr = [];
        
        for(let i=0; i<num; i++){
            arr.push(<span key={i} className={clicked?"on":""} />)
        }

        return arr;

    }

    return(
       <Container>
           <HamburgerContainer>
                <input onChange={onChangeHandler} type="checkbox" id="triger"/>
                <label for="triger">
                    {createSpan(3)}
                </label>
           </HamburgerContainer>
       </Container>
    )

}

const HamburgerContainer = styled.div`

    width: 50%;
    height : 50%;
    background-color: pink ;

    & input[type=checkbox]{
        display:none ;
    }

    & input + label[for=triger]{
        display: block ;
        cursor: pointer;
        height:100% ;
       
        display:flex ;
        justify-content:center ;
        align-items:center ;
        flex-direction:column ;
    }

    & span{
        display: block ;
        height:5% ;
        background-color: gray ;
        width: 100%;
        margin: 5px 0 5px 0 ;
        transition:0.3s ;
    }

    & span.on{
        background-color:black ;
    }

    & span:nth-child(1).on{
        transform:translateY(calc(150%)) rotate(30deg);
    }
    
    & span:nth-child(2).on{
        opacity: 0;
    }
    
    & span:nth-child(3).on{
        transform:translateY(-150%) rotate(-30deg);

    }
`


export default Hanburger;




