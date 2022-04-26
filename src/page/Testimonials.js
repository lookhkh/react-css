import styled from 'styled-components'
import { useState , useCallback} from 'react';
import Img from '../asset/yua.png'
import Img2 from '../asset/yubin.jpg'
import Img3 from '../asset/arin.jpg'

const Testimonials = ()=>{
    const [index ,setIndex] = useState(1);

    const changeHandler = (index)=>{
        setIndex(index);
    }

    return(
        <Container>
            <HeaderOfTestimonial>Testimonials</HeaderOfTestimonial>
            <Contents>
                <Content left={index===1?`0%`:`100%`}>
                    <img width="300px" height="300px" src={Img} alt="yua"/>
                    <div>
                        <p>
                        퍼블리셔라면 노력여하에 따라서는 얼마 안걸릴수도 있기는 합니다.

개발직군하고는 좀 결이 달라서 기본적인 이해를 하는 시간이 가장 오래 걸리지만, 그 이후에는

진도가 쭉쭉 나가는 분들도 있더군요. 물론 저처럼 당최 이해를 못하는 사람도 있긴 합니다;;

다만, 하루에 한두시간으로는 시간이 많이 걸릴수도 있을거에요.

초반에는 좀 집중적으로 시간투자가 필요합니다. 주중에 힘들다면, 주말을 이용해서 하루 8시간 이상

집중해서 해보세요. 최대한 빠른 시간내에 기본기를 끝내야 그 다음이 빨라지 
                        </p>
                    </div>
                </Content>
                <Content left={index===2?`0%`:`100%`}>
                <img width="300px" height="300px" src={Img2} alt="yubin"/>
                    <div>
                        <p>
                        퍼블리셔라면 노력여하에 따라서는 얼마 안걸릴수도 있기는 합니다.

개발직군하고는 좀 결이 달라서 기본적인 이해를 하는 시간이 가장 오래 걸리지만, 그 이후에는

진도가 쭉쭉 나가는 분들도 있더군요. 물론 저처럼 당최 이해를 못하는 사람도 있긴 합니다;;

다만, 하루에 한두시간으로는 시간이 많이 걸릴수도 있을거에요.

초반에는 좀 집중적으로 시간투자가 필요합니다. 주중에 힘들다면, 주말을 이용해서 하루 8시간 이상

집중해서 해보세요. 최대한 빠른 시간내에 기본기를 끝내야 그 다음이 빨라지 
                        </p>
                    </div>
                </Content>
                <Content left={index===3?`0%`:`100%`}>
                <img width="300px" height="300px" src={Img3} alt="yua"/>
                    <div>
                        <p>
                        퍼블리셔라면 노력여하에 따라서는 얼마 안걸릴수도 있기는 합니다.

개발직군하고는 좀 결이 달라서 기본적인 이해를 하는 시간이 가장 오래 걸리지만, 그 이후에는

진도가 쭉쭉 나가는 분들도 있더군요. 물론 저처럼 당최 이해를 못하는 사람도 있긴 합니다;;

다만, 하루에 한두시간으로는 시간이 많이 걸릴수도 있을거에요.

초반에는 좀 집중적으로 시간투자가 필요합니다. 주중에 힘들다면, 주말을 이용해서 하루 8시간 이상

집중해서 해보세요. 최대한 빠른 시간내에 기본기를 끝내야 그 다음이 빨라지 
                        </p>
                    </div>
                </Content>
            </Contents>
            <InputContainers>
                <input onChange={()=>changeHandler(1)} type="radio" name="index"/>
                <input onChange={()=>changeHandler(2)} type="radio" name="index"/>
                <input onChange={()=>changeHandler(3)} type="radio" name="index"/>
            </InputContainers>
        </Container>
    )
}

export default Testimonials;

const Container = styled.div`
    width : 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const HeaderOfTestimonial = styled.h1`
    text-align: center;
    width: 100%;
    `

const Contents = styled.div`
    height : 1000px;
    width : 100%;
    position : relative;
    overflow: hidden;
       
`
const InputContainers = styled.div`
    height : 10%;
    width : 100%;
    text-align: center;
`

const Content = styled.div`
    height : 100%;
    width: 100%;
    display: inline-block;
    position: absolute;
    left: ${props => props.left};
    transition: 0.5s;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    & img{
        border-radius: 50%;
    }

    & p{
        text-align: center;
        padding : 0 200px;
    }
`