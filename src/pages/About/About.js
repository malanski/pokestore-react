import '../../assets/scss/About.scss';


export const About = (props) => {
    return(
        <div className="about">
            <div className='about-title'>
                <h1>About</h1>
                <p>Este projecto foi desenvolvido com React, JavaScript e API.</p>
                <p>Com Objetivo focado na Construção de Aplicações Web. </p>
                <p>Também utiliza as tecnologias Git, CSS3, SASS e HTML5.</p>
                <h3>Desenvolvido por Ulisses Malanski</h3>
                <h2>My Resume</h2>
            </div>
            <iframe src="https://malanski.github.io/MyResume/" title="My Resume"></iframe>
        </div>

    )
}