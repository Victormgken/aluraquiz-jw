import styled from 'styled-components'

const HeaderWrapper = styled.footer`
  /* background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  } */
`;

export default function Header(props) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <HeaderWrapper {...props}>
        {/* <!-- Primary Meta Tags --> */}
        <title>Perguntas Bíblicas Respondidas</title>
        <meta name="title" content="Perguntas Bíblicas Respondidas" />
        <meta name="description" content="" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz-jw.vercel.app/" />
        <meta property="og:title" content="Perguntas Bíblicas Respondidas" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz-jw.vercel.app/" />
        <meta property="twitter:title" content="Perguntas Bíblicas Respondidas" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />
      </HeaderWrapper>
    );
  } 