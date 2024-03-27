import "./portfolio.scss"

const Portfolio = () => {
    return (
        <div classname="portfolio">
            <h1 class="heading">ScribeFly.AI</h1>
            <a href='https://scribefly.pages.dev'><img src="/scribefly.png" alt="" class='screenshot'/></a>
            <h2 class="description"> ScribeFly is an ai powered transcript to SOAP note formatter, by using an audio to text converter and ScribeFlying the transcription you will get an AI generated formatting in the SOAP medical format. With only the bits that matter.
                The site was made with React + Vite and backend handled with Express and mongodb. AI was handled with Llama API
                </h2>
        </div>
    )

    }
export default Portfolio
