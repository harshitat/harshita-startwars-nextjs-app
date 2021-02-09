import Link from 'next/link'
const navs = [
    {
        label: 'People',
        linkTo: '/'
    },
    {
        label: 'Planets',
        linkTo: '/planets'
    },
    {
        label: 'Species',
        linkTo: '/species'
    }
]
function Header(props: any) {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">StarWars</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    {
                        navs.map((nav, i) => {
                            return (
                                <li className="nav-item" key={i}>
                                    <Link href={nav.linkTo}><a className={`nav-link ${props.currentPathName?.includes(nav.linkTo) ? 'active' : ''}`}>{nav.label}</a></Link>
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
        </div>
    </nav >
}

export default Header
