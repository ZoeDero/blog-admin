import '../scss/articleScreen.css';
import {useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";

function ArticleScreen() {

    const navigate=useNavigate(null);
    const[art, setArt] = useState ([]);

    useEffect(()=>{
        fetch("http://blog-api.loc/article/").then(resp => resp.json())
                                        .then(json =>{
                                            json = json.sort((a,b)=>{
                                                return a.created_at.toLowerCase() > b.created_at.toLowerCase() ? 1 : -1
                                            });
                                            setArt(json)
          });
                                        
    },[])

    return ( <>
        <table className="d-flex flex-column m-auto mt-1">
        <h1 className="d-flex justify-content-center">Les articles</h1>
        <tbody className='articleBody row '>
            {art.map(article => {
                return(
                <tr className='card-fluid rounded-3 bg-dark p-0 d-flex flex-column m-3' key={article.Id_article}  onClick={()=>{navigate(`/article/${article.Id_article}`);}} >
                   <img src={article.img_src} className="imgCard" />
                    <td className='articleTitre text-white'>{article.title}</td>
                    <td className="text-end  text-light">Crée le : {article.created_at}</td>
                </tr>
                    
                    
                    )
            })}
        </tbody>
        </table>
        </>
    );
}

export default ArticleScreen;