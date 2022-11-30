const Navbar = () => {
    let navbar = [
        {link:"Home" , path:"/"},
        {link:"About",path :"/about"},
        {link:"Favourites",path :"/favourites"},  
        {link:"Sign Up",path:"/addfav"}
    ]
    return ( 
        <div className="navbar">
            <div className="disney">
                <a href="">
                <div></div>
                <div></div>
                <div></div>
            </a>
               <div className="logo">
               <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
               </div>
            </div>
            
            <div>
            <div className="links">
                {navbar.map((nte) =>{
                    return(
                        <a href={nte.path}>{nte.link}</a>
                    )
                })}
            
            
            </div>
            </div>
        </div>
        
     );
}
 
export default Navbar;
