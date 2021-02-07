/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScrenn from '../../source/screens/Quiz';
import db from '../../db.json';

export default function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScrenn
        externalQuestions={db.questions}
        externalBg={db.bg}
      />

    </ThemeProvider>
  );
}
