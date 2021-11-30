import questaoModel from "../../module/questao";
import RespostaModel from "../../module/resposta";

const questoes: questaoModel[] = [
    new questaoModel(306, 'Quem foi o conquistador do México?', [
        RespostaModel.errada('Cristóvão Colombo'),
        RespostaModel.errada('Simón Bolívar'),
        RespostaModel.certa('Hernán Cortez'),
        RespostaModel.errada('Alberto Cortez'),
    
    ]),
  
        
        new questaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como jerimum?', [
            RespostaModel.errada('Coco'),
            RespostaModel.certa('Abóbora'),
            RespostaModel.errada('Caju'),
            RespostaModel.errada('Tomate'),
        
        ]),

        new questaoModel(203, 'Qual é o coletivo de lobos?', [
            RespostaModel.errada('Manada'),
            RespostaModel.certa('Alcateia'),
            RespostaModel.errada('Matilha'),
            RespostaModel.errada('Rebanho'),
        
        ]),

        new questaoModel(204, 'Quem assinou a Lei Áurea?', [
            RespostaModel.errada('Imperatriz Leopoldina'),
            RespostaModel.certa('Princesa Isabel'),
            RespostaModel.errada('Tereza Cristina'),
            RespostaModel.errada('Maria Antonieta De las Nieves'),
        
        ]),

        new questaoModel(205, 'Quem compôs o Hino da Independência?', [
            RespostaModel.errada('Castro Alves'),
            RespostaModel.errada('Manuel Bandeira'),
            RespostaModel.errada('Carlos Gomes'),
            RespostaModel.certa('Dom Pedro I'),
        ]),
        new questaoModel(206, 'Qual é o antônimo de "malograr"?', [
            RespostaModel.errada('Perder'),
            RespostaModel.errada('Fracassar'),
            RespostaModel.errada('Desprezar'),
            RespostaModel.certa('Conseguir'),
        ]),
        new questaoModel(207, 'Em que país nasceu Carmen Miranda?', [
            RespostaModel.errada('Argentina'),
            RespostaModel.errada('Espanha'),
            RespostaModel.errada('Brasil'),
            RespostaModel.certa('Portugal'),
        ]),
        new questaoModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
            RespostaModel.errada('Costa e Silva'),
            RespostaModel.errada('Emílio Médici'),
            RespostaModel.errada('Ernesto Geisel'),
            RespostaModel.certa('João Figueiredo'),
        ]),
        new questaoModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
            RespostaModel.errada('Ás'),
            RespostaModel.errada('Nove'),
            RespostaModel.errada('Rei'),
            RespostaModel.certa('Valete'),
        ]),
        new questaoModel(210, 'O adjetivo "venoso" está relacionado a:', [
            RespostaModel.errada('Vela'),
            RespostaModel.errada('Vento'),
            RespostaModel.errada('Vênia'),
            RespostaModel.certa('Veia'),
        ]),
        new questaoModel(211, 'Que nome se dá à purificação por meio da água?', [
            RespostaModel.errada('Abrupção'),
            RespostaModel.errada('Abolição'),
            RespostaModel.errada('Abnegação'),
            RespostaModel.certa('Ablução'),
        ]),
        new questaoModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
            RespostaModel.errada('Monte Branco'),
            RespostaModel.errada('Monte Fuji'),
            RespostaModel.errada('Monte Carlo'),
            RespostaModel.certa('Monte Everest'),
        ]),
        new questaoModel(213, 'Em que parte do corpo se encontra a epiglote?', [
            RespostaModel.errada('Estômago'),
            RespostaModel.errada('Pâncreas'),
            RespostaModel.errada('Rim'),
            RespostaModel.certa('Pescoço'),
        ]),
        new questaoModel(214, 'A compensação por perda é chamada de...', [
            RespostaModel.errada('Déficit'),
            RespostaModel.errada('Indexação'),
            RespostaModel.errada('Indébito'),
            RespostaModel.certa('Indenização'),
        ]),
        new questaoModel(215, 'Qual seleção venceu a Copa do Mundo de 1938?', [
            RespostaModel.errada('Alemanha'),
            RespostaModel.errada('Uruguai'),
            RespostaModel.errada('Brasil'),
            RespostaModel.certa('Itália'),
        ]),
        new questaoModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
            RespostaModel.errada('Marechal Deodoro'),
            RespostaModel.errada('Barão de Mauá'),
            RespostaModel.errada('Marquês de Pombal'),
            RespostaModel.certa('Duque de Caxias'),
        ]),
    
    

    

    


]

export default questoes