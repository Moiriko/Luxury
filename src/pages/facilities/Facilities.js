import Hero from '../../components/hero';
import Testimonials from '../../components/testimonials';
import Facility from '../../components/facility/facility';

function Facilities(){
    return(
        <div>
            <Hero classHero='facilities' />
            <Facility/>
            <Testimonials/>
        </div>
    )
}

export default Facilities
