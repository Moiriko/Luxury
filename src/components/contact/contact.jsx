import "./contact.scss"
// 
function Contact(){
    return (
      <div className="contact">
          <h2 className="contact__title">
        CONTACT-US
        </h2>
      <div className="container">
        <div className="contact__white">
           <div className="col-12">
           <h3 className="title">WE ARE HERE FOR YOU</h3>
            <p className="description">At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, 
please forward it to our support desk and we will get back to you as soon as possible.</p>
           </div>
           <div className="row">
           <div className="col-8 column">
               <span className="contact__adress">497 Evergreen Rd. Roseville,</span>
                <span className="contact__adress">CA 95673</span>
                <a className="contact__map" href="https://goo.gl/maps/jRXpGUAYXRTQP4sv7">View map <svg className="contact__arrow" width="84" height="38" viewBox="0 0 84 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M82.7678 20.7678C83.7441 19.7915 83.7441 18.2085 82.7678 17.2322L66.8579 1.32233C65.8816 0.34602 64.2986 0.34602 63.3223 1.32233C62.346 2.29864 62.346 3.88155 63.3223 4.85786L77.4645 19L63.3223 33.1421C62.346 34.1184 62.346 35.7014 63.3223 36.6777C64.2986 37.654 65.8816 37.654 66.8579 36.6777L82.7678 20.7678ZM0 21.5H81V16.5H0V21.5Z" fill="#14274A"/>
</svg>
</a>
                <span className="contact__phone">Phone: +44 345 678 903</span>
                <span className="contact__email">Email: luxury_hotels@gmail.com</span>
           </div>
           <div className="col-4">
                <form className="contact__column column">
                    <span className="contact__data">Name</span>
                    <input className="contact__area" type="text" cols="60" rows="1"></input>
                    <span className="contact__data">Email Address</span>
                    <input className="contact__area" type="text" cols="60" rows="1"></input>
                    <span className="contact__data">Message</span>
                    <textarea wrap="off" className="contact__area--big" type="text" wrap="hard" rows="10"></textarea>
                    <div className="contact__input"><input className="contact__submit" type="submit" value="Submit"></input></div>
                </form>
           </div>
           </div>
        </div>

      </div>
    </div>
    )
}
export default Contact