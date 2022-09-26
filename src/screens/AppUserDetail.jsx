import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

const AppUserDetail = () => {

    const {id} = useParams();
    const[appUser, setAppUser] = useState(null);

    useEffect( ()=>{
        fetch("http://blog-api.loc/appuser/"+id)
            .then(resp => resp.json())
            .then( json => setAppUser(json));
    }, [id])

    return (
        <table className="d-flex flex-column m-auto mt-1  ">
        <tbody className=" justify-content-center align-items-center">
        <h1 className="text-center mb-5">Vous êtes sur le profil de :</h1>
        <div className="cardProfile card m-auto bg-dark">
            <h3 className="text-center text-light">{appUser?.pseudo}</h3>
            <img src={"/"+appUser?.img_src}   />
            <h4 className="text-center text-light mt-2 ">{appUser?.grade}</h4>
            <p className="text-center text-light">Inscrit(e) depuis : {appUser?.created_at}</p>
            <hr className="text-white"/> 
            <div className="ms-3">
            <p className="text-light">Age : 31 ans</p>
            <p  className="text-light">Location : Paris</p>
            <p  className="text-light">Signe Astro : Bélier</p>
            </div>
           
        </div>
        </tbody>
        </table>
       
    );
};

export default AppUserDetail;