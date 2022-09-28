import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import ThemeDetailScreen from './ThemeDetailScreen';

const AppUserDetail = () => {

    const {id} = useParams();
    const[appUser, setAppUser] = useState(null);

    useEffect( ()=>{
        fetch("http://blog-api.loc/appuser/"+id,{
            method: "POST",
            body: JSON.stringify({with:['account','role','article','comment','theme']})
        })
            .then(resp => resp.json())
            .then( json => setAppUser(json));
    }, [id])

    return (
        <table className="d-flex flex-column m-auto mt-1   ">
        <tbody className="card cardProfile justify-content-center align-items-center bg-dark mb-5">
        {/* <h5 className="text-center mb-5"><strong>Vous êtes sur le profil de :</strong></h5> */}
        
            <h1 className="text-center text-light">{appUser?.pseudo}</h1>
            {/* <div className='container-fluid'> */}
                <img src={"/"+appUser?.img_src} className="w-100"  />
            {/* </div> */}
            <h2  className="text-center m-auto mt-2  text-light">{appUser?.role?.title}</h2>
            <hr className="text-center text-white"/> 
            <p  className="text-center text-light">email : {appUser?.account?.login}</p>
            <p className=" text-center text-light">Inscrit(e) depuis le : {appUser?.created_at}</p>
            <hr className="bg-light"/>

            {appUser?.Id_role === '1' && <>
                    <h3 className="text-center text-light">Articles rédigés</h3>
                    <table className="table table-striped text-light">
                        <thead>
                            <tr className="text-center">
                                <th scope="col">Titre</th> 
                                 <th scope="col">Date</th>
                                 <th scope="col">Auteur</th>
                                 <th scope="col">Thème</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appUser?.articles_list.map(article =>{
                                return(<tr key={article.Id_article}>
                                    <td className="text-light text-center">{article?.title} </td>
                                    <td className="text-light text-center ">{new Date(article.created_at).toLocaleString() }</td>
                                    <td  className="text-light text-center">{appUser?.pseudo}</td>
                                    <td  className="text-light text-center">{article.theme?.title}</td> 
                                </tr>)// A CORRIGER---------------------------------------------------------------------------------------
                            })}
                        </tbody>
                    </table>
                    </>}

            {appUser?.Id_role === '2' && <>
                            <h3 className="text-center text-light">Commentaires rédigés</h3>
                            <table className='table table-striped text-light'>
                                <thead>
                                <tr className='text-light text-center'>
                                    <th scope="col">Titre</th> 
                                    <th scope="col">Date</th>
                                    <th scope="col">Auteur</th>
                                    <th scope="col">Thème</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {appUser?.comments_list?.map(comment => {
                                        return(<tr  key={comment.Id_comment}>
                                            {/* <td  className="text-light" >{comment.article}</td> */}
                                             <td className="text-light text-center ">{comment.title} </td>
                                             <td className="text-light text-center ">{new Date(comment.created_at).toLocaleString()}</td>
                                             <td  className="text-light text-center">{appUser?.pseudo}</td>
                                             <td  className="text-light text-center">{appUser?.theme?.title}</td>
                                        </tr> )
                                    })}
                                </tbody>
                            </table>
            
            </>} 


            
     
        </tbody>
        </table>
       
    );
};

export default AppUserDetail;