import { useEffect, useState } from "react";

function TagScreen() {

    const[tags, setTags] = useState ([]);

    useEffect(()=>{
        fetch("http://blog-api.loc/tag").then(resp => resp.json())
                                        .then(json=>setTags(json));
                                        // .then(json => {console.log(json); setTags(json)})
    },[])

    return ( 
        <table>
        <tbody>
            {tags.map(tag => {
                return(
                <tr key={tag.Id_tag}>
                    <td>{tag.title}</td>
                    <td></td>
                </tr>
                    
                    
                    )
            })}
        </tbody>
        </table>
       
     );
}

export default TagScreen;