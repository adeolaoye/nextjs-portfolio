import React from 'react'
import { SiCss3, SiJavascript } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaReact, FaHtml5 } from "react-icons/fa";

export default function Skills() {
    return (
        <section className='skills-wrapper' id='skills'>
            <FaHtml5 className='skills-icon' />
            <SiCss3 className='skills-icon' />
            <SiJavascript className='skills-icon' />
            <BsFillBootstrapFill className='skills-icon' />
            <FaReact className='skills-icon' />
        </section>
    )
}