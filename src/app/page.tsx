'use client'

import '../css/apresentationStyle.css'
import Image from "next/image";
import { Kanit } from 'next/font/google';
import styles from '@/css/portfolioImageStyle.module.css';
import ScrollArrow from "@/components/Scrollicon";
import tableStyles from '@/css/stacksTableStyles.module.css';
import TableContent from '@/components/TableContent';
import ProjectCard from "@/components/ProjectsCard";
import GenericIcon from "@/components/stacksIcons/GenericIcon";
import { useRef } from 'react';
import { TextAnimate } from '@/components/magicui/text-animate';

import {
  imagemTeste, imperioEstoqueCamasEColchoes, imperioEstoqueSofas, imperioSofasMenu,
  postmanApiEstoque, swagger1, swagger2, githubPdv, pdvPostman, prsDoPdv
} from '@/images/index';
import {
  javaIcon, htmlIcon, cssIcon, reactIcon, nextIcon, tailwindIcon, nodeIcon,
  expressIcon, postgresIcon, mongoIcon, dockerIcon, gitHubIcon, gitIcon, postmanIcon,
  wppIcon, linkedinIcon, githubDarkIcon
} from '@/icons/index.js';
import { BlurFade } from '@/components/magicui/blur-fade';

const kanit = Kanit({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const refContact = useRef<HTMLDivElement | null>(null)

  const scrollToContactSection = () => {
    refContact.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`${kanit.className} w-full min-h-screen`}>

      <section className="apresentation">
        <div className="max-w-5xl mx-4">
          <div className="text-center">
            <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl">
              <TextAnimate once duration={0.4}>
                Olá! 👋
              </TextAnimate>
            </h3>
            <h2 className="text-xl md:text-3xl lg:text-3xl xl:text-5xl">
              <TextAnimate once duration={0.4 * 2}>
                Eu me chamo Guilherme Souza
              </TextAnimate>
            </h2>
            <h3 className={"text-xl md:text-2xl lg:text-3xl text-hotyellow"}>
              <TextAnimate once duration={0.4 * 2}>
                ‎ Desenvolvedor Fullstack
              </TextAnimate>
            </h3>
          </div>

          <TextAnimate animation='slideUp' by='word' duration={0.4 * 3} once className="text-md mt-16 lg:text-lg xl:text-xl text-justify">
            Entusiasta em construir sistemas e criar soluções criativas sempre com foco no usuário final, encontro
            motivação transformando boas ideias em realidade.
          </TextAnimate>

          <BlurFade inView delay={0.4} blur='1px' direction='up'>
            <div className="flex flex-col sm:flex-row items-center w-full justify-between align-middle mt-6 md:mt-8">
              <button className="btnStyle"
                onClick={scrollToContactSection}>Entre em contato comigo!</button>

              <div id='socialMedias' className="flex gap-3 items-center mt-4 md:mt-0">
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
          </BlurFade>
        </div>

        <BlurFade inView delay={0.4} className={`${styles.imageWrapper}`} blur='1px' direction='up'>
          <Image
            alt="Minha foto"
            src={imagemTeste}
            fill
            priority
            className={`rounded-full border-hotyellow border-2 ${styles.imageShadow}`}
          />
        </BlurFade>

      </section >

      <BlurFade inView delay={0.4} blur='2px' direction='down' className="mt-4 mb-36 flex justify-center">
        <ScrollArrow />
      </BlurFade>

      <section id="technologies" className="w-full text-center">
        <BlurFade inView delay={0.2} blur='1px' direction='up'>
          <h3 className="text-3xl sm:text-4xl mx-4 mb-12 underline underline-offset-3">
            Tecnologias e Ferramentas
          </h3>
        </BlurFade>

        <BlurFade inView delay={0.4} blur='1px' direction='up'>
          <div className='flex justify-center'>
            <div className={`mx-8 bg-gray-900 ${tableStyles.tableShadow} ${tableStyles.tableStyle}`}>
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
              <hr />
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
              <hr />
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
        </BlurFade>
      </section>

      <section>
        <BlurFade inView delay={0.2} blur='1px' direction='up'>
          <h3 className="text-3xl sm:text-4xl mx-4 underline underline-offset-3 text-center">Projetos</h3>
        </BlurFade>

        <BlurFade inView delay={0.4} blur='1px' direction='up'>
          <div className="my-32 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 mx-8 justify-items-center">
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
        </BlurFade>
      </section>

      <section ref={refContact} className='flex flex-col justify-center items-center mx-4 md:mx-8'>

        <BlurFade inView delay={0.2} blur='1px' direction='up'>
          <h3 className="text-3xl sm:text-4xl mx-4 underline underline-offset-3 text-center">Entre em contato comigo!</h3>
        </BlurFade>

        <BlurFade inView delay={0.4} blur='1px' direction='up'
          className="items-center max-w-[1200px] bg-gray-900 p-4 rounded-lg w-full my-32"
        >
          <form action="https://api.staticforms.xyz/submit" method="post">

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className='pb-1 '>Nome</label>
                <input type="text" name="name" id="name" placeholder="Digite o seu nome" autoComplete="off" required />
              </div>
              <div className=" flex flex-col w-full">
                <label htmlFor="email" className='pb-1 '>Email</label>
                <input type="email" name="email" id="email" placeholder="Digite o seu email" required />
              </div>
            </div>

            <div className="mt-8 flex flex-col">
              <label htmlFor="message" className='pb-1 '>Mensagem</label>
              <textarea rows={6} name="message" id="message" placeholder="Tudo bem?! Vi o seu perfil..." required />
            </div>

            <button type="submit"
              className="btnContactMe">Enviar Mensagem!</button>

            <input type="hidden" name="accessKey" value="8acca2e0-0223-4fdd-b3bd-c6271ac665f3" />
            <input type="hidden" name="redirectTo" value={"https://my-portfolio-nu-orpin-23.vercel.app/thanks"} />
          </form>
        </BlurFade>
      </section>
    </div >
  );
} 
