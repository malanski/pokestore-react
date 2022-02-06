import '../../assets/scss/Contact.scss';


export const Contact = (props) => {
    return(
        <div className="contact">
            <h1>Contact</h1>
                <form>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                    <textarea></textarea>
                    <button>Send</button>
                </form>

                <h3>Meus Projetos e Estudos em Desenvolvimento</h3>
                
                <section class="projetos">

                    <table class="project">
                        
                        <th>
                        <span class="green"
                            >Game<br />
                            GessingColor</span
                        ><br />
                        <span class="escola">Adivinhe a Cor pelo n° RGB</span>
                        </th>
                        <tr>
                        <td>
                            Cores Primarias Adivinhação <br />
                            HTML5, CSS3 SASS <br />
                            JavaScript <br />
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <a href="https://malanski.github.io/GessingColorGame/" target="_blank" title="Color Gessing Game">
                            <img src="https://malanski.github.io/MyResume/colorGame-01.png"alt="Color Gessing Game"/>
                            </a>
                        </td>
                        </tr>
                    </table>

                    <table class="project">
                        <th>
                        <span class="green">Cron</span>
                        <br />
                        <span class="escola">Cronometro React App</span>
                        </th>
                        <tr>
                        <td>
                            Cronometro <br />
                            React App <br />
                            JavaScript <br />
                            HTML5, CSS3 SASS <br />
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <a href="https://malanski.github.io/cron/" target="_blank" title="Cronometer React App">
                            <img src="https://malanski.github.io/MyResume/cron-01.png"alt="Cron React-App"/>
                            </a>
                        </td>
                        </tr>
                    </table>

                    <table class="project">
                        <th>
                        <span class="green">Pokémon Card Game Store</span>
                        <br />
                        <span class="escola">Ecommerce JavaScript</span>
                        </th>
                        <tr>
                        <td>
                            Ecommerce <br />
                            JavaScript <br />
                            HTML5, CSS3 SASS <br />
                            Vanilla code<br />
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <a href="https://malanski.github.io/pokeLoja2/" target="_blank" title="Ecommerce JavaScript">
                            <img src="https://malanski.github.io/MyResume/pokelojaCard-01.png"alt="Ecommerce JavaScript"/>
                            </a>
                        </td>
                        </tr>
                    </table>

                    <table class="project">
                        <th>
                        <span class="green">Calculator</span>
                        <br />
                        <span class="escola">Calculadora JavaScript</span>
                        </th>
                        <tr>
                        <td>
                            Calculadora <br />
                            JavaScript <br />
                            HTML5, CSS3 SASS <br />
                            Vanilla code<br />
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <a href="https://malanski.github.io/CalculatorX/" target="_blank" title="Calculator React App">
                            <img src="https://malanski.github.io/MyResume/calculatorx-01.png"alt="Calculadora JavaScript"/>
                            </a>
                        </td>
                        </tr>
                    </table>

                </section>

        </div>
    );
}