import {useRef} from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "100%"])
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    const yStars = useTransform(scrollYProgress, [0 , 1], ["-10%", "30%"])

    return (
        <motion.div className="parallax" 
        style={{
            background:type==="About me" 
            ? "linear-gradient(180deg, #2bd8ff70, #282a36)" 
            : "linear-gradient(180deg, #2bd8ff70 #282a36)",
        }}
    >    
        <motion.h1>
            {type==="About me" ? "Who Am I?" : "What do I do?"} </motion.h1>
            <motion.div style={{ y: yText}} className = "textcontainer">
                <h2>
                    {type==="About me" ? "An Aspiring Software Developer and UI/UX Designer currently Studying Computing at UNSW"
                    : "I Deisgn, Build and Deploy exciting, responsive Websites."}
                </h2>
            </motion.div>
            


            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: yBg }} className="planets"></motion.div>
            <motion.div style={{ x: yStars }} className="stars"></motion.div> 
        </motion.div>
    )
}

export default Parallax