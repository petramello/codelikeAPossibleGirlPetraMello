import React from 'react'
import {Container, MainContainer} from "../Home/styled";
import {ProjectCardsDiv} from "./styled";
import Banner from "../../components/Banner";
import CardBox from "../../components/Card";
import strength from "../../assets/imgSwot/yoga-3476318_1280.png";
import weakness from "../../assets/imgSwot/desperate-2672662_1280.png";
import opportunities from "../../assets/imgSwot/ladder-311962_1280.png";
import threats from "../../assets/imgSwot/fear-4750252_1280.png";


export default function Swot() {

    const defaultStyledProjCardProps = {
        cardWidth: "47%",
        cardHeight: "420px",
        cardMargin: "10px",
        imgCardHeight: '30%',
        imgCardWidth: '30%',
        cardFit: 'contain'
    }

    return (
        <Container>
            <Banner bannerTitle="Análise SWOT" />
            <MainContainer>
                <ProjectCardsDiv>
                    <CardBox
                        {...defaultStyledProjCardProps }
                        imgCard={strength}
                        altText="Forças"
                        link="/swot"
                        cardTitle="FORÇAS"
                        p1="Rápido aprendizado de novas tecnologias e ferramentas;"
                        p2="Criatividade e atenção aos detalhes;"
                        p3="Ótima comunicação verbal e  relacionamento interpessoal;"
                        p4="Trabalha bem em equipe atuando de forma colaborativa e empática;"
                        p5="Facilidade em rseolver problemas mesmo sob pressão;"
                        p6="Prática em discussões analíticas;"
                        p7="Experiência com: HTML, CSS, JS, SASS, Styled-components, Design responsivo, React, Next, Inglês e CRM."
                    />
                    <CardBox
                        {...defaultStyledProjCardProps }
                        imgCard={weakness}
                        altText="Fraquezas"
                        link="/swot"
                        cardTitle="FRAQUEZAS"
                        p1="Pouco  ou nenhum conhecimento nas tecnologias: Vue, Angular, Php;"
                        p2="Conhecimento superficial sobre SEO;"
                        p3="Escrita de código com pouco agilidade quando requer uma lógica complexa;"
                        p4="Não possuir um diploma na área de TI;"
                        p5="O desenvolvimento é uma área relativamente nova para mim e assim, desconhecer as particularidades da área pode propiciar que eu cometa algum erro básico."
                    />
                    <CardBox
                        {...defaultStyledProjCardProps }
                        imgCard={opportunities}
                        altText="Oportunidades"
                        link="/swot"
                        cardTitle="OPORTUNIDADES"
                        p1="Ter conhecimento em Next, que é um novo framework promissor;"
                        p2="Possibilidade de crescer com um projeto paralelo e criar uma empresa digital com parceiros;"
                        p3="Oportunidade de desenvolver projetos paralelos com meu irmão, que é lider na área de desenvolvimento de games;"
                        p4="Melhorar minha exposição profissional nas mídias sociais;"
                        p5="Encontrar emprego no exterior já que a demanda de front-end em outros continentes, como a Europa, é alta;"
                        p6="Estar concorrendo a uma vaga de Front-end na Possible, por meio do programa Code Like a Possible Girl."

                    />
                    <CardBox
                        {...defaultStyledProjCardProps }
                        imgCard={threats}
                        altText="Ameaças"
                        link="/swot"
                        cardTitle="AMEAÇAS"
                        p1="Estar exposta à mais uma mudança caso meu marido seja realocado de cidade;"
                        p2="Diminuição das demandas de oportunidades de trabalho remoto caso a situação da pandemia melhore e o trabalho presencial seja retomado;"
                        p3="Adoecer em função do COVID e perder vagas em processos de capacitação ou seleção em desenvovimento;"
                        p4="Perder vaga de trabalho em função do sexo feminino; "
                        p5="Concorrentes com melhores conhecimentos técnicos que eu devido a minha recente transição de carreira;"
                    />
                </ProjectCardsDiv>
            </MainContainer>
        </Container>
    )
}