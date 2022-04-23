import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SlideImg1 from '../images/slide-01.jpg'
import SlideImg2 from '../images/slide-02.jpg'
import SlideImg3 from '../images/slide-03.jpg'

const Slider = ()=>{

    const [displayedImg, setDisplayedImg] = useState(1);
    
    const changeHandler = useCallback((e)=>{
        console.log(e)
        setDisplayedImg(e)
    },[])

    return(
        <SliderContainer>
            <ImgContainer>
                <ImgComponent display={displayedImg===1?'block':'none'}>
                    <LazyLoadImage alt="1" src={SlideImg1}/>
                </ImgComponent>
                <ImgComponent display={displayedImg===2?'block':'none'}>
                     <LazyLoadImage alt="2" src={SlideImg2}/>
                </ImgComponent>
                <ImgComponent display={displayedImg===3?'block':'none'}>
                    <LazyLoadImage alt="3" src={SlideImg3}/>
                </ImgComponent>
            </ImgContainer>
            <SelectContainer>
                <InputRadio defaultChecked onChange={()=>changeHandler(1)} type="radio" value="1" name="img"/>
                <InputRadio onChange={()=>changeHandler(2)} type="radio" value="2" name="img"/>
                <InputRadio onChange={()=>changeHandler(3)} type="radio" value="3" name="img"/>
            </SelectContainer>
        </SliderContainer>
        )
}

export default Slider;

const FlexBox = styled.div`
        display:flex ;
        justify-content:center ;
        align-items: center;
`


const SliderContainer = styled(FlexBox)`
    width: 30%;
    height: 50% ;
    flex-direction:column ;
    box-sizing:border-box ;

`

const ImgContainer = styled(FlexBox)`
    width: 100% ;
    height:70% ;
    flex-direction:row ;

`

const ImgComponent = styled.div`
    width: 300px;
    height : 300px;
    display:${props => props.display} ;
    border : 1px solid black
`

const SelectContainer = styled(FlexBox)`
    width: 100% ;
    height:30% ;
    align-items:flex-start ;
`

const InputRadio = styled.input`

`