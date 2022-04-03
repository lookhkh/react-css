import { useEffect, useState } from "react";


const DropBox = ()=>{
    
    const [selectedRoom, setSelectedRoom] = useState(0);
    const rooms = ["Room1","Room2","Room3","Room4","Room5"];
    
    const clickHandler = (e)=>{
        const index = e.target.dataset.target;
        setSelectedRoom(()=>index);
    }

    const isSelected= (target)=>{
        return Number(target)===Number(selectedRoom)?"active":"";
    }
    
    useEffect(()=>{
        console.log(selectedRoom)

    },[selectedRoom]);

    return(
        <>
            <div className="drop-container">
                <button>Real Estate Type</button>
                <div className="drop-contents-container">
                  {rooms.map(
                      (a,index)=>
                        <Room 
                            key={a} 
                            target={index} 
                            onClick={clickHandler} 
                            cn={isSelected(index)} 
                            msg={a} 
                        />)}
                </div>
            </div>
        </>
    )

}

const Room = ({ target,cn, msg, onClick})=>{
    

    return(
        <span 
            data-target={target} 
            onClick={onClick} 
            className={cn}>
                {msg}
        </span>
    )

}

export default DropBox;