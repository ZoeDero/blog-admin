import { useEffect, useState } from 'react';

import {useParams} from "react-router-dom";

const TagDetailScreen = () => {

    const {id} = useParams();
    const [tag, setTag] = useState(null);

useEffect( ()=>{
    fetch("http://blog-api.loc/tag/"+id)
        .then(resp => resp.json())
        .then(json => {console.log(json) 
            setTag(json)});
}, [id] )


    return (
        <div>
            <h1>Le detail du tag est : {tag?.title } </h1>
        </div>
    );
};

export default TagDetailScreen;