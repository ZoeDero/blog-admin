import { useEffect, useState } from "react";

function TagScreen() {

    const[tags, setTags] = useState ([]);

    useEffect(()=>{
        fetch("http://blog-api.loc/tag").then(resp => resp.json())
                                        .then(json =>{
                                            json = json.sort((a,b)=>{
                                                return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
                                            });
                                            setTags(json)
                                        });
                                        
    },[])

    return ( 
        
        <tbody className="container ms-5">
            {tags.map(tag => {
                return(
                <tr key={tag.Id_tag} className="categoryList d-flex flex-column " >
                    <td className="card p-5 vh-75 text-center mb-3 mt-3 ">{tag.title}</td>
                    <td></td>
                </tr>
                    
                    
                    )
            })}
        </tbody>
       
       
     );
}

export default TagScreen;