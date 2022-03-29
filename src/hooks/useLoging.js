import { useEffect } from "react";


const useLoging = (componentName)=>{

    useEffect(()=>{
        console.log(`${componentName} 창`)
        return ()=>{
            console.log(`${componentName} 끝`)
        }
    },[])
}

export default useLoging;