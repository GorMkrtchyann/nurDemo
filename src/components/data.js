import {Images} from "../images/images";


export const data = {
    am: [
        {
            mainType: "Նախաճաշ",
            icon: Images.breakfasts,
            list: [
                {
                    title: "Ձվածեղ",
                    subMenu: [
                        {name: "Ձվածեղ", info: null, price: 1000},
                        {name: "պանրով, կանաչիներով", info: '3 ձու, պանիր, թարմ խառը հայկական կանաչի, կարագ', price: 2000},
                        {name: "բաստուրմայով, սուջուխով", info: '3 ձու, բաստուրմա, սուջուխ, կարագ', price: 3000},
                        {name: "լոլիկով", info: '3 ձու, լոլիկ, կծու պղպեղ, կարագ', price: 2000},
                    ]
                },
                {
                    title: "Նյու-Յորք",
                    subMenu: "2 ձու ակնիկ, մարինացված ձուկ, ավոկադո, բրի պանիր, կարագ, ձիթապտուղ, հաց",
                    price: 4000
                },
                {
                    title: "Անգլիական",
                    subMenu: "2 լորի ձու, բեկոն, խոզապուխտ, նրբերշիկ, կարագ, սունկ, լոլիկ, բրի պանիր, մարինացված լոբի, ձիթապտուղ, հաց",
                    price: 4000
                },
                {
                    title: "Իտալական",
                    subMenu: "2 ձու ակնիկ, երշիկ, իտալական պանիր, լոլիկ, պեստո, բրի պանիր, կարագ, ձիթապտուղ, հաց",
                    price: 4000
                },
                {
                    title: "Բրուսկետտա նախաճաշ",
                    subMenu: "Մատուցվում է 4 կտոր հացի վրա լոլիկով և բազիլիկով/ մարինացված ձկով, ձկնկիթով և ռուկկոլայով / ավոկադոյով, լայմով և պիստակով/ ձվածեղով",
                    price: 4000
                },
                {
                    title: "Կարագ, ջեմ, հաց",
                    price: 1000
                },
                {
                    title: "Ֆիթնես նախաճաշ",
                    subMenu: "Մյուսլի, մատուցվում է մածունով, բանանով, ելակով, մեղրով, բադամով",
                    price: 1800
                },
            ],
        },
        {
            mainType: "Աղցաններ",
            icon: Images.salads,
            list: [
                {
                    title: "Հայկական տնական աղցան",
                    subMenu: "Լոլիկ, վարունգ, սոխ, ռեհան",
                    price: 1500
                },
                {
                    title: "Ֆենտեզի",
                    subMenu: "Հավի կրծքամիս, սպանախ, բազուկ, լոլիկ, ֆետտա, տանձ, դեժոնական մանանեխով սոուս, նռան սոուս",
                    price: 3000
                },
                {
                    title: "Քինոայով",
                    subMenu: "Ավոկադո, հավի կրծքամիս, հայկական կանաչի, քինոա, բուլղ. պղպեղ, լոլիկի չիր, քունջութ, նարինջի սոուս, նռան սոուս",
                    price: 3500
                },
                {
                    title: "Կեսար հավի կծքամսով / ծովախեցգետնով",
                    subMenu: "Հավի կրծքամիս կամ ծովախեցգետին, հազար, պարմեզան, չորահաց, կեսար սոու",
                    price: '2500/4000'
                },
                {
                    title: "Տաք աղցան",
                    subMenu: "Հորթի փափկամիս, ռուկկոլա, հազար, բուլղ. պղպեղ, սերկևիլ կամ դեղձ, նռան սոուս",
                    price: 4000
                },
                {
                    title: "Լեզվով",
                    subMenu: "Հորթի լեզու, թթու վարունգ, սալորաչիր, սունկ, պանիր, ընկույզ, սպիտակ սոուս",
                    price: 2500
                },
                {
                    title: "Վիտամինային",
                    subMenu: "Կաղամբ, գազար, բազուկ, կանաչի, չամիչ, նարնջի սոուս, նռան սոուս",
                    price: 2000
                },
                {
                    title: "Հունական",
                    subMenu: "Հազար, լոլիկ, վարունգ, բուլղ.պղպեղ, ֆետա, ձիթապտուղ, ձիթ. ձեթ, կիտրոն, օրիգանո",
                    price: 2500
                },
                {
                    title: "Իտալական",
                    subMenu: "Լոլիկ, իտալական պանիր, պեստո, ձիթ. ձեթ, պեստո, նռան սոուս",
                    price: 4000
                },
            ]
        },
        {
            mainType: "Բուրգերներ",
            icon: Images.burger,
            list: [
                {
                    title: "Դասական",
                    subMenu: "Հորթի կոտլետ, հազար, լոլիկ, թթու վարունգ, սոխ, սոուս",
                    price: 2000
                },
                {
                    title: "Չիզբուրգեր",
                    subMenu: "Հորթի կոտլետ, հազար, լոլիկ, պանիր, թթու վարունգ, սոխ, սոուս",
                    price: 2200
                },
                {
                    title: "Կեսար",
                    subMenu: "Հավի կրծքամիս, հազար, լոլիկ, պանիր, կեսար սոուս",
                    price: 2500
                },
                {
                    title: "Չիկեն",
                    subMenu: "Հավի կոտլետ, հազար, լոլիկ, պանիր, սոուս\n",
                    price: 2000
                },
                {
                    title: "Շնիցել",
                    subMenu: "Շնիցել, հազար, լոլիկ, վարունգ, պանիր, սոուս",
                    price: 2500
                },
                {
                    title: "Նուռ",
                    subMenu: "Հորթի փափկամիս, ռուկկոլա, ռոքֆոր սոուս",
                    price: 3000
                },
                {
                    title: "Անգուս",
                    subMenu: "Անգուսի կոտլետ, հազար, լոլիկ, պանիր, թթու վարունգ, սոխ, սոուս\n",
                    price: 3000
                },
                {
                    title: "Բեկոնով",
                    subMenu: "Հորթի կոտլետ, բեկոն, հազար, լոլիկ, պանիր, թթու վարունգ, սոխ, սոուս",
                    price: 3000
                },
                {
                    title: "Բիգ բուրգեր",
                    subMenu: "2 հորթի կոտլետ, 2 բեկոն, 2 պանիր, հազար, լոլիկ, թթու վարունգ, սոխ, սոուս",
                    price: 3500
                },
                {
                    title: "Ծովախեցգետինով",
                    subMenu: "Ծովախեցգետին, հազար, վարունգ, ավոկադո",
                    price: 3000
                },
                {
                    title: "Վեգան",
                    subMenu: "Դդմիկի կոտլետ, լոլիկ, վարունգ, պղպեղ, նռան սոուս\n",
                    price: 2000
                },
            ]
        },
        {
            mainType: "Ուտեստներ",
            icon: Images.dishes,
            list: [
                {
                    title: "Ձուկ լավաշով բարուրած",
                    subMenu: null,
                    price: 3000
                },
                {
                    title: "Նուռ",
                    subMenu: "Հորթի մեդալիոն գինու սոուսով, բանջարեղենի գրիլ, նռան օշարակ",
                    price: 5000
                },
                {
                    title: "Բիֆստրոգանով",
                    subMenu: "մատուցվում է կարտոֆիլ ֆրիով և նռան օշարակով",
                    price: 3500
                },
                {
                    title: "Չիկենստրոգանով",
                    subMenu: "մատուցվում է կարտոֆիլ ֆրիով",
                    price: 3000
                },
                {
                    title: "Տատիկի տոլմա",
                    subMenu: "Խաղողի տերև, հորթի միս, մած",
                    price: 2500
                },
                {
                    title: "Ժուլիեն",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Նրբաբլիթ",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Պանրխաշ",
                    subMenu: "Չեչիլ պանիր, լավաշ, սոխ, կարագ",
                    price: 2500
                },
                {
                    title: "Նրբերշիկի սեթ",
                    subMenu: null,
                    price: 8500
                },
                {
                    title: "Օրվա ապուր",
                    subMenu: null,
                    price: 2000
                },
            ]
        },
        {
            mainType: "Սենդվիչներ",
            icon: Images.sandwiches,
            list: [
                {
                    title: "Քլաբ",
                    subMenu: 'Բեկոն, օմլետ, հավի կրծքամիս, պանիր, լոլիկ, մանանեխով սոուս',
                    price: 3000
                },
                {
                    title: "Ծովախեցգետինով",
                    subMenu: "Ծովախեցգետին, հազար, վարունգ, լոլիկ, պարմեզան, ավոկդո",
                    price: 3000
                },
                {
                    title: "Հավով",
                    subMenu: "Հավի կրծքամիս, լոլիկ, պանիր, կեսար սոուս",
                    price: 2500
                },
                {
                    title: "Ավոկադոյով",
                    subMenu: "Մարինացված ձուկ, ավոկադո, ձկնկիթ, վարունգ, ռուկկոլա, նռան սոուս\n",
                    price: 3500
                },
                {
                    title: "Վեգան",
                    subMenu: "Ավոկադո, լոլիկ, կաղամբ, գազար, խորոված պղպեղ",
                    price: 2000
                },
            ]
        },
        {
            mainType: "Պիցցա",
            icon: Images.pizza,
            list: [
                {
                    title: "Բանջարեղենային",
                    subMenu: 'Սունկ, եգիպտացորեն, պղպեղ, լոլիկ, ձիթապտուղ, պանիր',
                    price: 2700
                },
                {
                    title: "Վենեցիա",
                    subMenu: "Հավի կրծքամիս, եգիպտացորեն, լոլիկ, ձիթապտուղ, պանիր",
                    price: 3000
                },
                {
                    title: "Հռոմեական",
                    subMenu: "Ապխտած երշիկ, ֆիլե, լոլիկ, ձիթապտուղ, պանիր",
                    price: 3300
                },
                {
                    title: "Չորս պանիր",
                    subMenu: "2 տեսակի մոցարելա, հոլանդական, կապույտ պանիր",
                    price: 2700
                },
                {
                    title: "Պեպպերոնի",
                    subMenu: "Երշիկ պեպպերոնի, պանիր",
                    price: 2500
                },
                {
                    title: "Պիցցա Նուռ",
                    subMenu: "Բեկոն, պեստո, պանիր, հատուկ սպիտակ սոուս, նռան սոուս, սոխ ըստ ցանկության",
                    price: 4000
                },
                {
                    title: "Պիցցա բուրրատա",
                    subMenu: "Բուրրատա, ռուկկոլա, բեկոն, լոլիկ",
                    price: 4000
                },
            ]
        },
        {
            mainType: "Պաստաներ",
            icon: Images.pasta,
            list: [
                {
                    title: "Տալիատելե Բիֆ",
                    subMenu: 'Տավարի փափկամիս, սունկ, կարամելիզացված սոխ, լոլիկի չիր, սերուցք, պարմեզան',
                    price: 3000
                },
                {
                    title: "Պենե Պեստո",
                    subMenu: "Ծովախեցգետին, պեստո, լոլիկի չիր, սերուցք, պարմեզան",
                    price: 4000
                },
                {
                    title: "Հավով կանաչ Պենե",
                    subMenu: "Հավի կրծքամիս, սպանախ, պիստակ, սունկ, սերուցք, պարմեզան",
                    price: 3000
                },
                {
                    title: "Պենե Վեգան",
                    subMenu: "Տնական լոլիկի սոուս, թարմ ռեհան, եգիպտացորեն, պղպեղ",
                    price: 2700
                },
                {
                    title: "Կարբոնարա Տալյատելլե",
                    subMenu: "Բեկոն, լորի ձու, սերուցք, պարմեզան",
                    price: 3000
                },
                {
                    title: "Պենե Ալֆրեդո",
                    subMenu: "Հավի կրծքամիս, սունկ, սերուցք, պարմեզան",
                    price: 3000
                },
            ]
        },

        {
            mainType: "Ըմպելիքներ",
            icon: Images.drinks,
            list: [
                {
                    title: "Թարմ քամած հյութ",
                    subMenu: [
                        {name: "Նուռ", info: null, price: 1000},
                        {name: "Ցիտրուս", info: null, price: 1000},
                        {name: "Խնձոր / կիտրոն ", info: null, price: 800},
                        {name: "Բազուկ / գազար", info: null, price: 800},
                    ]
                },
                {
                    title: "Տնական լիմոնադ բաժակ / սափորով",
                    subMenu: "Ցիտրուս / հատապտուղ / տանձ / վարունգ / նանա",
                    price: "1000/2500"
                },
                {
                    title: "Տնական կոմպոտ բաժակ / սափորով",
                    subMenu: "Չիր/հատապտուղ",
                    price: "500/1500"
                },
                {
                    title: "Բնական հյութ",
                    subMenu: null,
                    price: 550
                },
                {
                    title: "Աղբյուրի ջուր",
                    subMenu: null,
                    price: 400
                },
                {
                    title: "Հանքային ջուր",
                    subMenu: null,
                    price: 400
                },
                {
                    title: "Pepsi, mirinda, 7up",
                    subMenu: null,
                    price: 500
                },
                {
                    title: "Կաթնային շեյք",
                    subMenu: 'Վանիլային/շոկոլադե/մրգային',
                    price: 1500
                },
                {
                    title: "Ֆրեշ",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Դետոքս",
                    subMenu: 'Սպանախ, վարունգ, լիմոն, խնձոր, մեղր',
                    price: 2000
                },
            ],
        },
        {
            mainType: "Աղանդեր",
            icon: Images.dessert,
            list: [
                {
                    title: "Պաղպաղակ",
                    subMenu: [
                        {name: "+ Թարմ միրգ", info: null, price: 400},
                        {name: "+ Շոկոլադ", info: null, price: 400},
                        {name: "+ Ընկույզ", info: null, price: 400},
                    ],
                    price: 600
                },
                {
                    title: "Մրգի Տեսականի",
                    subMenu: "Ձմերուկ, սեխ, հատապտուղ",
                    price: 3000
                },
                {
                    title: "Օրվա թխվածք",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Շոկմանժե",
                    subMenu: null,
                    price: 1000
                },
            ],
        },
        {
            mainType: "Ալկոհոլային խմիչքներ",
            icon: Images.alco,
            list: [
                {
                    title: "Կոնյակ Արարատ 5 տարի",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Կոնյակ Արարատ 10 տարի",
                    subMenu: null,
                    price: 3000
                },
                {
                    title: "Jack Daniels",
                    subMenu: null,
                    price: 2500
                },
                {
                    title: "Bacardi",
                    subMenu: null,
                    price: 2500
                },
                {
                    title: "Gin Bombay",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Jagermeister",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Martini Rosso",
                    subMenu: null,
                    price: 1500
                },
            ],
        },
        {
            mainType: "Սուրճ",
            icon: Images.coffee,
            list: [
                {
                    title: "Ռիստրետտո",
                    subMenu: null,
                    price: 900
                },
                {
                    title: "Էսպրեսսո / կրկնակի Էսպրեսսո",
                    subMenu: null,
                    price: '900/1600'
                },
                {
                    title: "Լունգո",
                    subMenu: null,
                    price: 900
                },
                {
                    title: "Ամերիկանո",
                    subMenu: null,
                    price: 900
                },
                {
                    title: "Կապուչինո",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Լատտե",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Լատտե առոմա",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Էսպրեսսո մակիատո",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Կարամել մակիատո",
                    subMenu: null,
                    price: 1600
                },
                {
                    title: "Ֆլետ Ուայթ",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Գլյասե դասական",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Իռլանդական",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Ֆրապե",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Ֆրապե պաղպաղակով",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Արևելյան",
                    subMenu: null,
                    price: 500
                },
                {
                    title: "Փարիզյան",
                    subMenu: null,
                    price: 500
                },
            ],
        },
        {
            mainType: "Վեգան սուրճ",
            icon: Images.v_coffee,
            list: [
                {
                    title: "Կապուչինո նուշի / կոկոսի կաթով",
                    subMenu: null,
                    price: 1700
                },
                {
                    title: "Լատտե մակիատո նուշի / կոկոսի կաթով",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Կարամել մակիատո նուշի / կոկոսի կաթով",
                    subMenu: null,
                    price: 2000
                },
            ],
        },
        {
            mainType: "Թեյ",
            icon: Images.tea,
            list: [
                {
                    title: "Նուռ",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Հայկական խոտաբույսերով",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Դարչինով և մեխակով",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Ասմա սև",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Սենչա կանաչ",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Էլ Գրեյ",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Չինական Ժասմինով",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Մրգային պունշ",
                    subMenu: null,
                    price: 800
                },
                {
                    title: "Կոճապուղտով և ցիտրուսով",
                    subMenu: null,
                    price: 800
                },
                {
                    title: "Սառը թեյ",
                    subMenu: null,
                    price: 600
                },
            ],
        },
        {
            mainType: "Ալկոհոլային կոկտելներ",
            icon: Images.cocktails,
            list: [
                {
                    title: "Tequila Sunrise",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Long Island Ice Tea",
                    subMenu: null,
                    price: 220
                },
                {
                    title: "Blooming Island",
                    subMenu: null,
                    price: 2500
                },
                {
                    title: "Mojito",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Mojito fruit",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Blue Hawaii",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Night on beach",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Blue Lagoon",
                    subMenu: null,
                    price: 3000
                },
                {
                    title: "Margarita classical",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Margarita blue",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Malibu",
                    subMenu: null,
                    price: 1900
                },
            ],
        },
        {
            mainType: "Գարեջրեր",
            icon: Images.beer,
            list: [
                {
                    title: "Կիլիկիա",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Արարատ",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Գյումրի",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Ալեքսանդրապոլ",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Գերմանական",
                    subMenu: null,
                    price: '1800-2500'
                },
                {
                    title: "Գարեջրիսեթ",
                    subMenu: null,
                    price: 4000
                }
            ],
        },
        {
            mainType: "Գինիներ",
            icon: Images.wines,
            list: [
                {
                    title: "Իջևան Բաժակով",
                    subMenu: 'Կարմիր, Սպիտակ',
                    price: 700
                },
                {
                    title: "Իջևան",
                    subMenu: 'Կարմիր, Սպիտակ, Վարդագույն, Վարդի',
                    price: 700
                },
                {
                    title: "Նուռ",
                    subMenu: null,
                    price: 5000
                },
                {
                    title: "Սարգոն",
                    subMenu: null,
                    price: 7000
                },
                {
                    title: "Գոշ",
                    subMenu: null,
                    price: 10000
                },
                {
                    title: "Սափոր",
                    subMenu: null,
                    price: 12000
                },
                {
                    title: "Տուշպա",
                    subMenu: null,
                    price: '8000-13000'
                },
                {
                    title: "Շամպայն",
                    subMenu: null,
                    price: 4000
                },
                {
                    title: "Գինու սեթ",
                    subMenu: null,
                    price: 7000
                }
            ],
        },
    ],
    ru: [
        {
            mainType: "Завтрак",
            icon: Images.breakfasts,
            list: [
                {
                    title: "Омлет",
                    subMenu: [
                        {name: "Омлет", info: null, price: 1000},
                        {
                            name: "с сыром и зеленью",
                            info: "3 яйца, сыр, свежая смесь армянской зелени",
                            price: 2000
                        },
                        {name: "с бастурмой, суджуком", info: "3 яйца, бастурма, суджух", price: 3000},
                        {name: "с помидорами", info: "3 яйца, помидор, острый перец", price: 2000},
                    ]
                },
                {
                    title: "Нью-Йорк",
                    subMenu: "2 омлета, маринованная рыба, авокадо, сыр бри, сливочное масло, оливки, хлеб",
                    price: 4000
                },
                {
                    title: "Английский",
                    subMenu: "2 перепелиных яйца, бекон, ветчина, колбаса, сливочное масло, грибы, помидоры, сыр бри, маринованная фасоль, оливки, хлеб.",
                    price: 4000
                },
                {
                    title: "итальянский",
                    subMenu: "2 омлета, колбаса, итальянский сыр, помидор, песто, сыр бри, масло, оливки, хлеб",
                    price: 4000
                },
                {
                    title: "Завтрак с брускеттой",
                    subMenu: "Подается на 4 ломтиках хлеба с помидорами и базиликом / маринованная рыба, икра и руккола / авокадо, лайм и фисташки / омлет",
                    price: 4000
                },
                {
                    title: "Масло, варенье, хлеб",
                    price: 1000
                },
                {
                    title: "Фитнес-завтрак",
                    subMenu: "Мюсли, подается с йогуртом, бананом, клубникой, медом, миндалем",
                    price: 1800
                },
            ],
        },
        {
            mainType: "Салаты",
            icon: Images.salads,
            list: [
                {
                    title: "Армянский домашний салат",
                    subMenu: "Помидор, огурец, лук, базилик",
                    price: 1500
                },
                {
                    title: "Фантазия",
                    subMenu: "Куриная грудка, шпинат, бекон, помидор, фета, груша, соус дижонская горчица, гранатовый соус.",
                    price: 3000
                },
                {
                    title: "киноа",
                    subMenu: "Авокадо, куриная грудка, армянская зелень, киноа, болгарский перец, вяленые помидоры, кунжут, апельсиновый соус, гранатовый соус.",
                    price: 3500
                },
                {
                    title: "Цезарь с куриными наггетсами/креветками",
                    subMenu: "Куриная грудка или креветки, листья салата, пармезан, сухарики, соус цезарь",
                    price: "2500/4000"
                },
                {
                    title: "Горячий салат",
                    subMenu: "Вырезка телятины, руккола, листья салата, булг: перец, айва или персик, соус гранатовый",
                    price: 4000
                },
                {
                    title: "С телячьим языком",
                    subMenu: "Телячий язык, соленые огурцы, чернослив, шампиньоны, сыр, грецкие орехи, белый соус",
                    price: 2500
                },
                {
                    title: "Витамин",
                    subMenu: "Капуста, морковь, базилик, зелень, изюм, апельсиновый соус, гранатовый соус",
                    price: 2000
                },
                {
                    title: "греческий",
                    subMenu: "Салат, помидор, огурец, болгарский перец, фета, оливки, оливковое масло, лимон, орегано.",
                    price: 2500
                },
                {
                    title: "итальянский",
                    subMenu: "Помидоры, итальянский сыр, песто, оливковое масло, соус песто, гранатовый соус.",
                    price: 4000
                },
            ]
        },
        {
            mainType: "Бургер",
            icon: Images.burger,
            list: [
                {
                    title: "Классический",
                    subMenu: "Котлета из телятины, лист салата, помидор, маринованный огурец, лук, соус",
                    price: 2000
                },
                {
                    title: "Чизбургер",
                    subMenu: "Котлета из телятины, лист салата, помидор, сыр, соленые огурцы, лук, соус",
                    price: 2200
                },
                {
                    title: "Цезарь",
                    subMenu: "Куриная грудка, лист салата, помидор, сыр, соус цезарь",
                    price: 2500
                },
                {
                    title: "Чикен",
                    subMenu: "Куриная котлета, лист салата, помидор, сыр, соус",
                    price: 2000
                },
                {
                    title: "Шницель",
                    subMenu: "Шницель, салат, помидор, огурец, сыр, соус",
                    price: 2500
                },
                {
                    title: "Нур",
                    subMenu: "телятины, руккола, соус рокфор",
                    price: 3000
                },
                {
                    title: "Ангус",
                    subMenu: "Пэтти Ангус, листья салата, помидоры, сыр, соленые огурцы, лук, соус",
                    price: 3000
                },
                {
                    title: "С беконом",
                    subMenu: "Котлета из телятины, бекон, лист салата, помидор, сыр, соленые огурцы, лук, соус",
                    price: 3000
                },
                {
                    title: "Биг Бургер",
                    subMenu: "2 котлеты из телятины, 2 бекона, 2 сыра, листья салата, помидоры, соленые огурцы, лук, соус",
                    price: 3500
                },
                {
                    title: "С креветками",
                    subMenu: "Креветки, салат, огурец, авокадо",
                    price: 3000
                },
                {
                    title: "Веган",
                    subMenu: "Котлета из цукини, помидор, огурец, перец, гранатовый соус\n",
                    price: 2000
                },
            ]
        },
        {
            mainType: "Горячие блюда",
            icon: Images.dishes,
            list: [
                {
                    title: "Рыба в лаваше",
                    subMenu: null,
                    price: 3000
                },
                {
                    title: "Нур",
                    subMenu: "Медальон из телятины в винным соусом, овощами гриль, гранатовым сиропом",
                    price: 5000
                },
                {
                    title: "бефстроганов",
                    subMenu: "подается с картофелем фри и гранатовым сиропом",
                    price: 3500
                },
                {
                    title: "Чикенстроганов",
                    subMenu: "подается с картофелем фри",
                    price: 3000
                },
                {
                    title: "Бабушкина толма",
                    subMenu: "Виноградный лист, телятина, мускат",
                    price: 2500
                },
                {
                    title: "Жюльен",
                    subMenu: null,
                    price: 2000,
                },
                {
                    title: "Блинчики",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Панрхаш",
                    subMenu: "Тонкий сыр, лаваш, лук, масло",
                    price: 2500
                },
                {
                    title: "Ассортиментом сосисок",
                    subMenu: null,
                    price: 8500
                },
                {
                    title: "Суп дня",
                    subMenu: null,
                    price: 2000
                },
            ]
        },
        {
            mainType: "Сэндвич",
            icon: Images.sandwiches,
            list: [
                {
                    title: "Клуб",
                    subMenu: "Бекон, омлет, куриная грудка, сыр, помидор, горчичный соус",
                    price: 3000
                },
                {
                    title: "С креветками",
                    subMenu: "Креветки, салат, огурец, помидор, пармезан, авокадо",
                    price: 3000
                },
                {
                    title: "с курицей",
                    subMenu: "Куриная грудка, помидор, сыр, соус цезарь",
                    price: 2500
                },
                {
                    title: "с авокадо",
                    subMenu: "Маринованная рыба, авокадо, икра, огурец, руккола, гранатовый соус",
                    price: 3500
                },
                {
                    title: "Веган",
                    subMenu: "Авокадо, помидор, капуста, морковь, перец гриль",
                    price: 2000
                },
            ]
        },
        {
            mainType: "Пицца",
            icon: Images.pizza,
            list: [
                {
                    title: "Овощная",
                    subMenu: "Грибы, кукуруза, перец, помидоры, оливки, сыр",
                    price: 2700
                },
                {
                    title: "Венеция",
                    subMenu: "Куриная грудка, кукуруза, помидоры, оливки, сыр",
                    price: 3000
                },
                {
                    title: "Римский",
                    subMenu: "Колбаса копченая, филе, помидоры, оливки, сыр",
                    price: 3300
                },
                {
                    title: 'Четыре сыра',
                    subMenu: "2 вида моцареллы, голландский, сыр с плесенью",
                    price: 2700
                },
                {
                    title: "Пепперони",
                    subMenu: "Колбаса пепперони, сыр",
                    price: 2500
                },
                {
                    title: "Пицца Нур",
                    subMenu: "Бекон, песто, сыр, фирменный белый соус, гранатовый соус, лук по желанию",
                    price: 4000
                },
                {
                    title: "Пицца Буррата",
                    subMenu: "Буррата, руккола, бекон, помидор",
                    price: 4000
                },
            ]
        },
        {
            mainType: "Паста",
            icon: Images.pasta,
            list: [
                {
                    title: 'Тальяттеле Биф',
                    subMenu: "Говяжья вырезка, грибы, карамелизированный лук, вяленые помидоры, сливки, пармезан",
                    price: 3000
                },
                {
                    title: "Пене Песто",
                    subMenu: "Креветки, песто, вяленые помидоры, сливки, пармезан",
                    price: 4000
                },
                {
                    title: "Зеленый пенне с курицей",
                    subMenu: "Куриная грудка, шпинат, фисташки, грибы, сливки, пармезан",
                    price: 3000
                },
                {
                    title: "Пене Веган",
                    subMenu: "Домашний томатный соус, свежий базилик, кукуруза, перец",
                    price: 2700
                },
                {
                    title: "Карбонара Тальятелле",
                    subMenu: "Бекон, перепелиные яйца, сливки, пармезан",
                    price: 3000
                },
                {
                    title: "Пене Альфредо",
                    subMenu: "Куриная грудка, грибы, сливки, пармезан",
                    price: 3000
                },
            ]
        },

        {
            mainType: "Напитки",
            icon: Images.drinks,
            list: [
                {
                    title: "Свежевыжатый сок",
                    subMenu: [
                        {name: "Гранат", info: null, price: 1000},
                        {name: "Цитрус", info: null, price: 1000},
                        {name: "Яблоко/лимон", info: null, price: 800},
                        {name: "Базук/морковь", info: null, price: 800},
                    ]
                },
                {
                    title: "Домашний лимонад в стакане/графин",
                    subMenu: "Цитрус/ягода/груша/огурец/мята",
                    price: "1000/2500"
                },
                {
                    title: "Домашний компот в стакане/графин",
                    subMenu: "Сухой/ягодный",
                    price: "500/1500"
                },
                {
                    title: "Натуральный сок",
                    subMenu: null,
                    price: 550
                },
                {
                    title: "Натуральная вода",
                    subMenu: null,
                    price: 400
                },
                {
                    title: "Минеральная вода",
                    subMenu: null,
                    price: 400
                },
                {
                    title: "Пепси, чудесно, 7up",
                    subMenu: null,
                    price: 500
                },
                {
                    title: "Молочный шейк",
                    subMenu: "Ваниль/Шоколад/Фрукты",
                    price: 1500
                },
                {
                    title: "Фреш",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Детокс",
                    subMenu: "Шпинат, огурец, лимон, яблоко, мед",
                    price: 2000
                },
            ],
        },
        {
            mainType: "Десерт",
            icon: Images.dessert,
            list: [
                {
                    title: "Мороженое",
                    subMenu: [
                        {name: "+ Свежие фрукты", info: null, price: 400},
                        {name: "+ Шоколад", info: null, price: 400},
                        {name: "+ Орехи", info: null, price: 400},
                    ],
                    price: 600
                },
                {
                    title: "Фруктовое ассорти",
                    subMenu: "Арбуз, дыня, ягода",
                    price: 3000
                },
                {
                    title: "Выпечка дня",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Шокманже",
                    subMenu: null,
                    price: 1000
                }

            ],
        },
        {
            mainType: "Алкогольные напитки",
            icon: Images.alco,
            list: [
                {
                    title: "Коньяк Арарат 5 лет",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Коньяк Арарат 10 лет",
                    subMenu: null,
                    price: 3000
                },
                {
                    title: "Jack Daniels",
                    subMenu: null,
                    price: 2500
                },
                {
                    title: "Bacardi",
                    subMenu: null,
                    price: 2500
                },
                {
                    title: "Gin Bombay",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Jagermeister",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Martini Rosso",
                    subMenu: null,
                    price: 1500
                },
            ],
        },
        {
            mainType: "Кофе",
            icon: Images.coffee,
            list: [
                {
                    title: "Ристретто",
                    subMenu: null,
                    price: 900
                },
                {
                    title: "Эспрессо/Двойной эспрессо",
                    subMenu: null,
                    price: "900/1600"
                },
                {
                    title: "Лунго",
                    subMenu: null,
                    price: 900
                },
                {
                    title: "Американо",
                    subMenu: null,
                    price: 900
                },
                {
                    title: "Капучино",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Латте",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Латте арома",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Эспрессо макиато",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Карамельный макиато",
                    subMenu: null,
                    price: 1600
                },
                {
                    title: "Флэт Уайт",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Гляссе классический",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Ирландский",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: 'Фраппе',
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Фраппе с мороженым",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Восточный",
                    subMenu: null,
                    price: 500
                },
                {
                    title: "Парижанин",
                    subMenu: null,
                    price: 500
                },
            ],
        },

        {
            mainType: "Кофе Веган",
            icon: Images.v_coffee,
            list: [
                {
                    title: "Капучино с миндальным/кокосовым молоком",
                    subMenu: null,
                    price: 1700
                },
                {
                    title: "Латте макиато с миндальным/кокосовым молоком",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Карамельный макиато с миндальным/кокосовым молоком",
                    subMenu: null,
                    price: 2000
                },
            ],
        },
        {
            mainType: "Чай",
            icon: Images.tea,
            list: [
                {
                    title: "Нур",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "С армянскими травами",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "С корицей и гвоздикой",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Черный Ассам",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Зеленый Сенча",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Эль Грей",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Китайский жасмин",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Фруктовый пунш",
                    subMenu: null,
                    price: 800
                },
                {
                    title: "Имбирь-лимон",
                    subMenu: null,
                    price: 800
                },
                {
                    title: "Холодный чай",
                    subMenu: null,
                    price: 600
                },
            ],
        },
        {
            mainType: "Алкогольные коктейли",
            icon: Images.cocktails,
            list: [
                {
                    title: "Tequila Sunrise",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Long Island Ice Tea",
                    subMenu: null,
                    price: 220
                },
                {
                    title: "Blooming Island",
                    subMenu: null,
                    price: 2500
                },
                {
                    title: "Mojito",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Mojito fruit",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Blue Hawaii",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Night on beach",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Blue Lagoon",
                    subMenu: null,
                    price: 3000
                },
                {
                    title: "Margarita classical",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Margarita blue",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Malibu",
                    subMenu: null,
                    price: 1900
                },
            ],
        },
        {
            mainType: "Пиво",
            icon: Images.beer,
            list: [
                {
                    title: "Киликия",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Арарат",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Гюмри",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Александраполь",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Немецкий",
                    subMenu: null,
                    price: '1800-2500'
                },
                {
                    title: "Сет к пив",
                    subMenu: null,
                    price: 4000
                }
            ],
        },
        {
            mainType: "вина",
            icon: Images.wines,
            list: [
                {
                    title: "Иджеван бакал",
                    subMenu: "Красный, Белый",
                    price: 700
                },
                {
                    title: "Иджеван",
                    subMenu: "Красный, белый, розовый, розовый",
                    price: 700
                },
                {
                    title: "Гранат",
                    subMenu: null,
                    price: 5000
                },
                {
                    title: "Саргон",
                    subMenu: null,
                    price: 7000
                },
                {
                    title: "Гош",
                    subMenu: null,
                    price: 10000
                },
                {
                    title: "Сапор",
                    subMenu: null,
                    price: 12000
                },
                {
                    title: "Тушпа",
                    subMenu: null,
                    price: "8000-13000",
                },
                {
                    title: "Шампанское",
                    subMenu: null,
                    price: 4000
                },
                {
                    title: "Сет к вину",
                    subMenu: null,
                    price: 7000
                }
            ],
        },
    ],
    en: [
        {
            mainType: "Breakfast",
            icon: Images.breakfasts,
            list: [
                {
                    title: "Omelette",
                    subMenu: [
                        {name: "Omelet", info: null, price: 1000},
                        {
                            name: "with cheese and greens",
                            info: "3 eggs, cheese, fresh mixed Armenian greens, butter",
                            price: 2000
                        },
                        {name: "with basturma, sujukh", info: "3 eggs, basturma, sujukh, butter", price: 3000},
                        {name: "with tomatoes", info: "3 eggs, tomato, pepper, butter", price: 2000},
                    ]
                },
                {
                    title: "New York",
                    subMenu: "2 fried eggs, marinated fish, avocado, brie cheese, butter, olives, bread",
                    price: 4000
                },
                {
                    title: "English",
                    subMenu: "2 quail eggs, bacon, ham, sausage, butter, mushrooms, tomatoes, brie cheese, marinated beans, olives, bread.",
                    price: 4000
                },
                {
                    title: "Italian",
                    subMenu: "2 fried eggs, sausage, Italian cheese, tomato, pesto, brie cheese, butter, olives, bread",
                    price: 4000
                },
                {
                    title: "Bruschetta Breakfast",
                    subMenu: "Served on 4 slices of bread with tomato and basil / marinated fish, roe and arugula / avocado, lime and pistachio / omelette",
                    price: 4000
                },
                {
                    title: "Butter, jam, bread",
                    price: 1000
                },
                {
                    title: "Fitness breakfast",
                    subMenu: "Muesli, served with yogurt, banana, strawberry, honey, almonds",
                    price: 1800
                },
            ],
        },
        {
            mainType: "Salads",
            icon: Images.salads,
            list: [
                {
                    title: "Armenian homemade salad",
                    subMenu: "Tomato, cucumber, onion, basil",
                    price: 1500
                },
                {
                    title: "Fantasy",
                    subMenu: "Chicken breast, spinach, bacon, tomato, feta, pear, Dijon mustard sauce, pomegranate sauce.",
                    price: 3000
                },
                {
                    title: "with quinoa",
                    subMenu: "Avocado, chicken breast, Armenian greens, quinoa, bell pepper, sundried tomatoes, sesame, orange sauce, pomegranate sauce.",
                    price: 3500
                },
                {
                    title: "Caesar with chicken nuggets/shrimp",
                    subMenu: "Chicken breast or shrimp, lettuce, parmesan, dry bread, caesar sauce",
                    price: '2500/4000'
                },
                {
                    title: "Hot salad",
                    subMenu: "Veal tenderloin, arugula, lettuce, bulg: pepper, quince or peach, pomegranate sauce.",
                    price: 4000
                },
                {
                    title: "Language",
                    subMenu: "Veal tongue, pickles, prunes, mushrooms, cheese, walnuts, white sauce",
                    price: 2500
                },
                {
                    title: "Vitamin",
                    subMenu: "Cabbage, carrot, basil, greens, raisins, orange sauce, pomegranate sauce",
                    price: 2000
                },
                {
                    title: "Greek",
                    subMenu: "Lettuce, tomato, cucumber, bell pepper, feta, olive, olive oil, lemon, oregano.",
                    price: 2500
                },
                {
                    title: "Italian",
                    subMenu: "Tomato, Italian cheese, pesto, olive oil, pesto, pomegranate sauce.",
                    price: 4000
                },
            ]
        },
        {
            mainType: "Burgers",
            icon: Images.burger,
            list: [
                {
                    title: "Classic",
                    subMenu: "Veal cutlet, lettuce, tomato, pickle, onion, sauce",
                    price: 2000
                },
                {
                    title: "Cheeseburger",
                    subMenu: "Veal cutlet, lettuce, tomato, cheese, pickles, onion, sauce",
                    price: 2200,
                },
                {
                    title: "Caesar",
                    subMenu: "Chicken breast, lettuce, tomato, cheese, caesar sauce",
                    price: 2500
                },
                {
                    title: "Chicken",
                    subMenu: "Chicken cutlet, lettuce, tomato, cheese, sauce",
                    price: 2000
                },
                {
                    title: "Schnitzel",
                    subMenu: "Schnitzel, lettuce, tomato, cucumber, cheese, sauce",
                    price: 2500
                },
                {
                    title: "Pomegranate",
                    subMenu: "Veal tenderloin, arugula, Roquefort sauce",
                    price: 3000
                },
                {
                    title: "Angus",
                    subMenu: "Angus patty, lettuce, tomato, cheese, pickles, onion, sauce",
                    price: 3000
                },
                {
                    title: "With Bacon",
                    subMenu: "Veal cutlet, bacon, lettuce, tomato, cheese, pickles, onion, sauce",
                    price: 3000
                },
                {
                    title: "Big Burger",
                    subMenu: "2 veal cutlets, 2 bacon, 2 cheeses, lettuce, tomatoes, pickles, onions, sauce",
                    price: 3500
                },
                {
                    title: "With shrimp",
                    subMenu: "Shrimp, lettuce, cucumber, avocado",
                    price: 3000
                },
                {
                    title: "Vegan",
                    subMenu: "Pumpkin cutlet, tomato, cucumber, pepper, pomegranate sauce",
                    price: 2000
                },
            ]
        },
        {
            mainType: "Dishes",
            icon: Images.dishes,
            list: [
                {
                    title: "Fish stuffed with lavash",
                    subMenu: null,
                    price: 3000
                },
                {
                    title: "Pomegranate",
                    subMenu: "Veal medallion with wine sauce, grilled vegetables, pomegranate syrup",
                    price: 5000
                },
                {
                    title: "with beef stroganoff",
                    subMenu: "served with french fries and pomegranate syrup",
                    price: 3500
                },
                {
                    title: "with chicken stroganoff",
                    subMenu: "served with french fries",
                    price: 3000
                },
                {
                    title: "Grandma's Tolma",
                    subMenu: "Grape leaf, veal, mace",
                    price: 2500
                },
                {
                    title: "Julien",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Pancake",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Breakfast",
                    subMenu: "Thin cheese, lavash, onion, butter",
                    price: 2500
                },
                {
                    title: "Sausage Set",
                    subMenu: null,
                    price: 8500
                },
                {
                    title: "Soup of the day",
                    subMenu: null,
                    price: 2000
                },
            ]
        },
        {
            mainType: "Sandwiches",
            icon: Images.sandwiches,
            list: [
                {
                    title: "Club",
                    subMenu: "Bacon, omelette, chicken breast, cheese, tomato, mustard sauce",
                    price: 3000
                },
                {
                    title: "With shrimp",
                    subMenu: "Shrimp, lettuce, cucumber, tomato, parmesan, avocado",
                    price: 3000
                },
                {
                    title: "with chicken",
                    subMenu: "Chicken breast, tomato, cheese, caesar sauce",
                    price: 2500
                },
                {
                    title: "with avocado",
                    subMenu: "Marinated fish, avocado, roe, cucumber, arugula, pomegranate sauce",
                    price: 3500
                },
                {
                    title: "Vegan",
                    subMenu: "Avocado, tomato, cabbage, carrot, grilled pepper",
                    price: 2000
                },
            ]
        },
        {
            mainType: "Pizza",
            icon: Images.pizza,
            list: [
                {
                    title: "Vegetable",
                    subMenu: "Mushrooms, corn, peppers, tomatoes, olives, cheese",
                    price: 2700
                },
                {
                    title: "Venice",
                    subMenu: "Chicken breast, corn, tomatoes, olives, cheese",
                    price: 3000
                },
                {
                    title: "Roman",
                    subMenu: "Smoked sausage, fillet, tomatoes, olives, cheese",
                    price: 3300
                },
                {
                    title: "Four Cheeses",
                    subMenu: "2 types of mozzarella, Dutch, blue cheese",
                    price: 2700
                },
                {
                    title: "Pepperoni",
                    subMenu: "Sausage pepperoni, cheese",
                    price: 2500
                },
                {
                    title: "Pizza Noor",
                    subMenu: "Bacon, pesto, cheese, special white sauce, pomegranate sauce, onion as desired",
                    price: 4000
                },
                {
                    title: "Pizza Burrata",
                    subMenu: "Burrata, arugula, bacon, tomato",
                    price: 4000
                },
            ]
        },
        {
            mainType: "Pastas",
            icon: Images.pasta,
            list: [
                {
                    title: 'Tagliatelle Beef',
                    subMenu: "Beef tenderloin, mushrooms, caramelized onions, sundried tomatoes, cream, parmesan",
                    price: 3000
                },
                {
                    title: "Pene Pesto",
                    subMenu: "Shrimp, pesto, sundried tomatoes, cream, parmesan",
                    price: 4000
                },
                {
                    title: "Green Penne with Chicken",
                    subMenu: "Chicken breast, spinach, pistachio, mushroom, cream, parmesan",
                    price: 3000
                },
                {
                    title: "Pene Vegan",
                    subMenu: "Homemade tomato sauce, fresh basil, corn, pepper",
                    price: 2700
                },
                {
                    title: "Carbonara Tagliatelle",
                    subMenu: "Bacon, quail eggs, cream, parmesan",
                    price: 3000
                },
                {
                    title: "Pene Alfredo",
                    subMenu: "Chicken breast, mushrooms, cream, parmesan",
                    price: 3000
                },
            ]
        },

        {
            mainType: "Drinks",
            icon: Images.drinks,
            list: [
                {
                    title: "Freshly squeezed juice",
                    subMenu: [
                        {name: "Pomegranate", info: null, price: 1000},
                        {name: "Citrus", info: null, price: 1000},
                        {name: "Apple / lemon", info: null, price: 800},
                        {name: "Bazouk / carrot", info: null, price: 800},
                    ]
                },
                {
                    title: "Homemade lemonade in a glass/jug",
                    subMenu: "Citrus / berry / pear / cucumber / mint",
                    price: "1000/2500"
                },
                {
                    title: "Homemade compote in a glass/jug",
                    subMenu: "Dry/berry",
                    price: "500/1500"
                },
                {
                    title: "Natural juice",
                    subMenu: null,
                    price: 550
                },
                {
                    title: "Spring water",
                    subMenu: null,
                    price: 400
                },
                {
                    title: "Mineral water",
                    subMenu: null,
                    price: 400
                },
                {
                    title: "Pepsi, wonderful, 7up",
                    subMenu: null,
                    price: 500
                },
                {
                    title: "Milk shake",
                    subMenu: 'Vanilla/Chocolate/Fruit',
                    price: 1500
                },
                {
                    title: "Fresh",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Detox",
                    subMenu: "Spinach, cucumber, lemon, apple, honey",
                    price: 2000
                },
            ],
        },
        {
            mainType: "Dessert",
            icon: Images.dessert,
            list: [
                {
                    title: "Ice Cream",
                    subMenu: [
                        {name: "+ Fresh fruit", info: null, price: 400},
                        {name: "+ Chocolate", info: null, price: 400},
                        {name: "+ Walnut", info: null, price: 400},
                    ],
                    price: 600
                },
                {
                    title: "Fruit Assortment",
                    subMenu: "Watermelon, Melon, Berry",
                    price: 3000
                },
                {
                    title: "Cake of the Day",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Shokmanzhe",
                    subMenu: null,
                    price: 1000
                },
            ],
        },
        {
            mainType: "Alcoholic beverages",
            icon: Images.alco,
            list: [
                {
                    title: "Cognac Ararat 5 years",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Cognac Ararat 10 years",
                    subMenu: null,
                    price: 3000
                },
                {
                    title: "Jack Daniels",
                    subMenu: null,
                    price: 2500
                },
                {
                    title: "Bacardi",
                    subMenu: null,
                    price: 2500
                },
                {
                    title: "Gin Bombay",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: 'Jagermeister',
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Martini Rosso",
                    subMenu: null,
                    price: 1500
                },
            ],
        },
        {
            mainType: "Coffee",
            icon: Images.coffee,
            list: [
                {
                    title: "Ristretto",
                    subMenu: null,
                    price: 900
                },
                {
                    title: "Espresso / Double Espresso",
                    subMenu: null,
                    price: '900/1600'
                },
                {
                    title: "Lungo",
                    subMenu: null,
                    price: 900
                },
                {
                    title: "Americano",
                    subMenu: null,
                    price: 900
                },
                {
                    title: "Cappuccino",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Latte",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Latte Aroma",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Espresso Macchiato",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Caramel Macchiato",
                    subMenu: null,
                    price: 1600
                },
                {
                    title: "Flat White",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Glass Classic",
                    subMenu: null,
                    price: 1200
                },
                {
                    title: "Irish",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: 'Frappe',
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Frappé with ice cream",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Oriental",
                    subMenu: null,
                    price: 500
                },
                {
                    title: "Parisian",
                    subMenu: null,
                    price: 500
                },
            ],
        },
        {
            mainType: "Vegan Coffee",
            icon: Images.v_coffee,
            list: [
                {
                    title: "Cappuccino with almond/coconut milk",
                    subMenu: null,
                    price: 1700
                },
                {
                    title: "Latte macchiato with almond/coconut milk",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Caramel macchiato with almond/coconut milk",
                    subMenu: null,
                    price: 2000
                },
            ],
        },
        {
            mainType: "Tea",
            icon: Images.tea,
            list: [
                {
                    title: "Pomegranate",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "With Armenian herbs",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "With cinnamon and cloves",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Asma Black",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Sencha Green",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "El Gray",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Chinese Jasmine",
                    subMenu: null,
                    price: 600
                },
                {
                    title: "Fruit Punch",
                    subMenu: null,
                    price: 800
                },
                {
                    title: "With ginger and citrus",
                    subMenu: null,
                    price: 800
                },
                {
                    title: "Iced tea",
                    subMenu: null,
                    price: 600
                },
            ],
        },
        {
            mainType: "Alcoholic cocktails",
            icon: Images.cocktails,
            list: [
                {
                    title: "Tequila Sunrise",
                    subMenu: null,
                    price: 1500
                },
                {
                    title: "Long Island Ice Tea",
                    subMenu: null,
                    price: 220
                },
                {
                    title: "Blooming Island",
                    subMenu: null,
                    price: 2500
                },
                {
                    title: "Mojito",
                    subMenu: null,
                    price: 2000
                },
                {
                    title: "Mojito fruit",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Blue Hawaii",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Night on the beach",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Blue Lagoon",
                    subMenu: null,
                    price: 3000
                },
                {
                    title: "Margarita classical",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Margarita blue",
                    subMenu: null,
                    price: 2200
                },
                {
                    title: "Malibu",
                    subMenu: null,
                    price: 1900
                },
            ],
        },
        {
            mainType: "Beers",
            icon: Images.beer,
            list: [
                {
                    title: "Cilicia",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Ararat",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Gyumri",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "Alexandrapol",
                    subMenu: null,
                    price: 700
                },
                {
                    title: "German",
                    subMenu: null,
                    price: '1800-2500'
                },
                {
                    title: "Garejriset",
                    subMenu: null,
                    price: 4000
                }
            ],
        },
        {
            mainType: "wines",
            icon: Images.wines,
            list: [
                {
                    title: "Ijevan Bazhakov",
                    subMenu: "Red, White",
                    price: 700
                },
                {
                    title: "Ijevan",
                    subMenu: 'Red, White, Pink, Rose',
                    price: 700
                },
                {
                    title: "Pomegranate",
                    subMenu: null,
                    price: 5000
                },
                {
                    title: "Sargon",
                    subMenu: null,
                    price: 7000
                },
                {
                    title: "Gosh",
                    subMenu: null,
                    price: 10000
                },
                {
                    title: "jug",
                    subMenu: null,
                    price: 12000
                },
                {
                    title: "Tushpa",
                    subMenu: null,
                    price: '8000-13000'
                },
                {
                    title: "Champagne",
                    subMenu: null,
                    price: 4000
                },
                {
                    title: "Wine Set",
                    subMenu: null,
                    price: 7000
                }
            ],
        },
    ]
}


