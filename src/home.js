const Home = () => {
    let images = 
        [
            {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/8317/1328317-v-56412010beba"}     ,  
            {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/896/580896-v"}            ,
            {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8864/1348864-v-bb243b6549c4"} ,
            {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v"},
            {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3065/1323065-v-58c6d2de61e1"},
            {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2876/862876-v"},
            {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40"}

        ]
    return ( 
    <div className="home">
        <div className="pos">
        <div className="text">
            <h1>Hanuman Da'Damdaar</h1>
            <p1>1 hr 39 min * 2017 * Kids * U/A 13+* Hindi</p1><br></br>
            <p2>To prove that he is a brave boy, Maruthi, ayoung boy<br></br>sets out on a jungle adventure and transforms into<br></br> India's original superhero, Hanuman </p2>

        </div>
        <div className="poster">
    <img width="790" height="415" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/2054/1000182054/1000182054-h" alt="" />
    
</div>
        </div>
        
        <div className="movies">
            {images.map((data)=>{
                return(
                    <img height="240" width="180" src={data.img} alt="" />

                )
            })}
            
        </div>
    </div>
    
    );
}
 
export default Home;

