import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <h1 className="banner__title">Dezembro Promocional</h1>
                <p className="banner__text">Produtos selecionados com 33% de desconto</p>
                <button className="banner__button" >Ver Consoles</button>
            </div>
        </div>
    );
}

export default Banner;