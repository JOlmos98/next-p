

export const Navbar=()=>{

    //console.log('Creamos el navbar, esto, como se ejcuta del lado del servidor, \naparecerá al arrancar la aplicación, en la consola, y no en la consola de la web (cliente).')

    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <span>Home</span>

            <div className="flex flex-1"></div>

            <a className="mr-2" href="/about">About me</a>
            <a className="mr-2" href="/contact">Contact</a>
            <a className="mr-2" href="/pricing">Pricing</a>

        </nav>
    )
}