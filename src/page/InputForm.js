import useLoging from '../hooks/useLoging'
import styled  from 'styled-components'
import { Container } from '../commonTag/Common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVoicemail, faMobilePhone, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"

const InputWithIcon = ({icon,placeHolderMsg="Enter",inputHanlder,name})=>{
        
    return(
        <InputContainer>
            <Input name={name} onChange={inputHanlder} placeholder={placeHolderMsg}/>
            <IconContainer >
                <FontAwesomeIcon icon={icon} />
            </IconContainer>
        </InputContainer>
    )
}

const InputForm = ()=>{

    useLoging("InputForm");

    const [user, setUser] = useState({
        name : "",
        phone : "",
        msg : ""
    })

    const clickHandler = ()=>{
        console.log(user);
    }

    const inputHandler = (e)=>{
        const key = e.target.name;
        const val = e.target.value;
        console.log(e.target.name)
        setUser({...user, [key]:val})
    }

    return (
        <Container color="white" style={{flexDirection:"column"}}>
            <InputWithIcon name="name" inputHanlder={inputHandler} icon={faVoicemail} placeHolderMsg="Name"/>
            <InputWithIcon name="phone" inputHanlder={inputHandler} icon={faMobilePhone} placeHolderMsg="Phone"/>
            <InputWithIcon name="msg" inputHanlder={inputHandler} icon={faVolumeUp} placeHolderMsg="HI"/>
            <button onClick={clickHandler}>Click To Show Info</button>
        </Container>
    )
}



export default InputForm;

const InputContainer = styled.div`
    width: 70%;
    height: 10%;
    position: relative;
    margin: 10px 0;
`

const IconContainer = styled.span`
    position: absolute;
    left: 0;
    width: 10%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    transition: 0.5s;
    

    font-size: 2rem;
    color: white;
`

const Input = styled.input`
    width: 90%;
    box-sizing: border-box;
    height: 100%;
    position: absolute;
    left: 10%;
    padding-left: 15px;
    font-size: 1.5rem;
    border-radius: 0 5px 5px 0;
    border-width: thin;
    border-color: rgba(168, 132, 132, 0.70);

    &:focus{
        outline: none;
    }

    &:focus + span{
        background-color: yellow;
        color: black;

    }


`