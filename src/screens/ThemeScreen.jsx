import { useState, useEffect } from "react";
import '../scss/themeScreen.css';
import { useNavigate} from "react-router-dom";

function ThemeScreen() {
    const[theme, setTheme] = useState ([]);
    const navigate= useNavigate(null);

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
        <div className="m-auto mt-1 container-fluid text-center">
       
        <h1 className="mb-4 ">THEMES</h1>
       
        <table className="container-fluid d-flex flex-column m-auto mt-4">
        <tbody className="row ">
            {theme.map(theme => {
                return(
                    
                <tr key={theme.Id_theme}  onClick={()=>{navigate(`/themes/${theme.Id_theme}`);}} className='card-fluid rounded-3 bg-dark p-0 d-flex flex-column m-3'  >
                    <div className="card  bg-dark text-white " >
                            <img src={theme.img_src} className="imgCardTheme"  alt="..." />
                       
                            <div className="card-title m-auto">{theme.title}</div>
                           
                        </div>
                   
                </tr>
                    
                    
         
                    )
            })}
        </tbody>
       </table>
       </div>
       );
}

export default ThemeScreen;