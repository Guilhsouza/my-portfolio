'use client'

import Image from "next/image";
import { useEffect } from "react";
import imagemTeste from '@/icons/imagemTeste.jpg'
import { Kanit } from 'next/font/google'
import styles from '@/css/portfolioImageStyle.module.css'
import githubIcon from '@/icons/github.svg'
import whatsappIcon from '@/icons/whatsapp.svg'
import linkedinIcon from '@/icons/linkedin.svg'
import ScrollArrow from "@/components/Scrollicon";

const kanit = Kanit({ weight: '400' })
const waveEmoji = <span role="img" aria-label="waveHand">👋</span>

export default function Home() {
  return (
    <div id='body' className={`${kanit.className} h-full`}>
      <button className="flex justify-center w-full" onClick={() => {

      }}>Alterar Tema</button>

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
                  <Image alt="GitHub icon" src={githubIcon} width={40} className="rounded-lg" />
                </a>
              </div>
              <div id='wppIcon'>
                <a href="http://wa.me/5512991112772" target="_blank">
                  <Image alt="GitHub icon" src={whatsappIcon} width={40} />
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

      <div className="mt-4 flex justify-center">
        <ScrollArrow />
      </div>
    </div>
  );
}
