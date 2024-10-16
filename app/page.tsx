//import Image from "next/image";

const component1=()=>{
  const saludar=()=>{
    //const nombre = document.getElementById('nombre').value;
    //console.log("Hola " + nombre);
  }
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="flex p-3 gap-16 rounded-3xl  text-9xl">Hola</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <span className="flex text-3xl">Soy Jesús Olmos Soler, desarrollador con diversos lenguajes y tecnologías y bla bla bla. Ahora, introduce 
          tu nombre en el recuadro de abajo y ¡clicka!
        </span>
        <input className="text-black block mx-auto p-3 rounded-3xl" type="text" id="nombre" placeholder="Escribe tu nombre aquí" ></input>
        <button /*</main>onClick={saludar}*/ className="flex bg-blue-300 bg-opacity-30 p-4 mx-auto rounded-3xl text-3xl">Enviar</button>
        <a className="flex bg-blue-300 bg-opacity-30 p-5 m-2 rounded-3xl text-5xl" href="/about">About me</a>
        <a className="flex bg-blue-300 bg-opacity-30 p-5 m-2 rounded-3xl text-5xl" href="/pricing">Pricing</a>
        <a className="flex bg-blue-300 bg-opacity-30 p-5 m-2 rounded-3xl text-5xl" href="/contact">Contact</a>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Borramos el footer.</p>
      </footer>
    </div>
  );
}
