function Header() {
    return (
        <nav className='deep-purple darken-3'>
            <div className='nav-wrapper'>
                <a href='https://github.com/soosl' className='brand-logo'>
                    React Shop
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/soosl/react-shop'
                            target='_blank'
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
