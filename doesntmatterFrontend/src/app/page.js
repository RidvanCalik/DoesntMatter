"use client";
import { Coming_Soon } from "next/font/google";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Movies() {
    var [movies,setMovies]=useState({
        "comingSoonMovies":[],
        "releasedMovies":[],
        "bestMoviesInCategory":[]
        }  
    );
    useEffect(()=>{
        fetch(process.env.apiUrl+"Movies").then((data)=>data.json()).then((data)=>movies);
    },[]);
    return (
        <div className="container">
            <div><h2>A web site for who have don't say: </h2>
                <Link href="/Random"><h1 className="d-inline-block text-danger link-underline">Doesn't Matter 🤷</h1></Link><br></br>
                <h2>at makes decision watching which movie</h2>
            </div>
            <br></br>
            <h1>Movies out of Coming Soon</h1>
            <h3>İçerik Gelecek</h3>
            <h1>Released Movies</h1>
            <h3>İçerik Gelecek</h3>
        </div>
    );
  }
  