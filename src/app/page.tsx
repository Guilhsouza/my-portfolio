'use client'

import '../css/formStyles.css'
import Image from "next/image";
import { Kanit } from 'next/font/google';
import styles from '@/css/portfolioImageStyle.module.css';
import ScrollArrow from "@/components/Scrollicon";
import tableStyles from '@/css/stacksTableStyles.module.css';
import TableContent from '@/components/TableContent';
import ProjectCard from "@/components/ProjectsCard";
import GenericIcon from "@/components/stacksIcons/GenericIcon";

import {
  imagemTeste, imperioEstoqueCamasEColchoes, imperioEstoqueSofas, imperioSofasMenu,
  postmanApiEstoque, swagger1, swagger2, githubPdv, pdvPostman, prsDoPdv
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

      <section className="flex justify-center w-full my-40">
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
      </section>

      <div className="mt-4 mb-36 flex justify-center">
        <ScrollArrow />
      </div>

      <section id="technologies" className="w-full text-center">
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
      </section>

      <section>
        <h3 className="text-4xl underline underline-offset-3 text-center">Projetos</h3>
        <div className="my-32 grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-1 gap-16 mx-8 justify-items-center">
          <ProjectCard
            headerContent={`Império Sofás Estoque`}
            bodyImage={imperioSofasMenu}
            image2={imperioEstoqueSofas}
            image3={imperioEstoqueCamasEColchoes}
            altImage='Menu Império Sofás'
            stacks={
              [
                <GenericIcon bgColor={'#61DAFB'} fontColor={"#030609"} iconName="React" key={1} />,
                <GenericIcon bgColor={'#030609'} fontColor={"#fff"} iconName="NextJS" key={2} />,
                <GenericIcon bgColor={'#334155'} fontColor={"#fff"} iconName="Tailwind CSS" key={3} />,
                <GenericIcon bgColor={'#8CC84B'} fontColor={"#030609"} iconName="NodeJS" key={4} />,
                <GenericIcon bgColor={'#336791'} fontColor={"#fff"} iconName="postgreSQL" key={5} />,
              ]}
            description="O Império Sofás Estoque é um sistema real utilizado pela loja, baseado no estilo ERP, 
            o projeto entrega controle e praticidade para o lojista no gerenciamento de vendas e estoque, porém, 
            com uma curva de aprendizado mais simples." />

          <ProjectCard headerContent="API de estoque online"
            bodyImage={postmanApiEstoque}
            image2={swagger1}
            image3={swagger2}
            altImage='Imagem do postman'
            stacks={[
              <GenericIcon bgColor={'#F7DF1E'} fontColor={"#030609"} iconName="JavaScript" key={11} />,
              <GenericIcon bgColor={'#8CC84B'} fontColor={"#030609"} iconName="NodeJS" key={12} />,
              <GenericIcon bgColor={'#000'} fontColor={"#fff"} iconName="Express.js" key={13} />,
              <GenericIcon bgColor={'#000'} fontColor={"#fff"} iconName="JWT (JSON Web Token)" key={14} />,
              <GenericIcon bgColor={'#C21325'} fontColor={"#fff"} iconName="JEST" key={15} />,
              <GenericIcon bgColor={'#85EA2D'} fontColor={"#030609"} iconName="Swagger" key={17} />,
              <GenericIcon bgColor={'#FF6C37'} fontColor={"#fff"} iconName="Postman" key={18} />,
              <GenericIcon bgColor={'#336791'} fontColor={"#fff"} iconName="postgreSQL" key={19} />,

            ]}
            description={`A principal ideia deste projeto é oferecer operações CRUD de usuário e estoque em um ambiente online.
              Os usuários podem criar uma conta e fazer operações de estoque, como criar e excluir tabelas, editar os produtos e fazer buscas específicas.
              Todo esse sistema foi desenvolvido no modelo RESTFUL com autenticação ao usuário e testes unitários.`} />

          <ProjectCard
            headerContent="API PDV Frente de Caixa"
            bodyImage={pdvPostman}
            image2={githubPdv}
            image3={prsDoPdv}
            altImage='Imagem'
            stacks={[
              <GenericIcon bgColor={'#F7DF1E'} fontColor={"#030609"} iconName="JavaScript" key={21} />,
              <GenericIcon bgColor={'#8CC84B'} fontColor={"#030609"} iconName="NodeJS" key={22} />,
              <GenericIcon bgColor={'#000'} fontColor={"#fff"} iconName="Express.js" key={23} />,
              <GenericIcon bgColor={'#000'} fontColor={"#fff"} iconName="JWT (JSON Web Token)" key={24} />,
              <GenericIcon bgColor={'#336791'} fontColor={"#fff"} iconName="postgreSQL" key={25} />,

            ]}
            description="O PDV é um sistema de frente de caixa desenvolvido em conjunto com alguns colegas. Ele conta
            com operações de vendas, gerenciamento de clientes, usuários e produtos. Além da capacidade de adicionar 
            produtos ao banco de dados, incluindo o envio de imagens associadas, também conta com um sistema de verificação por e-mail 
            após a conclusão de uma compra." />
        </div>
      </section>

      <section className='flex flex-col justify-center items-center w-full'>
        <h3 className="text-4xl underline underline-offset-3 text-center mb-32">Entre em contato comigo!</h3>
        <div className="items-center max-w-[1200px] bg-gray-900 p-5 rounded-lg w-full">
          <form action="https://api.staticforms.xyz/submit" method="post" className='w-full'>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="Digite o seu nome" autoComplete="off" required />
              </div>
              <div className=" flex flex-col w-full">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Digite o seu email" required />
              </div>
            </div>

            <div className="mt-8 flex flex-col">
              <label htmlFor="message">Mensagem</label>
              <textarea rows={6} name="message" id="message" placeholder="Tudo bem?! Vi o seu perfil..." required />
            </div>

            <button type="submit"
              className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition">Enviar Mensagem!</button>

            <input type="hidden" name="accessKey" value="8acca2e0-0223-4fdd-b3bd-c6271ac665f3" />
          </form>
        </div>
      </section>
    </div>
  );
} 
