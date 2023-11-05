import React from 'react';
import Link from 'next/link';


const Layout = ({children}) => {

    
    return (
        <>
            <header />
            <NavBar />
            <main>
                {children}
            </main>

            <footer />
        </>
    );
};

export default Layout;

const NavBar = () => {
    return (
        <nav>
            <Link href='/'>
                Home
            </Link>
            <Link href='/make-todo'>
                Make Todo
            </Link>
            <Link href='/show-todos'>
                Show Todos
            </Link>
        </nav>

    )

}