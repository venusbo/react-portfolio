import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <div className="textContainer">
                <h2>John Kim</h2>
                <h1>Front-End Developer</h1>
                <div className="buttons">
                    <button>latest project</button>
                    <button>contact me</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero