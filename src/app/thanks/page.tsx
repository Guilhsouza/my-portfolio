import { Kanit } from 'next/font/google';
import '../../css/apresentationStyle.css'
const kanit = Kanit({ weight: '400', subsets: ['latin'] })

export default function thanks() {
    return (
        <>
            <div className={`${kanit.className} flex flex-col justify-center items-center h-screen w-full`}>
                <h2 className='text-3xl md:text-5xl mb-3 mx-4 text-center'>Muito obrigado pela mensagem!</h2>
                <p className='text-xl md:text-2xl text-hotyellow mb-12 mx-4 text-center'>Em breve retornarei o contato</p>
                <a href="https://my-portfolio-nu-orpin-23.vercel.app/"
                    className="btnStyle text-center text-lg">
                    Voltar ao portfólio
                </a>
            </div>
        </>
    )
}