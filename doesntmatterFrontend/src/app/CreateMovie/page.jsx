'use client';
import { useState,useRef, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';


import '@/app/CreateMovie/page.css';

export default function CreatePage(){

   
    const movieNameInput = useRef(null);
    const [alertMessage,setAlertMessage]=useState({visible:false,status:"success",text:""});
    function SearchMovieByName(){
        //https://www.omdbapi.com/?apikey=<api_key>&type=Movie&s=<movieName>
        if(movieNameInput.current){

            
            let movieName=movieNameInput.current.value ?? "";
          
                fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMBAPI_KEY}&type=Movie&s=${movieName}`).then((res)=>res.json()).then((res)=>{
                    setmovieList(res);
                    setAccordionActiveKey(1);
                });
              
               
           
           
        }
      
    }

    function getMovieDetail(movieID){
        fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMBAPI_KEY}&i=${movieID}`).then((res)=>res.json()).then((res)=>{
            setMovieForm({
                imdbID:res.imdbID,
                Title: res.Title,
                Plot:res.Plot,
                Released: res.Released,
                Runtime: res.Runtime,
                Genre:res.Genre,
                Director:res.Director,
                Writer:res.Writer,
                Actors:res.Actors,
                BoxOffice:res.BoxOffice,
                Poster:res.Poster,
                Awards:res.Awards,
                Ratings:res.Ratings

            });
            setAccordionActiveKey(2);
    
        });
        
    }
    function saveMovie(){
        console.log(JSON.stringify(
            {...movieForm,
                Released:new Date(movieForm.Released),
                Runtime:movieForm.Runtime.slice(0, -4),
                Actors:[movieForm.Actors],
                Genre:[movieForm.Genre],
                BoxOffice:  parseInt(movieForm.BoxOffice.slice(1).replace(/,/g, ''))
            }));
        try{

            //check movie saved before
            fetch(process.env.NEXT_PUBLIC_DOESNTMATTER_API.concat("Movies/GetMovieByIMBD/").concat(movieForm.imdbID)).then((isSavedBefore)=>{
             
                if(isSavedBefore.status==404){

              
                    fetch(process.env.NEXT_PUBLIC_DOESNTMATTER_API.concat("Movies/PostMovie"),{
                        method: "POST",
                   
                        headers: {
                            'Accept': 'application/json, text/plain',
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        body: JSON.stringify({...movieForm,
                            Released:new Date(movieForm.Released),
                            Runtime:movieForm.Runtime.slice(0, -4),
                            Actors:[movieForm.Actors],
                            Genre:[movieForm.Genre],
                            BoxOffice:  parseInt(movieForm.BoxOffice.slice(1).replace(/,/g, ''))
                        }),
                    }).then((res)=>{
                       res.json().then((e)=>console.log(e));
                        res.status==201 ?
                            setAlertMessage({
                                visible:true,
                                status:"success",
                                text:"Film veritabanımzıa kaydedildi 😊"
                            }):
                            setAlertMessage({
                                visible:true,
                                status:"danger",
                                text:"Film kaydedilirken bir sorunla karışalıldı... lütfen admine bildirin 🥹"
                            })
                        }
                        
                    );
                }else{
                    setAlertMessage({
                        visible:true,
                        status:"success",
                        text:"Film daha önce kaydilmiş hemen değerlendirebilirsin 😎"
                    });
                }
                
         }

        );
        }catch(error){
            console.log(error);
        }
            
        
       
    }


    const [movieList,setmovieList]=useState(
        {
            Response:"",
            Search:[{
                Title: "",
                Year: "",
                imdbID:"",
                Poster: "",
            }] ,
            totalResults:0    
            
        }
    );
   
    const [AccordionActiveKey,setAccordionActiveKey]=useState(0);
    const [movieForm,setMovieForm]=useState(
        
            {
                imdbID:"",
                Title: "",
                Plot:"",
                Released: "",
                Runtime: "",
                Genre:"",
                Director:"",
                Writer:"",
                Actors:[],
                BoxOffice:"",
                Poster:"",
                Awards:"",
                Ratings:[
                    {
                        Source:"",
                        Value:""
                    }
                ],
              
              }
        
    );



    return(
        <div className='container my-5 m-auto row'>

{  alertMessage.visible ? 
    
         (
          <Alert variant={alertMessage.status} onClose={() => setAlertMessage({visible:false})} dismissible>
            <Alert.Heading>{alertMessage.text}</Alert.Heading>
           
          </Alert>
        ):null

  }

<Accordion activeKey={AccordionActiveKey.toString()} defaultActiveKey='0'>
      <Accordion.Item onClick={()=>setAccordionActiveKey(0)} eventKey="0">
        <Accordion.Header>Filmi Arayın</Accordion.Header>
        <Accordion.Body>
            <InputGroup className="mb-3 d-flex">
                <p className='w-100'>İzlemiş olduğunuz filmi veritabanımıza eklemek için arama yapın...  🔍</p>
                <Form.Control  ref={movieNameInput}   placeholder="Enter Movie Name for select..." />
                <button className='btn btn-primary w-25' onClick={SearchMovieByName}>Search</button>
            </InputGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item onClick={()=>setAccordionActiveKey(1)} eventKey="1">
        <Accordion.Header>Filmi Seçin</Accordion.Header>
        <Accordion.Body className='d-flex flex-wrap'>
        <p className='w-100'>Lütfen Aradığınız filmi seçin ☑️</p>
           <p className='w-100'> Total Result: { movieList.totalResults}</p>
                {movieList.Search.map((movie)=>{
                    return(
                    <div onClick={()=>getMovieDetail(movie.imdbID)} key={movie.imdbID} className='card movieCard' >
                        <div className='decription'>
                            <h5>{movie.Title}</h5>
                            <h6>{movie.Year}</h6>
                        </div>
                        
                          <img src={movie.Poster} className='movieListPoster' alt='movieImg'></img>
                      
                    </div>

                    );
                })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item onClick={()=>setAccordionActiveKey(2)} eventKey="2">
        <Accordion.Header>Film Kaydedin</Accordion.Header>
        <Accordion.Body id='mainMovieCard'>
            <p className='w-100'>Lütfen Seçilen filmi gözden geçirin ve Kaydedin</p>
            <div className='row'>
                <div className="col-8">
                    <div className="row border border-secondary rounded-2 p-2 m-2 mt-0">
                        <h2 >{movieForm.Title}</h2>
                        <div className='col-6'>
                            <h4>🏷️ {movieForm.Genre}</h4>
                            <h4>🕑 {movieForm.Runtime}</h4>
                        </div>
                        <div className='col-6'>
                            <h4>📅 {movieForm.Released}</h4>
                            <h4>💰 {movieForm.BoxOffice}</h4>
                        </div>
                    </div>
                 
                    <div className='row card border border-secondary  p-2 m-2'>
                        <h4>✍️ {movieForm.Writer}</h4>
                        <h4>🎬 {movieForm.Director}</h4>
                        <h4>🧑‍🎤 {movieForm.Actors}</h4>
                        <h4>🏆 {movieForm.Awards}</h4>
                                 
                                <div className='d-flex gap-2 mb-5'>
                                    {movieForm.Ratings.map(e=>{
                                    return(
                                    <div key={e.Source} className='movieRatings card d-flex justify-content-center text-center align-content-center d-inline-block' >
                                        <h6>{e.Source}</h6>
                                        <h6>⭐{e.Value}</h6>
                                    </div>
                                    );
                                    })}
                                    
                                </div>
                           
                            
                                <hr></hr>
                            <p>{movieForm.Plot}</p>


                    </div>
                    
                    
                </div>
               
                <div className='col-4 p-0 m-0 mb-2 overflow-hidden '>
                    <a target='blank' href={`https://www.imdb.com/title/${movieForm.imdbID}`}>  
                        <img className=' rounded-2' id='masterPoster'  src={movieForm.Poster} alt='Poster'></img>
                    </a>
                </div>
                <button className='btn btn-info' onClick={saveMovie}>Kaydet</button>
               
            </div>
           
        </Accordion.Body>
      </Accordion.Item>


    </Accordion>
          
          
            
        </div>
     
    );
}