'use client'

import Image from "next/image";
import imagemTeste from '@/icons/imagemTeste.jpg'
import { Kanit } from 'next/font/google'
import styles from '@/css/portfolioImageStyle.module.css'
import ScrollArrow from "@/components/Scrollicon";
import tableStyles from '@/css/stacksTableStyles.module.css'
import TableContent from '@/components/TableContent';
import {
  javaIcon, jsIcon, htmlIcon, cssIcon, reactIcon, nextIcon, tailwindIcon, nodeIcon,
  expressIcon, postgresIcon, mongoIcon, dockerIcon, gitHubIcon, gitIcon, postmanIcon,
  wppIcon, linkedinIcon, githubDarkIcon
} from '@/icons/index.js'

const kanit = Kanit({ weight: '400' })
const waveEmoji = <span role="img" aria-label="waveHand">👋</span>

export default function Home() {
  return (
    <div id='body' className={`${kanit.className} h-full`}>

      <button className="flex justify-center w-full">alterar tema</button>

      <div className="flex justify-center w-full my-40">
        <div className="max-w-5xl">
          <div className="text-center">
            <h3 className="text-3xl">Olá! {waveEmoji}</h3>
            <h2 className="text-6xl">Eu me chamo Guilherme Souza</h2>
            <h3 className={"text-3xl text-hotyellow "}>Desenvolvedor Fullstack</h3>
          </div>

          <p className="text-xl mt-16">
            Entusiasta em construir sistemas e criar soluções criativas sempre com foco no usuário final, encontro
            motivação transformando boas ideias em realidade.
          </p>

          <div className="flex justify-between align-middle mt-8">
            <button className="p-3 text-hotyellow border-2 border-solid border-hotyellow">Entre em contato comigo! </button>

            <div id='socialMedias' className="flex gap-3 items-center">
              <div id='linkedinIcon'>
                <a href="https://www.linkedin.com/in/Guilhsouza" target="_blank">
                  <Image alt="GitHub icon" src={linkedinIcon} width={40} className="rounded-lg" />
                </a>
              </div>
              <div id='githubIcon'>
                <a href="https://github.com/Guilhsouza" target="_blank">
                  <Image alt="GitHub icon" src={githubDarkIcon} width={40} className="rounded-lg" />
                </a>
              </div>
              <div id='wppIcon'>
                <a href="http://wa.me/5512991112772" target="_blank">
                  <Image alt="GitHub icon" src={wppIcon} width={40} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            alt="Minha foto"
            src={imagemTeste}
            fill
            priority
            className={`rounded-full border-hotyellow border-2 ${styles.imageShadow}`}
          />
        </div>
      </div>

      <div className="mt-4 mb-32 flex justify-center">
        <ScrollArrow />
      </div>

      <div id="technologies" className="w-full text-center">
        <h3 className="text-4xl mb-12 underline underline-offset-3">Tecnologias e Ferramentas</h3>
        <div className={`flex justify-evenly my-40 py-12 mx-72 gap-6 border-2 rounded-3xl bg-gray-900 ${tableStyles.tableShadow}`}>
          <div>
            <h3 className="text-3xl pb-6 font-semibold">Front-End</h3>
            <div>
              <TableContent alt="htmlIcon" src={htmlIcon} content="HTML" />
              <TableContent alt="cssIcon" src={cssIcon} content="CSS" />
              <TableContent alt="reactIcon" src={reactIcon} content="React.js" />
              <TableContent alt="nextIcon" src={nextIcon} content="Next.js" />
              <TableContent alt="tailwindIcon" src={tailwindIcon} content="Tailwind CSS" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl pb-6 font-semibold">Back-End</h3>
            <div>
              <TableContent alt="nodeIcon" src={nodeIcon} content="Node.js" />
              <TableContent alt="expressIcon" src={expressIcon} content="Express.js" />
              <TableContent alt="postgresIcon" src={postgresIcon} content="PostgreSQL" />
              <TableContent alt="postgresIcon" src={mongoIcon} content="MongoDB" />
              <TableContent alt="javaIcon" src={javaIcon} content="JAVA" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl pb-6 font-semibold">Ferramentas</h3>
            <div>
              <TableContent alt="gitIcon" src={gitIcon} content="Git" />
              <TableContent alt="gitHubIcon" src={gitHubIcon} content="GitHub" />
              <TableContent alt="postmanIcon" src={postmanIcon} content="Postman" />
              <TableContent alt="dockerIcon" src={dockerIcon} content="Docker" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-4xl underline underline-offset-3">Projetos</h3>


        </div>
      </div>
    </div >
  );
}