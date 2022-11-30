import { useState,useEffect } from "react";



const Favourites = (props) => {
    let title=props.data
    let [favourites,setfav] = useState(
        [
            {
                title:"Loki",
                genre:"sci-fic",
                language:"multi",                                              
                rating:"8",
                id:"1"
            },{
                title:"Sandman",
                genre:"fantacy",
                language:"multi",
                rating:"7.8",
                id:"2"
            },{
                title:"See",
                genre:"action",
                language:"multi",
                rating:"6.8",
                id:"3"
    
            },{
                title:"Rings Of Power",
                genre:"adventure",
                language:"multi",
                rating:"7.5",
                id:"4"
            },{
                title:"Vikings",
                genre:"action",
                language:"multi",
                rating:"8.2",
                id:"5"
    
            }
            ]
    )
    let handleDelete = (id) =>{
        setfav(favourites.filter(x => x.id !==id))

   }
   useEffect( () =>{
    // console.log("working");
    fetch("http://localhost:4000/favourites")
    .then (res=>{
        return res.json()
    })
    .then (dte=>{
        setfav(dte)
    },[])
   })
    return ( 
        
        <div className="fav">
        <h1>{title} </h1>
        
        {favourites.map((dte)=>{
            return(
                <div className="list">
                <h2>{dte.title}</h2>
                <p>{dte.genre}</p>
                <p>{dte.language}</p>
                <p>{dte.rating}</p>
                <button onClick={()=>handleDelete(dte.id)}>BOOM</button>
                
                </div>
                
            )

        })}
        </div>
        
     );
}
 
export default Favourites;