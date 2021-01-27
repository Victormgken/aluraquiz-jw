import { delBasePath } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'
import db from '../db.json';
import Widget from '../source/components/Widget/';
import QuizBackground from '../source/components/QuizBackground';
import Footer from '../source/components/Footer';
import Header from '../source/components/Header';
import GitHubCorner from '../source/components/GitHubCorner';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
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
  return (
    <QuizBackground backgroundImage= {db.bg} >
      <Header></Header>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
          <p>{db.description}</p>
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
        <Footer>

        </Footer>
        <GitHubCorner projectUrl=""/>
      </QuizContainer>
    </QuizBackground>
  )
}
