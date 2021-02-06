import { delBasePath } from 'next/dist/next-server/lib/router/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../source/components/Widget';
import Link from '../source/components/Link';
import QuizBackground from '../source/components/QuizBackground';
import Footer from '../source/components/Footer';
import GitHubCorner from '../source/components/GitHubCorner';
import Input from '../source/components/Input';
import Button from '../source/components/Button';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const BackgroundImage = styled.div`
   background-image: url(${db.bg});
   flex: 1;
   background-size: cover;
   background-position: center;
 `;

export const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
}
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('fazendo uma submit pelo react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(e) => { setName(e.target.value); }}
                placeholder="Coloca teu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Bora Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem impsum dolor isit mesen...</p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="" />
      </QuizContainer>
    </QuizBackground>
  );
}
