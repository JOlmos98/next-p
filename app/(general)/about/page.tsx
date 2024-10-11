import type { Metadata } from "next";




export const metadata: Metadata = {
 title: 'About JOS',
 description: 'SEO Title',
 creator: 'JOS',
};

export default function AboutPage(){
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <span>Soy un humilde programador de 26 años que se inició en el sector hará 
            algo más de un año. Por suerte o por desgracia no descubrí hasta el 2023 que 
            realmente me pasionaba este mundo, así que me sumergí de lleno en él. 
            Actualmente estoy trabajando con tecnologías como TypeScript, React, Next.js, 
            Prisma, Tauri y Linux.

            En su día aprendí a programar con Java, así que puedo decir que estoy curtido en un lenguaje 
            mucho más verboso que TypeScript.
          </span>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p>Borramos el footer.</p>
        </footer>
      </div>
    )
}