import { useState, useEffect } from "react";
import '../scss/themeScreen.css';
function ThemeScreen() {
    const[theme, setTheme] = useState ([]);

    useEffect(()=>{
        fetch("http://blog-api.loc/theme").then(resp => resp.json())
                                        .then(json =>{
                                            json = json.sort((a,b)=>{
                                                return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
                                            });
                                            setTheme(json)
                                        });
                                        
    },[])

    return ( 
        
        <tbody className="container h-auto ms-5 ">
            {theme.map(theme => {
                return(
                <tr key={theme.Id_theme} className=" card categoryList d-flex flex-column p-0 vh-50 text-center mb-3 mt-3   "  >
                    <div className="card  bg-dark text-white " >
                            <img src={theme.img_src} className="imgCard"  alt="..." />
                       
                            <h5 className="card-title m-auto">{theme.title}</h5>
                           
                        </div>
                   
                </tr>
                    
                    
                    )
            })}
        </tbody>
       
       
     );
}

export default ThemeScreen;