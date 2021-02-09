import React from 'react';

import Header from '../Header'

function Layout(props: any) {
    return (
        <div className="container">
            <Header {...props} />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout