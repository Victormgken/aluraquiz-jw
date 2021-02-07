/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {ThemeProveder} from 'styled-components'.
import QuizScrenn from '../../source/screens/Quiz'

export default function QuizDaGaleraPage({dbExterno}) {
  return (
    <ThemeProveder theme={dbExterno.theme}>
      <QuizScrenn
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg} />
    </ThemeProveder>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('__');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then ((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto) 
    return {
      props: {
        dbExterno,
      },
    };
  } catch(err){
    throw new Error(err);
  }
}