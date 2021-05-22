import React from 'react'

import Banner from "../../components/Banner"
import Timeline from "../../components/Timeline";

import profileImg from '../../assets/imgHome/profilePetraMelloII.jpeg'

import {Container, MainContainer} from "../Home/styled";
import {
    AboutContainer,
    ImgAbout,
    AboutTextDiv,
    TimelineContainer,
} from "./styled";


export default function TimeLine() {

    return (
        <Container>
            <Banner bannerTitle="Timeline" />
            <MainContainer>
                <AboutContainer>
                        <ImgAbout src={profileImg} alt="Ftografia da desenvolvedora front-end Petra Mello" />
                    <AboutTextDiv>
                        <p>
                            " Minha tragetória pessoal, acadêmica e profissional incialmente foi construída por interesses em natureza
                            e saúde, o que contribuiu muito para destacar o meu lado curioso e analítico. Fazendo com que me tornasse uma
                            profissional capaz de planejar com criatividade e encontrar soluções técnicas para viabilizar a execução dos projetos.
                            Atualmente me encontro em transição de carreira e a minha nova profissão é Desenvolvedora Front-end, atuação que está
                            redirecionando minhas habilidades já desenvolvidas."
                        </p>
                    </AboutTextDiv>
                </AboutContainer>

                <TimelineContainer>
                    <Timeline
                        ltitle="Foco no mercado de trabalho"
                        ldescription="Estou caminhando com alguns projetos, participo de alguns canais do Discord e
                        montamos um grupo de meninas para desenvolver projetos paralelos ao trabalho de cada uma. Atualmente
                        estamos desenvolvendo uma plataforma confidencial para um colega que trabalha na área de vendas e mentoria.
                        Portanto, no projeto, desenvolvido em React, usamos: Trello, Notion, Slack, Figma e Git. Continuo a aprender, para cada dia evoluir
                        mais a fim de dominar o React e ser capaz de usar frameworks ou mudar de linguagem
                        sem ter um grande gap. E, como já estou qualificada para desempenhar a função de uma Júnior,
                        comecei a participar de processos de capacitação e de seleção em empresas nesta área."

                        ldate="2021"
                        lskill="Trabalho em equipe, Trello, Notion, Slack, Git e Figma"

                        rtitle="Mais cursos e meu primeiro site"
                        rdescription="Participei de vários cursos e formações, dentre instituições como DIO,
                        Rocketseat, Programaria e então, percebi que era um caminho sem volta, fiz um mapa de estudos
                        e cada dia vou aprendendo mais. Comprei livro e publiquei meu primeiro site oficial
                        www.dronedamontanha.com, desenvolvi todo o site em React, desde código até a implantação,
                        deploy com firebase e hosting."

                        rdate="2019-2021"
                        rskill="Esforço, React e Firebase"
                    />

                    <Timeline
                        ltitle="Escolha certa"
                        ldescription="Assim que terminei meus primeiros cursos na área de desenvolvimento Front-end,
                        mostrei ao meu mentor e irmão minha evolução e ele disse que precisava treinar mais lógica e
                        entender a base de como funciona o computador. Então, lá vou eu ler o livro “The C Programming
                        Language”, li um quarto do livro, com o suporte do meu irmão para corrigir os exercícios que eu fazia.
                        E percebi que estava muito devagar pela
                        complexidade do livro, como o conteúdo era pesado e técnico,
                        me consumia muito. Então, fui fazer mais um curso, agora no Alura, de formação Front-end. Agora,
                        com conceitos mais complexos voltei ao meu mentor e ele me incentivou ver mais linguagem básica
                        e fui assistir a série do The Cherno, que ensina C++, no youtube, também é em inglês, mas a forma
                        de expressar é bem mais acessível, quero dizer que vale muito a pena esta série.
                         Agora sim, tinha conseguido compreender melhor alguns conceitos. Claro que
                        estou no começo, mas estou evoluindo bem."

                        ldate="2019"
                        lskill="Determinação, C, C++"

                        rtitle="Transição de carreira"
                        rdescription="Me casei e meu marido recebeu uma proposta para trabalhar no Rio de Janeiro, e
                        eu aceitei o desafio, pedi demissão e nos mudamos. Chegando no Rio de Janeiro houve um momento de
                        adaptação com a cultura, a pandemia chegou e no meio a tentativa de conseguir emprego na área
                        de biologia, surgiu uma questão? E se eu tentar o desenvolvimento de software? Liguei para meu irmão, que é
                        desenvolvedor de formação, e de pronto ele me apoiou, afinal desde a época de estudante ele sempre
                         falou que eu tinha os requisitos de raciocínio lógico para o desenvolvimento e facilidade com
                        gerenciamento de projetos. Então, se iniciaria aqui um novo ciclo de experiências. Estava
                        disposta a tentar a novidade, mas, se eu não gostasse, não seguiria em frente. Comecei a fazer
                        cursos no Udemy de front-end, que foram ótimos, tive contato com CSS, JS, HTML, SASS, e quando
                        terminei, simplesmente percebi que me divertia muito fazendo os projetos. Tinha acabado de
                        decidir que esta seria minha nova profissão."

                        rdate="2019"
                        rskill="Flexível, HTML, CSS, JS, SASS, Design Responsivo"
                    />

                    <Timeline
                        ltitle="Desenvolvendo projetos"
                        ldescription="A empresa em que trabalhei ocupei uma posição onde participava de reuniões com
                        CEOs e coordenadores,  tendo a oportunidade de
                        contribuir com ideias em vários projetos. Produzíamos células em
                        laboratório para tratamento de animais domésticos. No entanto, a produção e venda do produto não era padronizada.
                        Portanto, juntamente com o comercial, participando de
                        discussões, contribui com várias ideias para padronizar tal venda, a fim de favorecer a todos
                        os departamentos. Foi a implantação de um processo no qual fiz parte, tanto na criação quanto na execução,
                        por meio de uma plataforma em que todos
                        dividiam a informação sobre a etapa do processo em que se encontrava aquela venda no CRM e
                        as previsões para produção e logística, que permitiu economizar tempo e matéria-prima na
                        produção e proporcionou agilidade para facilitar a venda. Também atuava junta à
                        coordenação da equipe de vendas, dando suporte ao comercial, ministrando palestras nos clientes a fim de
                        facilitar a venda e tirar dúvidas técnicas."

                        ldate="2017-2019"
                        lskill="Melhoramento de projetos, Comunicação Oral e CRM"

                        rtitle="Coordenadora de laboratório"
                        rdescription="Quando aceitei o desafio em uma empresa de biotecnologia
                        que trabalhava com novas tecnologias para saúde veterinária, em São Paulo,  minha  atribuição era a implantação de
                        um laboratório de testes de biologia molecular, pois eles tinham a ideia, uma sala e
                        poucos equipamentos. Então fui responsável por
                        desenvolver todo o projeto, desde o planejamento escrito, orçamentos, compras de matérias e
                        equipamentos, discussões de layout de acordo com regulamentações da área e a coordenação da equipe que foi
                        posteriormente contratada para a padronização dos testes."

                        rdate="2017-2019"
                        rskill="Criação de novos projetos do zero"
                    />

                    <Timeline
                        ltitle="Trabalhando na área administrativa"
                        ldescription="A crise financeira veio e fiquei sem emprego, então, meus pais, que agora
                        administravam um posto de gasolina em Goiânia, e tinham sob sua administração 28 funcionários,
                        me chamou para trabalhar com eles. Passei a ir e vir todas as semanas para Goiânia,
                        trabalhando na melhororia dos processos. Fiz uma auditoria nos processos da
                        empresa, como faturamento, caixa, e outros, e assim criava um novo processo visando economia tanto
                        de tempo, quanto financeira. Existiam muitos processos duplicados, que no meio da rotina, eles
                        não conseguiam perceber."

                        ldate="2016"
                        lskill="Administrativa"

                        rtitle="Conteudista e Assessoria Pedagógica"
                        rdescription="Trabalhei em algumas empresas na área de educação.
                        Treinando mais minha habilidade de ensinar e criar, pois criava conteúdos semanais para postar
                        em plataforma ou mesmo para apresentar para os clientes do sistema de ensino que representava."

                        rdate="2016"
                        rskill="Comunicação Escrita, Oral e Criatividade"
                    />

                    <Timeline
                        ltitle="Quebra-cabeça"
                        ldescription="Um dos meus passatempo é passar os
                        dias montando quebra-cabeça. Na verdade, montar quebra-cabeça sempre foi meu
                        hobbie, desde criança já tive vários, desde pequenos, e muitos de 1000, 2000 e 5000 peças.
                        Quem não gosta de um desafio?  Minha mãe uma vez quase me deu um de 10000 peças, mas disse que
                        era muito pesado para trazer na bagagem."

                        ldate="2016"
                        lskill="Raciocínio lógico e Detalhista"

                        rtitle="Contribuição em discussão e projetos"
                        rdescription="Durante todo o doutorado a equipe de alguns laboratórios fazia reuniões
                        semanalmente, durante 1h, na hora do almoço, para discutir todos os trabalhos em andamento,
                        tanto metodologias quanto resultados estatísticos. Cada dia uma pessoa apresentava o momento
                        do seu projeto e as que assistiam contribuíam com ideias construtivas para conseguir um melhor
                        resultado ou mesmo criava uma nova hipótese que contribuía para redirecionar o mesmo. Durante
                        anos, tive de ambos os lados. Desenvolvi projeto com auxílio de diversos professores e colegas,
                        foi excelente e terminei com louvor com a aprovação unanime da banca, com uma defesa na qual fui muito elogiada tanto
                        pela escrita como no meu desempenho na aula e argumentação."

                        rdate="2012-2015"
                        rskill="Comunicação Oral, Discursiva e Analítica"
                    />


                    <Timeline
                        ltitle="Melhorias no projeto do varal"
                        ldescription="Para a realização do doutorado também era necessário um varal de pulmões, onde o
                        mesmo fica imerso em formol à uma pressão de 20cm de altura durante 24 horas. Apesar do
                        laboratório na USP ser especializado na área, eles tinham uma adaptação de caixas, em
                        sistema aberto, que ficava em uma capela evaporando durante 24 horas. Então, tive a ideia de
                        melhorar o varal e criei um novo sistema semelhante ao do mestrado, mas ainda melhor pois os pulmões
                        ficavam mais fixos e individualizados, ocupava menos espaço e assim economizando formol, além
                        de ser um sistema fechado. Eles usam até hoje!"

                        ldate="2012"
                        lskill="Capacidade para resolver problemas e Criação"


                        rtitle="Apresentação internacional"
                        rdescription="No segundo semestre de 2011 havia um grande congresso, o melhor da área na
                        Europa. Me inscrevi no congresso para a apresentação de um resumo de um projeto científico
                        e ganhei um prêmio, no qual me apoiaram financeiramente e convidaram para
                        realizar uma apresentação. No dia, mesmo com nervosismo ocorreu tudo
                        bem e pude apresentar bem meu trabalho e discutir com todos os participantes, o que foi muito
                        produtivo."

                        rdate="2011"
                        rskill="Coragem e Inglês"
                    />

                    <Timeline
                        ltitle="Vislumbrando as oportunidades"
                        ldescription="Com o projeto de doutorado em curso, solicitei ao meu orientador o uso da reserva técnica para ir
                        ao melhor congresso na área de estudos pulmonares, que acontece nos EUA.  Ele sempre incentivava este tipo de intercâmbio
                        cultural, pois muito mais que o conhecimento, a vivência, os insights e a bagagem que trazíamos
                        conosco era engrandecedor para o laboratório. Aproveitando a oportunidade procurei por
                        professores na Universidade da Califórnia e da Florida com intuito de fazer um estágio.
                        Consegui os estágios, mas não foi fácil.
                        Para conseguir o estágio na Califórnia fiquei cinco semanas mandando e-mail
                        até que tive o aceite.  Foi um tempo
                        muito bom, a equipe tinha muitos projetos com industrias farmacêuticas com visões de uma faculdade, mas com
                        empenho empresarial.
                        De lá fui para  Florida onde a cada dia passava em um laboratório do departamento e tive a
                        oportunidade de conhecer muitas pesquisas diferentes. O chefe de departamento pediu que eu
                        desse uma aula do projeto que desenvolvia no Brasil e após a mesma teve um debate o qual agregou em novas
                        ideias para o mesmo."

                        ldate="2011"
                        lskill="Proatividade"


                        rtitle="Tempos difíceis"
                        rdescription="Infelizmente neste momento da minha vida eu adoeci, uma doença autoimune se manifestou
                        logo após uma trágica morte de minha tia, e não havia uma semana que passasse sem dor ou sem um
                        novo episódio. Somente após 1 ano e meio foi dado um diagnóstico. Neste momento me afastei
                        do doutorado da Faculdade de Medicina da USP e meu orientador, um ser humano
                        incrível, que muito me apoiou, me mostrou caminhos a seguir e então continuei desempenhando
                        atividades em projetos do laboratório quando podia e também aproveitei para dar aulas de inglês
                        para uma irmã de um amigo, a Gabi, que na época tinha 9 anos. Após ser
                        diagnosticada, medicada e curada, voltei para o laboratório e me inscrevi novamente no mesmo
                        programa. Com minha ajuda a Gabi depois conseguiu vaga em um projeto de aulas de inglês gratuito e hoje canta
                        em inglês, junto com o pai que é cantor. Fazer o bem é recompensador, quando se faz o bem você
                        apoia o outro e a si mesmo, mesmo sem perceber."

                        rdate="2010-2011"
                        rskill="Resiliência e Empatia"
                    />

                    <Timeline
                        ltitle="Nova etapa em São Paulo"
                        ldescription="Me mudei para São Paulo, agora na capital, para fazer o doutorado. Viajei com uma camionetinha
                         e minhas mala, cama e colchão na caçamba, na época meu irmão morava em São Paulo,
                        em uma república com uns amigos. Todos trabalhavam na mesma empresa de consultoria em TI.
                        Fiquei lá e comecei a busca por casas, encontrei um apartamento e então fui a busca de amigas
                        para dividir. Incentivei uma amiga da Universidade Federal de Goiás para fazer o doutorado também e ela foi
                        para um laboratório da USP o qual a indiquei. E, conheci uma outra amiga do mesmo
                        laboratório em que ia desempenhar o meu doutorado e começamos a dividir o apartamento."

                        ldate="2010"
                        lskill="Coragem e Compartilhamento"


                        rtitle="Docente e orientadora em Universidade Federal"
                        rdescription="Passei em um concurso de docente universitária na Universidade Federal de Goiás,
                        e desde o início mobilizei a coordenadora para desenvolver alguns projetos. Com seis meses
                        coordenava meu laboratório com meus orientandos e trazia camundongos transgênicos de São Paulo
                        para várias pesquisas. Participei e colaborei com os projetos de sexualidade da coordenadora,
                        projetos de professores junto ao SUS e também projeto de ensino EAD da faculdade.
                        Não era minha obrigação, mas tudo estava ali ao meu alcance e poderia ajudar e ser ajudada,
                        foi um período enriquecedor."

                        rdate="2007-2009"
                        rskill="Melhoramento e Desenvolvimento de Projetos"
                    />

                    <Timeline
                        ltitle="Defesa de mestrado"
                        ldescription="Fim do mestrado, entreguei minha tese depois de alguns meses de muita análise
                        estatística e escrita, e ministrei minha aula de defesa frente a uma banca formada por três
                        professores e uma plateia pública. No final fui muito elogiada pela banca, a qual me propuseram
                        para eu passar para o doutorado direto. Porém, como queria mudar a orientação, optei por
                        finalizar o mestrado naquele momento, tendo realizado uma defesa com louvor."

                        ldate="2007"
                        lskill="Analítico e Comunicação Oral"


                        rtitle="Construindo com o que tem"
                        rdescription="Como na Unesp de Assis não havia muita verba alocada para os projetos e não éramos
                        especializados nem em pulmão ou células-tronco, tive que ir adaptando a estrutura. Então ajudei
                        a criei um novo sistema de varal, um equipamento que mantém os pulmões à uma pressão constante
                        de 20cm de altura durante 24 horas imerso em formol, o que é necessário para o estudo.
                        Utilizei caixas plásticas e adaptei peças de equipamento hospitalar para fabricação do meu varal.
                        Ficou ótimo e foi o que usamos durante anos. "

                        rdate="2003-2007"
                        rskill="Criatividade"
                    />

                    <Timeline
                        ltitle="Palestras por aí"
                        ldescription="Durante o meu mestrado, como trabalhava com algo inovador, acabei participando
                        como palestrante em vários eventos, e em várias cidades do Estado de São Paulo e Paraná, o que
                        era excelente tanto para aprimorar minha habilidade de comunicação oral, quanto a de criar redes
                        de conhecimento."

                        ldate="2004-2007"
                        lskill="Comunicação Oral"


                        rtitle="Vida que não para"
                        rdescription="E assim começou a parte II da vida “nômade”. Fiz o mestrado no caminho entre USP,
                        UFRJ e UNESP, e com bolsa do programa CAPES. Minha “base” foi Assis, trabalhava dando aulas em duas
                        cidades vizinhas segunda e sexta a noite. Ia de ônibus toda semana para São Paulo para fazer
                        as matérias e resolver questões de laboratório (me lembro que tinha um professor que me chamava
                        de tartaruga, pois sempre tinha uma mochila nas costas, pois chegava terça às 6hs direto para a aula dele
                        e no dia do meu retorno, às quintas, saia direto para rodoviária).
                        Enquanto estava em São Paulo morei em pensionato, casa de amigos e convento, enfim, onde conseguia.
                        E de tempos em tempos ia ao Rio de Janeiro para aprender novas técnicas."

                        rdate="2003-2007"
                        rskill="Dinamismo"
                    />

                    <Timeline
                        ltitle="Quem corre atrás sempre consegue"
                        ldescription="Me formei e já tinha uma proposta de mestrado para trabalhar com células-tronco, mas,
                        não tínhamos um laboratório em Assis que trabalhasse com isto. Meu orientador me propôs e me
                        pediu para eu pesquisar os laboratórios do Brasil que trabalhavam com cultivo celular e pulmão.
                        Encontrei um grupo forte em células-tronco no Rio de Janeiro, fiquei tentando
                        contato durante semanas até que o professor responsável me respondeu um sim. Fui aceita no
                        laboratório dele para treinar a cultura de células. E então, faltava a segunda parte, procurei
                        por grupos que trabalhasse com enfisema pulmonar e encontrei um professor reconhecido na USP, e então
                        escrevi durante cinco semanas seguidas  até que consegui uma reunião para conhecê-lo. Na reunião
                        expliquei o projeto e novamente recebi um sim. Com as parcerias feitas, iniciei meu mestrado.
"
                        ldate="2003-2004"
                        lskill="Persistência e Parceria"


                        rtitle="Oradora pela segunda vez"
                        rdescription="Lembra da formatura? Ela chegou e tivemos uma votação para quem queria ser oradora,
                        e eu não estava na lista.  Mas 17 colegas me escolheram como oradora, pois tinha feito
                        tudo para aquela formatura acontecer, e sabiam que representaria a turma em sua altura.
                        Algo também interessante foi que entre nós havia um aluno de baixa renda que não conseguia
                        arcar pela formatura, então, tive a ideia de contribuirmos com a sua parte e  por uma questão nobre
                        consegui convencer os colegas de turma.  Ele se formou conosco e hoje tenho orgulho desta decisão."

                        rdate="2003"
                        rskill="Liderança, Coordenação e Persuasão"
                    />

                    <Timeline
                        ltitle="Começando os projetos e ajudando pessoas"
                        ldescription=" Também antes do final do primeiro semestre já corri atrás de uma professora de
                        para propor desenvolver projetos com ela. Como resultado desenvolvi 2 projetos
                        com o uso de quimioterápicos e seus efeitos. Posteriormente propus a outro professor
                        para desenvolver um novo projeto, e então, desenvolvi 2 projetos com genética molecular,
                        Na final, fiz 4 TCCs em 4 anos, apresentando oficialmente somente um.
                        Durante todo o período de faculdade aproveitei para participar da organização e divulgação de
                        vários eventos, além de projetos voluntários ensinando matemática e biologia para alunos
                        com deficiência física ou de baixa renda que faziam supletivo.
"
                        ldate="1999-2002"
                        lskill="Proatividade, Desenvolvimento de Projetos e Empatia"


                        rtitle="Comissão de formatura"
                        rdescription="Minha turma na faculdade tinha 20 alunos e todos nos chamavam de guinomos, pois
                        sabiam que existiam, mas nunca viam. Afinal a faculdade tinha Letras, Psicologia e História, com
                        turnos diurno e noturno. Enfim, no terceiro mês de aula do primeiro ano de faculdade já
                        visualizava a nossa formatura e propus fazer uma comissão organizadora. Alguns achavam que era
                        muito cedo, mas concordaram que valia a pena, então comecei como tesoureira, arrecadando
                        o dinheiro mensal e controlando, trouxe duas amigas para o grupo e fizemos nossa comissão. Durante os anos
                        impulsionei várias atividades como camisetas, rifas, festas e etc, e no final tivemos a melhor
                        formatura de todos os tempos. "
                        rdate="1999"
                        rskill="Liderança e Coordenação"
                    />
                    <Timeline
                        ltitle="Mudando de cidade novamente"
                        ldescription="Passei para Ciências Biológicas na UNESP de Assis, e aqui começa a minha vida
                        “nômade e de mais adaptações”.  Sai de Goiânia e fui morar em Assis, interior de São Paulo, na casa da miha tia.
                        Me adaptei à novas regras da casa, à cultura paulista,  aprendi muito com
                        ela e meu tio, que eram historiadores, e fui descobrir como era viver em um ambiente novo de faculdade pública,
                        longe dos pais."
                        ldate="1999"
                        lskill="Flexibilidade e Adaptabilidade"


                        rtitle="Aptidão"
                        rdescription="Ano de vestibular. Fiz um teste vocacional e o resultado foi: exatas como primeiro lugar,
                        biológicas em segundo e artes cênicas em terceiro. Enfim, como amava a natureza,
                        optei pela biologia e por incrível que pareça minhas melhoras notas lá foram nas matérias de matemática,
                        estatística, bioestatística, física e biofísica. "
                        rdate="1998"
                        rskill="Matemática"
                    />
                    <Timeline
                        ltitle="Falando inglês em público"
                        ldescription="Mesmo em meio à crise econômica, a dona da escola de inglês na qual estudava,
                        permitiu que eu me formasse, sem pagar as mensalidades e ainda por cima fui chamada para ser
                        oradora. Foi muito especial o momento em que, diante de uma platéia, discurssei em inglês."

                        ldate="1999"
                        lskill="Inglês"


                        rtitle="Ajuda quem precisa"
                        rdescription="Nesta época meus pais entraram em uma crise financeira e eu estudava no ensino médio.
                        Para ajudá-los dava aulas particulares para crianças de ensino fundamental. Tive dois
                        alunos que estavam quase repetindo de ano e com três meses de aula eles conseguiram passar nas provas."

                        rdate="1997"
                        rskill="Colaborativa"
                    />
                    <Timeline
                        ltitle="Objetivo alcançado"
                        ldescription="Tive que mudar de escola pois onde estudava não tinha ensino médio. Meus pais
                        queriam que estudasse em uma escola, mas eu queria ir com uma amiga para uma outra escola.
                        Nesta escola que meus pais escolheram só entravam alunos que tinham notas acima de
                        7 em todas as matérias, e, na matéria de português eu tinha um 6.7 no meu currículo. Mas, como nesta
                        escola me deram a opção de fazer uma prova e se passasse poderia estudar nela, eu resolvi fazer
                         uma negociação com os meus pais e se eu passasse na prova, poderia ir para a
                        escola que eu quisesse, e assim foi, passei e escolhi onde estudar."
                        ldate="1996"
                        lskill="Negociação e Foco"


                        rtitle="Acusação infundada"
                        rdescription="Durante toda infância fui estudiosa e fazia parte do Clube dos Noventa (alunos que
                        tiram média 90) e na prova de história uma professora me acusou de estar colando. Minha amiga
                        sabia que não era o caso e me defendeu acusando outro aluno e a professora me deu uma nova
                        chance de fazer a prova após o intervalo em outra turma. No momento fiquei nervosa, ansiosa e
                        triste, mas quando recebi a nota fiquei feliz, na primeiro tinha tirado 95 e na segunda 87.
                        Acredito que já tinha desenvoltura desde então para lidar com situação sob pressão."
                        rdate="1994"
                        rskill="Inteligência Emocional"
                    />
                    <Timeline
                        ltitle="Versão esportista"
                        ldescription="Era alta, por incrível que pareça, tenho a mesma altura desde a quinta série,
                        momento o qual era bastante enturmada e fazia parte das equipes de Handball, na defesa e da
                        equipe de Volêi, no levantamento! Adorava esportes de equipe! Na mesma época também fazia Natação
                        e adorava competir, ganhei várias medalhas durante anos, tanto sola como em competições de
                        revesamento."
                        ldate="1990-1995"
                        lskill="Trabalho em Equipe"

                        rtitle="Mudança para Goiânia (capital)"
                        rdescription=" Nesta época meus pais tinham uma confecção que começou a crescer, e para facilitar
                        a logística, nos mudamos para capital. Então, alugaram uma casa e fizeram da sala a confecção deles.
                        Na escola comecei a escrever de trás para frente e a pedagoga disse que era em função de uma mudança
                        radical no estilo de vida, por sair  de um lugar mais livre para uma cidade. Em uma questão de um mês
                        voltei   a escrever normal e já  estava me adaptando e feliz por ter novos amigos."
                        rdate="1987"
                        rskill="Adaptável"
                    />
                    <Timeline
                        ltitle="Chegada de um Irmão"
                        ldescription="Em 1984, o meu irmão nasceu, era pequena e minha mãe disse que fiquei com ciúmes e
                        de forma natural comecei a aprender a dividir e compartilhar a atenção dos meus pais, meu quarto
                        e minhas coisas."
                        ldate="1984"
                        lskill="Compartilhamento"

                        rtitle="Origem Interiorana"
                        rdescription="Nasci em uma zona rural da cidade de Goiânia, uma cidade chamada Goianira, situada
                        no interior de Goiás. Morei os meus primeiros anos na chácara do meu avô, onde também tinham três
                        casas construídas, a dos meus pais, dos meus tios e dos meus avós. Já comecei a vida tendo como
                        base a divisão, o modelo de trabalho, o respeito e admiração, pois todos levantavam às 5hs,
                        trabalhavam o dia todo, e meus pais ainda iam para a capital, à noite para fazer faculdade de
                        Administração ...e, por mais surpreendente que fosse, meu avô era um homem muito culto, um ourives que tinha
                        um piano e me estimulava a fazer trabalhos manuais criando os moldes de anéis para ele e também me fazia
                        ouvir música clássica sempre. Dizem que a música clássica incentiva o pensamentos matemático?!
                        Acho que sim!"
                        rdate="1981 - 1987"
                        rskill="Raciocínio Lógico e Criação"
                    />

                </TimelineContainer>
            </MainContainer>
        </Container>
    )
}

