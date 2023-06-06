const base = [
  {
    titulo: "VISÃO",
    texto:
      "O 1OOTabu idealiza um mundo que reconhece o desenvolvimento sexual de crianças e adolescentes como, natural e saudável. Um mundo em que os jovens são apoiados e afirmados, e os adultos que convivem com eles se comunicam de forma aberta e honesta sobre puberdade, relacionamento, reprodução, sexualidade e sexo. Em tal mundo, os jovens teriam acesso a informações de forma segura e em fontes confiáveis, também teriam o apoio de que precisam para se tornarem adultos sexualmente saudáveis.",
  },
  {
    titulo: "MISSÃO",
    texto:
      "100Tabu é uma plataforma que aproveita a mídia digital para oferecer uma educação sexual honesta, positiva, segura e adequada para as crianças e adolescentes. O 100Tabu também busca ajudar adultos, como, pais, responsáveis, educadores e profissionais de saúde, a se comunicarem de maneira eficaz e sincera sobre sexo e sexualidade com crianças e adolescentes em suas vidas.",
  },
  {
    titulo: "COMO SURGIU?",
    texto:
      "Este projeto foi realizado para a disciplina de Vida e Carreira, ministrada pelo docente Marcelo Callegari, na Universidade Potiguar, localizada em Natal/RN. A ideia seria criar algum projeto que tivesse algum fundo social e que influenciasse de forma positiva a causa. O tema escolhido foi “Educação Sexual e sua importância para o desenvolvimento de crianças e adolescentes”, visando a sua relevância como agregadora para a formação crítica dos indivíduos. A plataforma também se dedica em fornecer informações valiosas baseadas em fatos científicos, incluindo uma variedade de tópicos, que ajudam a aumentar o conhecimento e a compreensão das pessoas que a utilizarão sobre a sexualidade humana. Optamos por criar um sistema Web, o qual foi desenvolvido de forma que trace uma linguagem clara, atual e acessível para todos os níveis.",
  },
  {
    titulo: "POR QUE 100Tabu?",
    texto:
      "O nome dado ao projeto, 100tabu, faz referência a forma como queremos passar as informações. Superando os paradigmas que esse tema traz para a nossa sociedade e esclarecer que não se trata apenas de ensinar “sexo” para os jovens, mas sim, de dividir o aprendizado em etapas, de acordo com a faixa etária. Visamos mostrar que o assunto aborda diversos temas importantes como, emoções, consentimento, limites corporais e outras questões que não se restringem às sexuais. Além de que, falar sobre educação sexual, nos permite ensinar as crianças a reconhecer abusos e a denunciar, visto que no nosso país, Brasil, 76,5% dos casos de estrupo infantil acontecem dentro de casa (Beatriz Gatti, 2023).",
  },
];

let body = document.querySelector("body");
let html = "";
for (const item of base) {
  html +=
    '<section class="content mx-5"><div class="titulo"> <h1>' +
    item.titulo +
    '</h1> </div> <div class="texto">' +
    item.texto +
    "</div> </section>";
}

body.innerHTML = body.innerHTML + html;
