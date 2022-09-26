import { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';

function AccountScreen() {
    const navigate = useNavigate();
    
    const[acc, setAcc] = useState ([]);

    useEffect(()=>{
        fetch("http://blog-api.loc/appuser").then(resp => resp.json())
                                        .then(json =>{
                                            json = json.sort((a,b)=>{
                                                return a.pseudo.toLowerCase() > b.pseudo.toLowerCase() ? 1 : -1
                                            });
                                            setAcc(json)
          });
                                        
    },[])

    return ( 
        <table className="container-fluid ">
            <h1 className="text-center mb-5">Nos membres</h1>
        <tbody className=" d-flex justify-content-center">
            {acc.map(appUser => {
                return(
                <tr key={appUser.Id_acc}  onClick={()=>{navigate(`/appuser/${appUser.Id_appUser}`);}} className='card bg-dark m-3' >
                    <img src={appUser?.img_src} className="imgProfil" />
                    <td className="text-center text-light" >{appUser.pseudo}</td>
                    
                </tr>
                    
                    
                    )
            })}
        </tbody>
      
        </table>
    );
}

export default AccountScreen;