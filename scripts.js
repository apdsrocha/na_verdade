var app = angular.module('cards', []);

//definir uma função para o controller (1)
function CardsController($scope){
    $scope.dados = {};

    //declaracao da fonte que será exibida no modal
    $scope.modal = {
        fonte: "",
    };

        //declaracao do link que será exibido no modal
    $scope.modal = {
        link: "",
    };

    $scope.cards = [
        {myth: "Mulheres não gostam de futebol",
        info: "Na verdade, o futebol nasceu popular entre homens e mulheres. No Brasil, há registros de partidas com presença feminina dentro e fora do campo já nos anos 20. Em 1941 um decreto proibiu as mulheres de jogar e frequentar estádios e foi vigente até 1975. A profissionalização passou a ser permitida apenas em 1996. Na verdade, as mulheres têm muitas conquistas no futebol. Marta,por exemplo, foi escolhida como a melhor jogadora do mundo cinco vezes consecutivas. Um recorde entre homens e mulheres.",
        fonte: "As arquibancadas da torcedora e a presença feminina nos estádios brasileiros: Costa, Leda, 2016 [Online]",
        link: "whatsapp://send?text=Olha só este artigo: http://blogdojuca.uol.com.br/2016/07/as-arquibancadas-da-torcedora-a-presenca-feminina-nos-estadios-brasileiros/ Via @NVDD"
        },
        

        {myth: "Mulheres são ruins em matemática e/ou em exatas",
        info: "Na verdade as habilidades de homens e mulheres para matemática são iguais. Estudos publicados entre 1990 e 2010 mostram que a diferença de performance entre os sexos nao é significante. >Na verdade, de tanto repetir que meninas são ruins em matemática se configurou um fenômeno chamado “ameaça do estereótipo”, onde o reforço da sociedade convence as meninas e interfere na performance.",
        fonte: "Nicole M. Else-Quest, Janet Shibley Hyde, Marcia C. Linn. Cross-national patterns of gender differences in mathematics: A meta-analysis. Psychological Bulletin, 2010",
        link: ""
        },

        {myth: "Mulheres não se destacam em ambientes competitivos",
        info: "Na verdade os estudos apontam a existência de um ambiente que intimda. As mulheres antecipam e temem represália ao expor suas ideias. Um 2o estudo mostra que estes medos são reais: mulheres assertivas atuando como CEOs são pior avaliadas do que homens agindo da mesma forma. Na verdade, para melhorar não bastam destaques individuais ou treinos de liderança - é preciso uma mudança de ambiente, que permita colaboração, pare de omitir e interromper a ascenção das mulheres.",
        fonte:"Quem toma a palavra e por que? - Gênero, poder e volubilidade nas organicaçoes: Brescoll L. Victoria - Yale University (Artigo em Inglês)",
        link: ""
        },

        {myth: "Mulheres não dirigem bem / são má motoristas",
        info: "Na verdade, essa generalização não tem embasamento. Existem motoristas bons e ruins - não importa o gênero. Isso depende da habilidade e experiência individual. Mas se formos olhar as estatísticas vemos que as mulheres pagam um valor inferior de seguro automotivo, justamente por causarem menos danos (nos EUA os homens pagam U$15 mil a mais ao longo da vida). Na verdade, tendo como amostra os EUA, os homens recebem 3.4x mais multas do que mulheres. Isso é ligado a agressividade no trânsito e comportamentos de alto risco (como não usar cinto de segurança, ultrapassagem perigosa e não respeitar preferencial).",
        fonte: "1. Men Break More Traffic Laws, Drive More Dangerously Than Women, Concludes QPC Study, 2008 [Online | Inglês] 2. Why Men Pay More For Auto Insurance Than Women, 2015 [Online | Inglês]",
        link: ""
        },

        {myth: "Mulheres não se interessam por engenharia | física",
        info: "Na verdade a participação das mulheres aumenta em ambientes que incentivam a inclusão. Se há uma cultura que não repele, mas sim cria expectativa, a participação feminina cresce. Há países que contam com bons números: 44% dos formandos em engenharia são mulheres na Malásia e 40% na China. Na verdade, estudos demonstram que os países com baixa representação esbarram em três pontos de influência: identidade (essa carreira é para mim?), habilidade percebida (me sinto confiante) e aspiração (vejo possibilidades futuras?). A construção destas respostas pelo ambiente cria barreiras ao invés de incentivar.",
        fonte: "1. Nicole M. Else-Quest, Janet Shibley Hyde, Marcia C. Linn. Cross-national patterns of gender differences in mathematics: A meta-analysis.. Psychological Bulletin, 2010. 2. A ameaça dos estereótipos: Steele, Claude M.; Aronson, Joshua (November 1995). Stereotype threat and the intellectual test performance of African Americans. Journal of Personality and Social Psychology.",
        link: ""
        }
    ];

    //funcao que recebe a fonte do card clicado e atribui ao modal
    $scope.abrirModal = function (card){
        console.log(card.fonte);
        $scope.modal.fonte = card.fonte;

    }

        //funcao que recebe o link do card clicado e atribui ao modal
    $scope.linkModal = function (card){
        console.log(card.link);
        $scope.modal.link = card.link;

    }
}

//registrar a função como controller no angular (1)
app.controller('CardsController', CardsController);
