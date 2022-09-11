import aboutImage from '../assets/restoran.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className='left__side'>
                <h3 className='about__title'>About us</h3>
                <div className='yellow__line'></div>
                <p className='about__desc'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting
                    remaining essentially unchanged.
                </p>
                <div className='button__area'>
                    <a href='/'>
                        Read more
                    </a>
                </div>
            </div>
            <div className='right__side'>
                <img 
                    src={aboutImage}
                    alt="about image"
                />
            </div>
        </div>
    );
};

export default About;