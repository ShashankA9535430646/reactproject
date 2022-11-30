const Signup = () => {
    return ( 
        <div className="addfav">
            <div className="form">
                <form action="">
                <img src="https://www.passionateinmarketing.com/wp-content/uploads/2021/09/disney-hotstar-logo.jpg" height={50}width={140} alt="" />
                    <input type="text" placeholder="Title" />
                    <input type="text" placeholder="Genre"/>
                    <input type="text" placeholder="Language"/>
                    <input type="number" min="0" max="9.9" placeholder="Ratings"/>
                    <button>Add</button>
                    </form>    
                </div>
            <div className="textform">
                <h1>Add <br></br>your favourites  <br></br>movies and TV shows</h1>
            </div>
        </div>
     );
}
 
export default Signup;
