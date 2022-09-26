import React from 'react';
import { useEffect, useState } from 'react';

import {useParams} from "react-router-dom";

const ThemeDetailScreen = () => {

    const {id} = useParams();
    const [theme, setTheme] = useState(null);

useEffect( ()=>{
    fetch("http://blog-api.loc/theme/"+id)
        .then(resp => resp.json())
        .then(json => setTheme(json));
}, [id] )

    return (
        <div>
        <h1>Le detail du theme : {theme?.title } </h1>
        <img src={"/"+theme?.img_src} style={{width:'500px', margin:'auto', textAlign:'center'}} alt="..." />
    </div>
    );
};

export default ThemeDetailScreen;