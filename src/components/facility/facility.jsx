import "./facility.scss"
import { FacilityList } from './const'

function Facility(){
    return (
      <div className="facility">
      <div className="container">
        <h2 className="facility__title title">
        FACILITIES
        </h2>
        <p className="facility__description description">We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so 
that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
and our modern luxury resort facilities will help you enjoy the best of all. </p>
       
          {FacilityList.map((item) => {
            return (
                <div className="facility__content">
                <img className="facility__img" src={item.img} alt="" />
                <div className="facility__name">{item.name}</div>
                </div>
                
            );
          })}
      </div>
    </div>
    )
}
export default Facility