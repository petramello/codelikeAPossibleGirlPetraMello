import React from 'react'

import CardBox from '../../components/Card'

import './Home.css'
import {
    Container,
    MainContainer,
    ProfileContainer,
    ImgProfile,
    ProfileTextDiv,
    ProfileTextDivII,
    CitationDiv,
    CardsDiv,
} from "./styled"

import { ImQuotesLeft } from "react-icons/im"
import { ImQuotesRight } from "react-icons/im"

import firstMeeting from '../../assets/imgHome/encontroI.jpeg'
import timeLine from '../../assets/imgHome/clock-681645_1920.jpg'
import swot from '../../assets/imgHome/board-4874765_1920.jpg'


export default function Home() {
    return (
        <Container>
            <>
                <ul className="header-slideshow">
                    <li>
                        <span>Image 01</span>
                    </li>
                    <li>
                        <span>Image 02</span>
                    </li>
                </ul>
                <p className="banner-typewriter">
                    <span className="text-1">Code Like a Possible Girl</span>
                    <span className="text-2">Desenvolvedora Front-end</span>
                </p>
            </>
            <MainContainer>
                <ProfileContainer>
                    <ImgProfile src={firstMeeting} alt="Fotografia da Arquiteta Mainara Avelino" />
                    <ProfileTextDiv>
                        <p>ENCONTRO 1</p>
                        <p>
                            Simplesmente, especial! Chegou o grande dia!
                        </p>
                        <p>
                            Antes do primeiro encontro conhecia um pouco sobre a SE CANDIDADE MULHER e a POSSIBLE por meio
                            de mídias e internet, e conhecia um pouco mais sobre a ELAS PROGRAMAM.
                            {/*<a href="https://secandidatemulher.com.br/" target="blank" >*/}
                            {/*<a href="https://possible.com/" target="blank" >*/}
                            {/*<a href="https://www.linkedin.com/company/elasprogramam/" target="blank" >*/}
                        </p>
                        <p>
                            Com o programa CODE LIKE A POSSIBLE GIRL esperava que com a MENTORIA melhoraria a maneira de
                            me posicionar em entrevistas diante o questionamento do porquê estou fazendo minha transição
                            de carreira, e, também, aprender se devo manter esta etapa da minha vida em meu cúrriculo ou
                            não.  Além disto, ainda mais interessante e atraente, seria uma chance real de ser capacitada
                            e concorrer de fato à minha primeira vaga de emprego na área de desenvolvimento  e ainda por
                            cima, uma vaga para Fornt-end Jr.
                        </p>
                        <p>
                            No entanto, em NOSSO PRIMEIRO ENCONTRO, me dei conta de que este projeto está sendo e será
                            ainda mais agregador. Por isto, venho aqui resumir um pouco do muito que consegui
                            experimentar neste dia incrível.
                        </p>
                    </ProfileTextDiv>
                </ProfileContainer>
                <ProfileTextDivII>
                    <p>
                        Antes do encontro já estávamos sendo estimuladas, com nossos radares ligados e atentos às
                        mensagens que nos pediam para nos aprontar para o evento: isto fez com que tivéssemos mais
                        confiança para poder aparecer diante a câmera, algo que para mim está ok, mas que arrumada
                        sempre é melhor e uma dica importante, afinal, estamos em um processo seletivo.
                    </p>
                    <p>
                        O encontro deu início com a introdução da Jehnyffer Coutinho, Ana Clara e a Silvia Coelho,
                        queridíssimas que atuam com muito esmero impulsionando as mulheres para o mercado de
                        trabalho, fazendo-nos sair de nossas zonas de conforto e passar por cima da “Síndrome da
                        Impostora”.
                    </p>
                    <p>
                        Após a apresentação inicial, tivemos uma atraente fala da Isabella Teixeira, Co-CEO na
                        Possible, que de nervosismo, como ela mesma disse, não demonstrou nada e que pelo contrário,
                        se mostrou natural e aberta a todo momento (obs: um exemplo de postura o qual quero deixar
                        gravado em minha memória para usar como modelo!).
                    </p>
                    <p>
                        E neste clima, conhecemos a empresa, sua história, as fusões com o grupo WPP, ramificação a
                        partir da Alemanha, e  tecnologias que trabalham (react, node, java, .net, php, drupal,
                        html, css, e js), o que me deixou empolgada, pois já uso algumas em meus projetos e aquelas
                        que não aprendi ainda, colocarei em meu mapa de estudos (olha a oportunidade aqui que não
                        vou deixar passar!).
                    </p>
                    <p>
                        Também conhecemos sobre as plataformas DXP, que a Possible incentiva este tipo de
                        habilitações e demais certificações, que ela realiza projetos em várias partes do mundo, e
                        atua com projetos únicos ou multi-projetos, demais benefícios e valores da empresa que são
                        excelentes, incluindo os projetos de incentivos a mulheres, é claro, e as Possible’s Ladies,
                        além de alguns de seus clientes como Bayer e demais. Ou seja, concluí que a POSSIBLE é uma
                        empresa com projetos os quais quero trabalhar, com o ambiente o qual quero trabalhar, e com
                        as oportunidades a qual devo me esforçar para conquistar!
                    </p>
                    <p>
                        A partir de então, voltamos com a apresentação da SE CANDIDATE MULHER! e ELAS PROGRAMAM,
                        mas, antes da apresentação, algo muito gostoso que elas fazem e agradeço, é nos separamos
                        em salas pequenas, com 4 participantes, onde ocorre um encontro enriquecedor, pois nos
                        damos conta de como nos reagimos ao falar sobre em que somos melhores e porque estamos ali.
                        Na verdade, o enriquecedor é tanto o network (que é maravilhoso, e as meninas da minha sala
                        também!) e a possibilidade de criarmos um grupo de apoio, quanto pelo o fato de entendermos
                        a nossa reação e treinar a melhor maneira de nos expressarmos.
                    </p>
                    <p>
                        Pois, quando voltamos a sala, em síntese, nos deparamos com ações pré-determinadas que podem
                        ser melhoradas! Por exemplo, todas escrevendo os seus contatos de Linkedin, inclusive eu,
                        enquanto a palestrante falava dicas produtivas, ... obrigada Ana pelo insight!
                    </p>
                    <p>
                        E, continuando na busca pela melhora nos deparamos com uma palestra para nos dar muita
                        confiança. Na apresentação falaram sobre a “Síndrome da Impostora”, a qual a maioria das
                        mulheres possuem e infelizmente permitem que se sobressaia e acabam deixando de se
                        candidatar, ou de ter autoconfiança ou mesmo se autossabotarem em várias etapas de sua vida
                        profissional. Mas, muito mais que isso, falaram sobre os pontos os quais devemos prestar
                        atenção para conseguirmos driblar e conquistar o nosso lugar “na fila do pão!”:
                        perfeccionismo extremo, saber insuficiente, precisar de ajuda é fracassar, dificuldades são
                        para incompetentes, o sucesso é pura sorte, trabalho é seu sobrenome, autossabotagem, sua
                        única habilidade é social. Enfim, aqui devo me atentar ao perfeccionismo, saber e
                        autossabotagem, mas, estes já estão no radar e digo ainda que  com a maturidade fica mais
                        fácil passar por cima!
                    </p>
                    <p>
                        No entanto, elas não só apoiaram nos abrindo os olhos para estes tópicos, mas, também nos
                        deram dicas importantes de como nos cuidar para que alcancemos nosso objetivo, sendo que
                        apesar de cada qual reagir individualmente, todas devem sonhar, quebrar o ciclo e traçar seu
                        caminho para chegar onde querem (incentivo anotado e gravado!).
                    </p>
                    <p>
                        Para retratar estas dicas não poderia ter sido mais propícia, a próxima apresentação,
                        da Luara Knapp, Web Author na Possible. Que teve seu sonho realizado de trabalhar na
                        empresa que queria, passando por cima de seu medo e autossabotagem! Além de compartilhar
                        sua história incrível, pôde compartilhar os valores da Possible, no qual o ser humano que
                        quer e está disposto a aprender é reconhecido e incentivado. Além disto, conheci uma nova
                        função Web Author, a qual nunca tinha visto antes! Mais um para a lista!
                    </p>
                    <p>
                        E assim, finalmente voltamos às excelentes dicas das nossas anfitriãs Jhenyffer e Ana que
                        compartilharam conosco algumas de suas histórias de vida e nos deixaram com uma atividade
                        enriquecedora, que nos propiciará uma análise de nós mesmas visando a criação de uma Linha
                        do Tempo e o uso da ferramenta SWOT. Atividades as quais vão permitir (re)descobrir
                        histórias, comportamentos e habilidades para criar um backup de ferramentas que nos tronará
                        muito mais bem preparada para os processos seletivos!
                    </p>
                    <p>
                        Ou seja, INCRÍVEL, assim posso finalizar dizendo que ainda não sei a resposta ideal para o
                        questionamento do porquê que estou fazendo minha transição de carreira, mas tenho
                        ferramentas para conseguir desbravá-la. Devo sim manter esta etapa da minha vida em meu
                        currículo e quero ainda mais conseguir a vaga de Front-end Jr na Possible.
                    </p>
                    <p>
                        E, que, este encontro foi ÚNICO, resultado de uma parceira sensacional e mulheres
                        maravilhosas que buscam juntas entender sua identidade e atender às suas necessidades,
                        dentro do sonho desejado!
                    </p>
                    <p>
                        #contrateumamulher @secandidatemulher @possible @elasprogramam
                    </p>
                </ProfileTextDivII>

                <CitationDiv>
                    <p>
                        <ImQuotesLeft /> Conhecimento não é o que você sabe, mas o que você faz com o que você sabe.<ImQuotesRight />
                    </p>
                    <p>Aldous Huxley</p>
                </CitationDiv>

                <CardsDiv>
                    <CardBox
                        imgCard={timeLine}
                        altText="Fotografia de capa para direcionar ao link da atividade: Linha do Tempo"
                        link="/timeline"
                        contentTitle="TIMELINE"
                        cardFit="cover"
                    />

                    <CardBox
                        imgCard={swot}
                        altText="Fotografia de capa para direcionar ao link da atividade: SOWT"
                        link="/swot"
                        contentTitle="SWOT"
                        cardFit="cover"
                    />
                </CardsDiv>
            </MainContainer>
        </Container>
    )
}