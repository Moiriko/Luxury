import { RoomList } from './const'
import "./room.scss"
import { Button } from '../buttons/btn'

function Room(){
    return (
      <div className="room">
      <div className="container">
        <h2 className="room__title">
          All our room types are including complementary breakfast
        </h2>
       
          {RoomList.map((item) => {
            return (
              <div className="room__main-row">
                <div className="col-5 room__row">
                  <h4 className="room__subtitle">{item.title}</h4>
                  <p className="room__text">{item.desciption}</p>
                    <Button name="EXPLORE"/>
                </div>
                <div className="col-6 room__img">
                  <img src={item.img} alt="" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
    )
}
export default Room