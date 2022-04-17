import styled  from 'styled-components'

export const Container = styled.div`

    background-color: ${props=>props.color};
    width: 80%;
    height: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props=>props.direction};
    
`


