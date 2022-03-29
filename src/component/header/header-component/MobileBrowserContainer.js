import { Routes, Route, Link  } from 'react-router-dom';

const MobileBrowserContainer = ()=>{

    const mockTest = 
        {
            border:"1px solid",
            height:"100%"
        }    

    return(
        <div data-testid ="browser" style={mockTest} className="container mobile-browser">
            <div className="content" 
                style={{border:"1px solid",
                display:"flex",
                flexDirection:"row",
                flex: "1 1 0px",
                height:"100%",
                padding : "0 2% 0 2%"}}>

                <div className="mobile_left" style={{flex:1, backgroundColor:'red'}}>
                    <span data-role="open" className="icon side_left_menu">
                    </span>
                </div>
                <div className="brand_header" style={{flex:1,backgroundColor:'gray '}}>
                    <Link to="/"><img src=""/></Link>
                </div  >
                <div className="mobile_right" style={{flex:1, backgroundColor:'blue'}} >

                </div>
            </div>
        </div>
    )
}

export default MobileBrowserContainer