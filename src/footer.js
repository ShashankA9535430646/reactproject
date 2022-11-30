const Footer = () => {
    let footer_links = [
        {links:"Terms and Privacy Notice"},
        {links:"Send us feedback"},
        {links:"Help"}
    ]
    return ( 
        <div className="footer">
            <div className="footerlogo">
            <img width="100" height="50" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" />
            </div>
            <div className="footerlinks">
                {footer_links.map((fte)=>{
                    return(
                        <a href="">{fte.links}</a>
                    )
                })}
            </div>
            <div className="footer_desc">
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>


        </div>
     );
}
 
export default Footer;
