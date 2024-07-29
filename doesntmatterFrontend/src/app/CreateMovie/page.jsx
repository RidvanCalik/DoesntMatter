'use client';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '@/app/CreateMovie/page.css';

export default function CreatePage(){
 
    const [movieForm,setMovieForm]=useState(
        
            {
              
                movieName: "",
                movieDescription: "",
                moviePoster: "",
                releaseDate: "",
                youtubeTrailerLink: "",
                score: 0,
                categories: [],
                comments: []
              }
        
    );

    function setData(attribute,value){
        
        setMovieForm((prev)=>{
            prev[attribute]=value;       
            return prev;
        })   
       
    }

    return(
        <div className='container my-5 m-auto row'>
            <div className='col-4'>
                <InputGroup className="mb-3">
                    <Form.Control onChange={e=>setData("movieName",e.target.value)} placeholder="Movie Name" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control  onChange={e=>setData("moviePoster",e.target.value)} placeholder="Movie Poster Link"  />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control  onChange={e=>setData("youtubeTrailerLink",e.target.value)} placeholder="Movie Youtube trailer Link"  />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control  onChange={e=>setData("releaseDate",e.target.value)} placeholder="Release Date" />
                </InputGroup>

                <InputGroup onChange={e=>setData("categories",e.target.value)} className="mb-3">
                <Form.Select multiple aria-label="Select Category">
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Sci-fi">Sci-fi</option>
                    <option value="Love">Love</option>
                </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                    <button className='btn btn-primary w-100'>Save</button>
                </InputGroup>
            </div>
            <div className='col-7'>
                <div className='card' id='movieCard'>
                <img  src='https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_SX300.jpg' alt='Poster'></img>
                <iframe  src="https://www.youtube.com/embed/smTK_AeAPHs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h2 className='d-inline-block'>{movieForm.movieName}</h2>
                <h5 className='d-inline-block'>2023{movieForm.releaseDate}</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aspernatur dolorem nesciunt accusamus voluptates ex fugit accusantium, qui sint. Excepturi praesentium porro ea rerum debitis! Necessitatibus cumque assumenda accusamus repellat.</p>
                </div>
            </div>
        </div>
     
    );
}