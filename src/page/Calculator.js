import styled  from 'styled-components'
import { Container } from '../commonTag/Common'
import { useState, useCallback } from 'react';

const Calculator = ()=>{

    const [data,setData] = useState('');
    const [isNumber, setIsNumber] = useState(true);

    const clearIfNew = useCallback(()=>()=>{
        if(!isNumber){
            setData('');
            setIsNumber(true);
        }
    },[isNumber])

    const clickHandler = (e)=>{
        clearIfNew();
        let targetVal = e.target.innerHTML;
        setData(data=>data+targetVal)
    }

    const equlHandler = ()=>{
        const result = eval(data);
        setData(result);
        setIsNumber(false);
    }

    const keyboardHandler = (e)=>{
        e.stopPropagation();
        clearIfNew();
        console.log(e)

        if(e.key==="Backspace"){
            console.log(data)
            setData(data=>data.slice(0,data.length-1))
            return;
        } 

        if(e.key==="Enter"){
            equlHandler();
            return;
        }
        setData(data=>data+e.key);
    }


    const generateRow = (index)=>{
        const result = [];
        for(let i=0; i <3; i++){
            result[i] = 
                <BtnOfNumbers>
                    <Btn data-type="number" onClick={clickHandler}>{index+i}</Btn>
                </BtnOfNumbers>
            }
        return result;
    }

    const generateOper = (oper)=>{
        return(
            <>
            <BtnOfOperation>
                 <Btn data-type="oper" onClick={clickHandler}>{oper}</Btn>
            </BtnOfOperation>
            </>
        )
    }

    return(
        <Container>
            <CalcContainer>
                <InputContainer>
                    <InputOfCalc onKeyDown={e=>keyboardHandler(e)} value={data} readOnly={true}/>
                </InputContainer>
                <BtnContainer>
                    <BtnsOfNumbers>
                        <DivForRows>
                            {generateRow(1)}
                        </DivForRows>
                        <DivForRows>
                            {generateRow(4)}
                        </DivForRows>
                        <DivForRows>
                            {generateRow(7)}
                        </DivForRows>
                    </BtnsOfNumbers>
                    <BtnsOfOperations>
                        {generateOper("+")}
                        {generateOper("-")}
                        {generateOper("=")}
                    </BtnsOfOperations>
                </BtnContainer>
            </CalcContainer>
        </Container>
    )
}

export default Calculator;

const CommonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

const CalcContainer = styled(CommonContainer)`
    background-color: aqua;
    flex-direction: column;
    width: 80%;
    height : 100%;
    border : 1px solid black;

`

const InputContainer = styled(CommonContainer)`

    width : 100%;
    height : 20%;
    background-color : red;
`

const InputOfCalc = styled.input`

    padding: 10px;
    box-sizing: border-box;
    width : 70%;
    border : none;

    &:focus{
        outline : none;
    }

`

const BtnContainer = styled(CommonContainer)`
    height : 80%;
    width: 100%;
    background-color : yellow;
`

const BtnsOfNumbers = styled(CommonContainer)`

    width: 70%;
    height : 100%;
    flex-direction: column;
    justify-content: flex-start;

`

const DivForRows = styled(CommonContainer)`
    height : 33.333%;
    width: 100%;
    background-color: black;
    flex-direction : row;
`

const Btn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size : 1.5rem;
    font-weight: 800;
`

const BtnOfNumbers = styled(CommonContainer)`
    box-sizing: border-box;
    flex:1;
    height: 100%;
    background-color : gray; 
`

const BtnsOfOperations = styled(CommonContainer)`

    width: 30%;
    height : 100%;
    flex-direction: column;
`

const BtnOfOperation = styled(CommonContainer)`
    box-sizing: border-box;
    width:100%;
    height: 100%;
    background-color : white;
`