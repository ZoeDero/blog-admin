import { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';

function AccountScreen() {
    const navigate = useNavigate();
    
    const[acc, setAcc] = useState ([]);
    console.log(acc);
    useEffect(()=>{
        fetch("http://blog-api.loc/appuser/0",{
            method:"POST",
            body: JSON.stringify({with:['account','role']})
        }).then(resp => resp.json())
                                        .then(json =>{
                                            json = json.sort((a,b)=>{
                                                return a.pseudo.toLowerCase() > b.pseudo.toLowerCase() ? 1 : -1
                                            });
                                            setAcc(json)
          });
                                        
    },[])

    return ( <div className="m-auto mt-1">
            <h1 className="text-center mb-5">Nos membres</h1>
        <table className="container-fluid ">
        <tbody className=" d-flex justify-content-center">
            {acc.map(appUser => {
                return(
                <div key={appUser.Id_acc}  onClick={()=>{navigate(`/appuser/${appUser.Id_appUser}`);}} className='card bg-dark m-3' >
                    <img src={appUser?.img_src} className="imgProfil" />
                    <p className="text-center text-light mt-4" ><strong>{appUser.pseudo.toUpperCase()}</strong></p>
                    <hr className="bg-light"/>
                    <p className="text-light text-center">{appUser?.role.title}</p>
                    <p  className="text-light text-center">{appUser.account.login}</p>
                    
                   
                    
                </div>
                    
                    
                    )
            })}
        </tbody>
      
        </table>
        </div>
    );
}

export default AccountScreen;