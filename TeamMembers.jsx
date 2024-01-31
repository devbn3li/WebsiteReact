import React from 'react'
import Julie from '../assets/julie-iksow-featured-en.png'
import penny from '../assets/penny-ashley-lawrence-featured-en.png'
import david from '../assets/david-hail-featured-en_1.png'
import michael from '../assets/michael-hawkins-featured-en.png'
import jill from '../assets/jill-klindt-featured-en.png'
import yasser from '../assets/yasser-mahmud-featured-en-31x.png'
import brandon from '../assets/brandon-ziegler-featured-en.png'
import emily from '../assets/emily-forrester-featured-en_0.png'
import kim from '../assets/kim-huffman-featured-en-2_0.png'
import mike from '../assets/mike-rost-featured-en.png'
import erik from '../assets/erik-saito-featured-en_0.png'
import corey from '../assets/corey-wells-featured-en_2.png'
import { FaArrowRight } from "react-icons/fa";

export default function TeamMembers() {
    const dataTeam = [
        {   id:1,
            photo:Julie,
            alt: "Julie",
            userName:'Julie Iskow',
            job:'President & Chief Executive Officer',
            BIO:'READ BIO',
        },
        {   id:2,
            photo:penny,
            alt:'Penny',
            userName:'Penny Ashley-Lawrence',
            job:'EVP, Chief Customer Officer',
            BIO:'READ BIO',
        },
        {   id:3,
            photo:david,
            alt:'david',
            userName:'David Haila',
            job:'EVP, Chief Technology Officer',
            BIO:'READ BIO',
        },
        {   id:4,
            photo:michael,
            alt:'michael',
            userName:'Michael Hawkins',
            job:'EVP, Sales',
            BIO:'READ BIO',
        },
        {   id:5,
            photo:jill,
            alt:'jill',
            userName:'Jill Klindt',
            job:'EVP, Chief Financial Officer',
            BIO:'READ BIO',
        },
        {   id:6,
            photo:yasser,
            alt:'yasser',
            userName:'Yasser Mahmud',
            job:'EVP, Chief Marketing Officer',
            BIO:'READ BIO',
        },
        {   id:7,
            photo:brandon,
            alt:'brandon',
            userName:'Brandon Ziegler',
            job:'EVP, Chief Legal Officer & Chief Administrative Officer',
            BIO:'READ BIO',
        },
        {   id:8,
            photo:emily,
            alt:'emily',
            userName:'Emily Forrester',
            job:'SVP, Human Resources',
            BIO:'READ BIO',
        },
        {   id:9,
            photo:kim,
            alt:'kim',
            userName:'Kim Huffman',
            job:'SVP, Chief Information Officer',
            BIO:'READ BIO',
        },
        {   id:10,
            photo:mike,
            alt:'mike',
            userName:'Mike Rost',
            job:'SVP, Investor Relations & Corporate Development',
            BIO:'READ BIO',
        },
        {   id:11,
            photo:erik,
            alt:'erik',
            userName:'Erik Saito',
            job:'SVP, General Manager of EMEA & APAC',
            BIO:'READ BIO',
        },
        {   id:12,
            photo:corey,
            alt:'corey',
            userName:'Corey Wells',
            job:'SVP, Partners & Alliances',
            BIO:'READ BIO',
        },
    ]
  return (
    <>
      <section className=" relative w-full bg-[#FCF4E8] py-[4rem] sm:px-[3rem] ">
            <div className=" pb-[5rem] pt-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  sm:gap-10 md:gap-[9rem] lg:gap-[10rem] gap-y-[5rem]  w-[90%] xl:w-[80%]  m-auto  justify-items-center">
                {dataTeam.map(({id, photo, alt, userName, job, BIO})=>{
                    return (
                        <div className=" w-[280px] sm:w-[240px]  h-[500px] duration-1000" key={id}>
                            <div className=" w-full h-60% ">
                            <img src={photo} alt= {alt} className=""/>
                            </div>
                            <div className="bg-white mt-[-10px] py-7 px-5 h-[40%] rounded-bl-3xl rounded-br-3xl ">
                                <a href="#" className=" inline-block mb-1 text-[1.125rem] font-[700] text-[#333]">{userName}</a>
                                <br/>
                                <p  className="  text-[1.125rem] font-[400] leading-[144%] mb-[1rem]">{job}</p>
                                <div className="flex items-center gap-2 cursor-pointer ">
                                    <span className=" font-[700] text-[#0058AF]">{BIO}</span>
                                    <FaArrowRight className=" text-[#0058AF] duration-1000 translate-x-0 hover:translate-x-2"/>
                                </div>
                                
                            </div>
                        </div>
                    )   
                })}
               
            </div>
      </section>
    </>
  )
}

