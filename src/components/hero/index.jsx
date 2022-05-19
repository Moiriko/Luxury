import './hero.scss'
function Hero({classHero = ''}) {
    return(
            <div className={`hero ${classHero}`}>
            <div className="container">
            <div className="col-7">
                <p className="hero__text">WELCOME TO</p>
                <p className="hero__text">LUXURY</p>
                <p className="hero__text">HOTELS</p>
                <p className="hero__text">Book your stay and enjoy Luxury
redefined at the most affordable rates.</p>
            </div>
            <div className="hero__center">
                <button className="hero__button">
                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8333 0H15.1666V2.33333H12.8333V0Z" fill="white"/>
<path d="M19.8333 0H22.1666V2.33333H19.8333V0Z" fill="white"/>
<path d="M5.83325 0H8.16658V2.33333H5.83325V0Z" fill="white"/>
<path d="M26.8333 2.33331H22.1667V5.83331H19.8333V2.33331H15.1667V5.83331H12.8333V2.33331H8.16667V5.83331H5.83333V2.33331H1.16667C0.857247 2.33331 0.560501 2.45623 0.341709 2.67502C0.122916 2.89381 0 3.19056 0 3.49998L0 24.5C0 24.8094 0.122916 25.1061 0.341709 25.3249C0.560501 25.5437 0.857247 25.6666 1.16667 25.6666H26.8333C27.1427 25.6666 27.4395 25.5437 27.6583 25.3249C27.8771 25.1061 28 24.8094 28 24.5V3.49998C28 3.19056 27.8771 2.89381 27.6583 2.67502C27.4395 2.45623 27.1427 2.33331 26.8333 2.33331ZM21.4887 17.2827L19.8333 16.1V21C19.8333 21.3094 19.7104 21.6061 19.4916 21.8249C19.2728 22.0437 18.9761 22.1666 18.6667 22.1666H15.75V17.5C15.75 17.1906 15.6271 16.8938 15.4083 16.675C15.1895 16.4562 14.8927 16.3333 14.5833 16.3333H13.4167C13.1072 16.3333 12.8105 16.4562 12.5917 16.675C12.3729 16.8938 12.25 17.1906 12.25 17.5V22.1666H9.33333C9.02391 22.1666 8.72717 22.0437 8.50837 21.8249C8.28958 21.6061 8.16667 21.3094 8.16667 21V16.1L6.51146 17.2827L5.15521 15.3839L13.3219 9.5506C13.5206 9.4113 13.7573 9.33657 14 9.33657C14.2427 9.33657 14.4794 9.4113 14.6781 9.5506L22.8448 15.3839L21.4887 17.2827Z" fill="white"/>
</svg>
        <p className="hero__button__name">BOOK NOW</p>
                </button>
            <a className="hero__scroll" href="#footer">
                <p>Scroll</p>
                <svg className="hero__scroll__img" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.5 61C23.4649 60.9939 16.6481 58.5566 11.204 54.1008C5.75985 49.6451 2.02294 43.4447 0.626053 36.5497C-0.770833 29.6547 0.258157 22.4888 3.53878 16.2655C6.8194 10.0421 12.15 5.14381 18.628 2.40002C26.056 -0.616 34.3727 -0.58696 41.7795 2.48086C49.1863 5.54868 55.0879 11.4087 58.208 18.7936C61.328 26.1786 61.4158 34.4949 58.4524 41.944C55.4889 49.3932 49.7124 55.3765 42.372 58.6C38.6165 60.1907 34.5785 61.007 30.5 61ZM18.277 20.755L13.26 25.655L30.1 42.1L46.941 25.65L41.924 20.75L30.1 32.3L18.277 20.755Z" fill="white"/>
</svg>

            </a>
            </div>
            </div>

            </div>
        
    )
}
export default Hero