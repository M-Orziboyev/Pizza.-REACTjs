import pizzaImage from '../assets/pizza.png';

const Header = () => {
    return (
        <div className="header">
            <div className="overlay"></div>
            <div className="image__area">
                <img
                    className='pizza__image'
                    src={pizzaImage}
                    alt="pizza"
                />
            </div>
            <div className='texts__area'>
                <h2 className='texts__title'>LA CARAVANA</h2>
                <div className='yellow__line'></div>
                <p className='texts__desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus ac placerat dui. Vestibulum ut felis et lorem porta
                    congue vitae nec turpis.
                    Aliquam quis leo at nunc tempor faucibus et ac massa
                </p>
            </div>
        </div>
    );
};

export default Header;