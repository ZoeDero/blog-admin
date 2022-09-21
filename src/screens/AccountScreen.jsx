import { useState, useEffect } from "react";

function AccountScreen() {
    const[acc, setAcc] = useState ([]);

    useEffect(()=>{
        fetch("http://blog-api.loc/appuser").then(resp => resp.json())
                                        .then(json =>{
                                            json = json.sort((a,b)=>{
                                                return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
                                            });
                                            setAcc(json)
                                        });
                                        
    },[]);

    return ( 
        
        <tbody>
            {acc.map(appUsers => {
                return(
                <tr key={appUsers.Id_acc} >
                    <td >{appUsers.pseudo}</td>
                    <td></td>
                </tr>
                    
                    
                    )
            })}
        </tbody>
    );
}

export default AccountScreen;