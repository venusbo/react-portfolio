import "./hero.scss"
import {motion} from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration:1,
      staggerChildren: 0.1

    }
  }
}

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div
              className="textContainer" 
              variants={textVariants} 
              initial="initial" 
              animate="animate"
           >
              <motion.h2 variants={textVariants}>John Kim</motion.h2>
              <motion.h1 variants={textVariants}>
                Web Developer + UI/UX Designer
              </motion.h1>


                <motion.div variants = {textVariants} className="buttons">
                  <motion.button variants = {textVariants}>
                    latest project
                  </motion.button>
                  <motion.button variants = {textVariants}>
                    Contact me
                  </motion.button>
                  <motion.button variants = {textVariants}>
                    More about me
                  </motion.button>
                </motion.div>
              </motion.div>

          </div>
      </div>
  );
};

export default Hero