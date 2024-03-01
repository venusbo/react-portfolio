import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return (
        <div className="navbar">
            
            
            <div className="wrapper">
                <Sidebar/>
                {/* <span>venusbo</span> */}
                
                <div className="social">
                    <a href="https://www.linkedin.com/in/john-kim-45b133227/"><img src="/linkedin.png" alt="" /></a>
                    <a href="https://github.com/venusbo/"><img src="/github.png" alt="" /></a>
                    <a href="https://soundcloud.com/johnyein"><img src="/soundcloud.png" alt="" /></a>
                </div>
            </div>
        </div>

    )
}

export default Navbar