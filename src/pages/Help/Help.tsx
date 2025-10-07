// Import Style
import { Link } from "react-router";
import style from "./Help.module.css"


const GitHubSvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" fill="black">
    <path d="m46.1 0c-25.5 0-46.1 20.6-46.1 46.1 0 20.4 13.2 37.7 31.5 43.8 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.7-.1-8.6-11.6 2.1-14.6-2.8-15.5-5.4-.5-1.3-2.8-5.4-4.7-6.5-1.6-.9-3.9-3-.1-3.1 3.6-.1 6.2 3.3 7.1 4.7 4.2 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.2-10.3-1.2-21-5.1-21-22.8 0-5 1.8-9.2 4.7-12.4-.5-1.2-2.1-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.6-1.6 11.5-1.6s7.8.5 11.5 1.6c8.8-6 12.7-4.7 12.7-4.7 2.5 6.3.9 11.1.5 12.2 2.9 3.2 4.7 7.3 4.7 12.4 0 17.7-10.8 21.6-21.1 22.8 1.7 1.4 3.1 4.2 3.1 8.5 0 6.2-.1 11.1-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.2-6.1 31.4-23.4 31.4-43.8.3-25.4-20.4-46-45.9-46z"></path>
</svg>

function Help() {
    return (
        <div className={style.help}>
            <span>
                <p>Proyecto académico inspirado en Mercado Libre. </p>
                <p> No tiene fines comerciales, ni está afiliado a dicha empresa.</p>
            </span>
            <span className={style.important}>
                <p>Al tratarse de un entorno de simulación, algunas funciones no estarán disponibles.</p>
            </span>

            <svg className={style.svgDevelopment} id="layer1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
            <path
                d="M7.143 9.698c-.092.092-.143.215-.143.346s.051.253.143.345l2.734 2.734-.707.707-2.734-2.734c-.281-.281-.436-.655-.436-1.052s.155-.771.436-1.053l2.778-2.777.707.707zm7.003 3.448.707.707 2.757-2.757c.58-.58.58-1.524 0-2.105l-2.801-2.801-.707.707 2.801 2.801c.191.19.191.5 0 .691zm9.854.354c0 .668-.26 1.295-.732 1.768l-8.732 8.732h-3.536v-3.535l8.732-8.732c.943-.944 2.592-.944 3.535 0 .472.472.732 1.1.732 1.768zm-1 0c0-.4-.156-.777-.439-1.061-.566-.566-1.555-.566-2.121 0l-8.439 8.439v2.121h2.122l8.439-8.439c.283-.283.439-.66.439-1.061zm-13.293 3.5-1-1h-5.707v-12h18v5.073c.167-.018.331-.049.5-.049s.333.03.5.049v-6.073h-20v13h-2v2.5c0 1.379 1.122 2.5 2.5 2.5h6.5v-1h-6.5c-.827 0-1.5-.673-1.5-1.5v-1.5h7.293l1 1h1.344l1-1z"
                fill="currentColor"
            />
            </svg>


            <p>Desarrollado por<a href="https://github.com/JoseDuarte99" target="_blank">{GitHubSvg} Jose Duarte</a> como parte del programa INFORMATORIO Chaco 2025.</p> 
            <span>© Todos los derechos reservados</span> 

            <Link to="/"> Ir a la página principal</Link>
        </div>
    );
};



export default Help;
