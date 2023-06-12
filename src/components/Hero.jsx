import { Link } from "react-router-dom";
import Asos from "../assets/pin/ASOS.jpg"
function Hero() {
   return ( 
      <>
            <div className="hero min-h-screen bg-base-200">
               <div className="hero-content flex-col lg:flex-row">
                  <img src={Asos} className="lg:max-w-sm rounded-lg shadow-2xl" />
                  <div>
                     <h1 className="text-8xl font-bold">New Offers and Models other than Your style!</h1>
                     <p className="py-6">Get exclusive clothes, dresses and suits by shopping with me. It's the fastest way to complete your look and step out like an artist. Feel free to coordinate your outfits. There are full sizes from small to large if you want to try on. Just start now .</p>
                     <Link to="/login" > <button className="btn btn-primary">Get Started</button> </Link>
                  </div>
               </div>
            </div>
      </>
    );
}

export default Hero;