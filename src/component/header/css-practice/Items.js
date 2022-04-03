import Img1 from '../images/product-01.png'
import Img2 from '../images/product-02.png'
import Img3 from '../images/product-03.png'

const Items = ()=>{
    return(
        <div className='items'>
            <Item img={Img1}/>
            <Item img={Img2}/>
            <Item img={Img3}/>

        </div>       
    )
}

const Item =({img})=>{
    return(
        <>
        <div className='item'>
            <img src={img} alt=""/>
            <div className='caption'>
              <h2>Rirakuma doll 25cm</h2>
              <p>
                The owner of the moist pipulat and cut looks rilasdk ~!
              </p>
              <p>Price : $12 --- $10</p>
              <a href=''>View More Details</a>
            </div>
          </div>
        </>
    )
}

export default Items;

