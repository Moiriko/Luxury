// import herobg from '../../assest/img/hero1.png';
import Footer from '../../components/footer';
import Hero from '../../components/hero/index';
import Room from '../../components/room/room';
import Testimonials from '../../components/testimonials';


function Home (){
 return(
     <div>
         <Hero/>
         <Room/>
         <Testimonials/>
         <Footer/>
     </div>
 )
}

export default Home
