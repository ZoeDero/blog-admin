import React from 'react';
import { useEffect, useState } from 'react';

import {useParams} from "react-router-dom";


const ArticleDetailScreen = () => {

    const {id} = useParams();
    const [article, setArticle] = useState(null);

useEffect( ()=>{
    fetch("http://blog-api.loc/article/"+id)
        .then(resp => resp.json())
        .then(json => {
            setArticle(json)});
}, [id] )


    return (
        <div>
            <h1 className='text-center ms-4'> {article?.title}</h1>
            <td className='articleContent'>{article?.content}</td>
        </div>
    );
};

export default ArticleDetailScreen;