import logo from '../../Assets/img/Logo.svg'

import './style.css'

function Header() {
    return (
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.instagram.com/_deivison_santtos.ig">@_deivison_santtos.ig</a>
                    </p>
                </div>
            </header>
    )
}

export default Header
