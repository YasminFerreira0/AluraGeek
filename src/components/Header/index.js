import './Header.css'

const Header = () => {
    return (
        <section className='header'>
                <img src='./imgs/Logo.png' alt='' className='logo'/>
                <div className='search_bar'>
                    <input type="text" placeholder="O que deseja encontrar?" className='search_bar_input'></input>
                    <button className='search_bar_btn'>
                        <img src="./imgs/Iconebusca.png" alt="Busca" className="barra-pesquisa-lupa__cabecalho"></img>
                    </button>
                    
                </div>
                <button className="botao__cabecalho">Login</button>
        </section>
    );
}

export default Header;
