
function Loader(props: any) {
    return (
        <>
            {props.Loader &&
                <div className="image-container">
                    <img 
                         className={"imageAnimation"} 
                        width={props.width}  
                        height={props.height}
                        src={props.img_path} 
                       />
                    <div className = "para" style={{position:"relative", top:"300px", textAlign:"center" , float:"inherit",marginRight:"70px",color:props.loadingTitleColor,fontSize:props.loadingTitleFontSize,fontWeight:props.loadingTitleFontWeight}}>{props.loadingTitle}</div>
                    
                </div>
             } 
        </>
    )
}

export default Loader;