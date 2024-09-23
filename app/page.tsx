import Background_img from "./components/Background_img"
import Contact from "./components/Contact"
import Latestproperty from "./components/Latestproperty"
import Latestrental from "./components/Latestrental"
import Realtors from "./components/Realtors"
import Reviews from "./components/Reviews"



const Homepage = () => {


  return (
    <div>
      <Background_img />
      <Latestproperty />
      <Latestrental />
      <Realtors />
      <Reviews />
      <Contact />
    </div>
  )
}

export default Homepage
