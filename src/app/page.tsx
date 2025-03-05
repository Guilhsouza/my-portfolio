'use client'

import Image from "next/image";
import { Kanit } from 'next/font/google';
import styles from '@/css/portfolioImageStyle.module.css';
import ScrollArrow from "@/components/Scrollicon";
import tableStyles from '@/css/stacksTableStyles.module.css';
import TableContent from '@/components/TableContent';
import ProjectCard from "@/components/ProjectsCard";
import GenericIcon from "@/components/stacksIcons/GenericIcon";

import {
  imagemTeste, imperioEstoqueCamasEColchoes, imperioEstoqueSofas, imperioSofasMenu
} from '@/images/index';
import {
  javaIcon, htmlIcon, cssIcon, reactIcon, nextIcon, tailwindIcon, nodeIcon,
  expressIcon, postgresIcon, mongoIcon, dockerIcon, gitHubIcon, gitIcon, postmanIcon,
  wppIcon, linkedinIcon, githubDarkIcon
} from '@/icons/index.js';

const kanit = Kanit({ weight: '400', subsets: ['latin'] })
const waveEmoji = <span role="img" aria-label="waveHand">👋</span>

export default function Home() {
  return (
    <div id='body' className={`${kanit.className} h-full`}>

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
                  <Image alt="Linkedin icon" src={linkedinIcon} width={40} className="rounded-lg" />
                </a>
              </div>
              <div id='githubIcon'>
                <a href="https://github.com/Guilhsouza" target="_blank">
                  <Image alt="GitHub icon" src={githubDarkIcon} width={40} className="rounded-lg" />
                </a>
              </div>
              <div id='wppIcon'>
                <a href="http://wa.me/5512991112772" target="_blank">
                  <Image alt="Wpp icon" src={wppIcon} width={40} />
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
        <div className={`flex justify-evenly my-32 py-12 mx-72 gap-6 border-2 rounded-3xl bg-gray-900 ${tableStyles.tableShadow}`}>
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
      </div>

      <div>
        <h3 className="text-4xl underline underline-offset-3 text-center">Projetos</h3>
        <div className="my-32 grid grid-cols-2 gap-y-16 justify-items-center">
          <ProjectCard
            headerContent={`Império Sofás Estoque`}
            bodyImage={imperioSofasMenu}
            image2={imperioEstoqueSofas}
            image3={imperioEstoqueCamasEColchoes}
            altImage='Menu Império Sofás'
            stacks={
              [
                <GenericIcon bgColor={'#61DAFB'} fontColor="#030609" iconName="React" key={1} />,
                <GenericIcon bgColor={'#030609'} fontColor="#fff" iconName="NextJS" key={2} />,
                <GenericIcon bgColor={'#334155'} fontColor="#fff" iconName="Tailwind CSS" key={3} />,
                <GenericIcon bgColor={'#8CC84B'} fontColor="#030609" iconName="NodeJS" key={4} />,
                <GenericIcon bgColor={'#336791'} fontColor="#fff" iconName="postgreSQL" key={5} />,
              ]}
            description="O Império Sofás Estoque é um sistema baseado no estilo ERP, porém, com uma curva de aprendizado mais simples. 
            O objetivo do projeto é entregar controle e praticidade para o lojista no gerenciamento de vendas e estoque." />

          <ProjectCard headerContent="API de estoque online"
            bodyImage={imagemTeste}
            image2={imagemTeste}
            image3={imagemTeste}
            altImage='Imagem'
            stacks={['card']}
            description="Uma api" />

          <ProjectCard headerContent="Império Sofás Estoque" bodyImage={imagemTeste} image2={imagemTeste} image3={imagemTeste} altImage='Imagem' stacks={['card']}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto." />
          <ProjectCard headerContent="Império Sofás Estoque" bodyImage={imagemTeste} image2={imagemTeste} image3={imagemTeste} altImage='Imagem' stacks={['card']}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto." />
        </div>
      </div>

      <div>
        <h3 className="text-4xl underline underline-offset-3 text-center">Entre em contato comigo!</h3>

      </div>
    </div>
  );
} 
