// **Question-5**
// *tayyor*
// # 5: Юридик соҳага оид тест саволлари 
"use strick";
// Array of Objects
const quiz = [{
        num: 1,
        q: `1. Ҳуқуқий нормаларни қуйидаги қайси ҳужжатларга киритиш мумкин?`,
        options: [
            ` техник жиҳатдан тартибга солиш соҳасидаги норматив ҳужжатларга`,
            ` якка тартибдаги хусусиятга эга ҳужжатларга`,
            ` идоравий норматив-ҳуқуқий ҳужжатларга`,
            ` хусусий масалалар бўйича тушунтиришларга`,
        ],
        answer: 2
    },
    {
        num: 2,
        q: `2. Конституциясининг асосий принциплари нималардан иборат?`,
        options: [
            
            ` Давлат суверенитети, Халқ ҳокимиятчилиги, Конституция 
            ва қонуннинг устунлиги, Ташқи ва ички  сиёсат `,
            ` Давлат суверенитети, Конституция ва қонуннинг устунлиги, Ташқи сиёсат`,
            ` Давлат суверенитети, Халқ ҳокимиятчилиги, Конституция ва қонуннинг устунлиги, Ташқи сиёсат`,
            ` Давлат суверенитети, Халқ ҳокимиятчилиги, Конституция ва қонуннинг устунлиги, Ташқи ва ички  сиёсат `,
        ],
        answer: 2
    },
    {
        num: 3,
        q: `3. Фуқароларнинг сиёсий ҳуқуқлари кўрсатилган қаторни топинг. `,
        options: [
            ` Шахсий дахлсизлик ҳуқуқи`,
            ` Фикрлаш, сўз ва эътиқод эркинлиги ҳуқуқи`,
            ` Ижтимоий таъминот олиш ҳуқуқи`,
            ` Халқ вакилларига ариза, таклиф ва шикоятлар билан мурожаат қилиш`,
        ],
        answer: 3
    },
    {
        num: 4,
        q: `4. Ўзбекистон Республикаси Конституциясининг тузилиши тўғри кўрсатилган қаторни белгиланг.`,
        options: [
            ` 126 та модда, 28 та боб, 6 та бўлим`,
            ` 127 та модда, 28 та боб, 5 та бўлим`,
            ` 122 та модда, 28 та боб, 6 та бўлим`,
            ` 128 та модда, 26 та боб, 6 та бўлим`,
        ],
        answer: 3
    },
    {
        num: 5,
        q: `5. Фуқароларнинг бурчлари  кўрсатилган қаторни топинг.`,
        options: [
            ` Одоб-аҳлоқ ва ҳуқуқ нормаларига риоя қилиш `,
            ` Халқининг тарихий, маънавий ва маданий меросини авайлаб асраш`,
            ` Ахборот хавфсизлиги қоидаларига риоя қилиш`,
            ` Жамоат хавфсизлигини  таъминлаш`,
        ],
        answer: 1
    },
    {
        num: 6,
        q: `6.Ўзбекистон Республикаси Конституциясига мувофиқ 
        Ўзбекистон Республикасининг маъмурий-ҳудудий тузилиши қандай?`,
        options: [
            
            ` Вилоятлар, туманлар, шаҳарлар, шаҳарчалар, 
            қишлоқлар, овуллар, шунингдек Қорақалпоғистон Республикасидан иборат `,
            ` Вилоятлар, туманлар, шаҳарлар, қишлоқлар, овуллар, шунингдек Қорақалпоғистон Республикасидан иборат`,
            ` Вилоятлар, туманлар, шаҳарлар, шаҳарчалар, қишлоқлар, шунингдек Қорақалпоғистон Республикасидан иборат`,
            ` Вилоятлар, туманлар, шаҳарлар, шаҳарчалар, овуллар, шунингдек Қорақалпоғистон Республикасидан иборат `,
        ],
        answer: 0
    },
    {
        num: 7,
        q: `7. Ўзбекистон Республикаси Олий Мажлисининг 
        Қонунчилик палатаси ва Сенати ваколат муддати неча йилни ташкил қилади?`,
        options: [
            ` етти йил `,
            ` уч йил`,
            ` беш йил`,
            ` икки йил`,
        ],
        answer: 2
    },
    {
        num: 8,
        q: `8. Бош вазир номзоди унинг учун тегишинча Ўзбекистон Республикаси 
        Олий Мажлисининг Қонунчилик палатаси депутатлари ва Сенати аъзолари 
        томонидан нечта овоз берилган тақдирда тасдиқланган ҳисобланади?`,
        options: [
            ` Қонунчилик палатаси депутатлари ва Сенати аъзоларининг умумий учдан икки қисми овоз берган тақдирда`,
            ` Қонунчилик палатаси депутатлари ва Сенати аъзоларининг умумий учдан бир қисми овоз берган тақдирда`,
            ` Қонунчилик палатаси депутатлари ва Сенати аъзоларининг умумий ярмидан кўпи овоз берган тақдирда`,
            ` Қонунчилик палатаси депутатлари ва Сенати аъзоларининг барчаси овоз берган тақдирда`,
        ],
        answer: 2
    },
    {
        num: 9,
        q: `9. Ўзбекистон Республикаси Давлат бюджетидан ва давлат мақсадли 
        жамғармалари бюджетларидан маблағлар ажратиш, шунингдек, давлат 
        харидларини амалга ошириш масалаларига оид Вазирлар Маҳкамаси қарор 
        лойиҳаларини ишлаб чиқишда қайси давлат органи билан идоравий келишувни амалга ошириш лозим? `,
        options: [
            ` Иқтисодий тараққиёт ва камбағалликни қисқартириш вазирлиги билан`,
            ` Молия вазирлиги билан`,
            ` Инвестициялар ва ташқи савдо вазирлиги билан`,
            ` Савдо-саноат палатаси билан`,
        ],
        answer: 1
    },
    {
        num: 10,
        q: `10. Қонунчилик ташаббуси ҳуқуқига ега бўлмаган давлат ҳокимияти 
        органлари ва шахслар  кўрсатилган қаторни аниқланг.`,
        options: [
            ` Олий суд`,
            ` Бош прокурор`,
            ` Конституциявий суд`,
            ` Халқ депутатлари Кенгаши`,
        ],
        answer: 3
    },
    {
        num: 11,
        q: `11. Битим турлари тўғри кўрсатилган қаторни белгиланг`,
        options: [
            ` бир тарафлама`,
            ` икки тарафлама`,
            ` оғзаки ёки ёзма `,
            ` А ва Б жвоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 12,
        q: `12. Ҳукуматнинг ҳужжат лойиҳаларига нисбатан ҳуқуқий хулосани 
        тайёрлаш муддати неча кундан ортиқ бўлмаслиги керак?`,
        options: [
            ` 30 кун`,
            ` 15 кун`,
            ` 10 кун`,
            ` бир ҳафта`,
        ],
        answer: 2
    },
    {
        num: 13,
        q: `13. Қандай гаров турлари мавжуд?`,
        options: [
            ` Закалат гарови`,
            ` Ипотека гарови`,
            ` ҳуқуқлар гарови`,
            ` барча жавоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 14,
        q: `14. Фуқаро қачондан бошлаб муомала лаёқатига эга  бўлади?`,
        options: [
            ` Туғилган пайтдан эътиборан`,
            ` Ўн саккиз ёшга тўлгач `,
            ` Никоҳдан ўтган вақтдан эътиборан `,
            ` А ва В жавоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 15,
        q: `15. Жамоа шартномаси қандай ҳолатда тузилган ҳисобланади?`,
        options: [
            ` Конференцияда иштирок этаётганларнинг эллик фоизидан кўпроғи ёқлаб овоз берганда`,
            ` Тарафлар ўртасида имзолангандан сўнг `,
            ` умумий йиғилишда иштирок этаётганларнинг ўттиз фоизидан кўпроғи ёқлаб овоз берганда`,
            ` тўғри жавоб йўқ`,
        ],
        answer: 0
    },
    {
        num: 16,
        q: `16. Фуқароларнинг шахсий ҳуқуқ ва эркинликлари кўрсатилган қаторни топинг.`,
        options: [
            ` Яшаш ҳуқуқи`,
            ` Сиёсий партияларга ва бошқа жамоат бирлашмаларига уюшиш ҳуқуқи`,
            ` Мулкдор бўлиш ҳуқуқи`,
            ` Тиббий хизматдан фойдаланиш ҳуқуқи `,
        ],
        answer: 0
    },
    {
        num: 17,
        q: `17. Кимлар томонидан норматив-ҳуқуқий ҳужжат лойиҳалари коррупцияга қарши экспертизадан ўтказилади?`,
        options: [
            ` адлия органлари томонидан`,
            ` лойиҳани ишлаб чиқувчиси томонидан`,
            ` вазирлик ва идорларнинг юридик хизмати томонидан`,
            ` А ва Б жавоблар тўғри`,
        ],
        answer: 1
    },
    {
        num: 18,
        q: `18. Қуйидагилардан қайсилари коррупцияга қарши экспертиза ўтказиш 
        учун асосий ахборот манбалари ҳисобланмайди?`,
        options: [
            ` норматив-ҳуқуқий ҳужжатлар`,
            ` халқаро шартномалар`,
            ` суд амалиёти`,
            ` ички идоравий ҳужжатлар`,
        ],
        answer: 3
    },
    {
        num: 19,
        q: `19. Юридик хизмат ходимини лавозимга тайинлаш масаласида адлия 
        органлари билан келишишда номзод суҳбатдан ўта олмаса қанча муддатдан 
        сўнг лавозимга қайта тавсия этилиши мумкин?`,
        options: [
            ` 15 кун муддатда `,
            ` 1 ой муддатда `,
            ` 3 ой муддатда`,
            ` 10 кун муддатда`,
        ],
        answer: 1
    },
    {
        num: 20,
        q: `20. Икки ёки ундан ортиқ вазирлик ва идораларнинг идоравий 
        норматив-ҳуқуқий ҳужжатлари қандай шаклда қабул қилинади?`,
        options: [
            ` буйруқ`,
            ` қарор`,
            ` фармон`,
            ` келишув`,
        ],
        answer: 1
    },
    {
        num: 21,
        q: `21. Тадбиркорлик фаолияти соҳасидаги шартномавий муносабатларнинг 
        асосий принциплар нотўғри кўрсатилган қаторни топинг. `,
        options: [
            ` тарафларнинг ўзаро манфаатдорлиги `,
            ` хўжалик шартномаларини тузишнинг эркинлиги`,
            ` шартнома шартлари сўзсиз бажарилиши`,
            ` шартнома интизомига риоя этиш`,
        ],
        answer: 2
    },
    {
        num: 22,
        q: `22. Идоравий норматив-ҳуқуқий ҳужжатларга қандай ҳуқуқий нормалар киритилиши тақиқланади?`,
        options: [
            ` жинси бўйича бевосита ёки билвосита камситиш имконини яратадиган`,
            ` давлат ҳокимияти ва бошқаруви органлари тизимида коррупция, бошқа 
            ҳуқуқбузарликлар содир этилиши учун шароит яратадиган`,
            ` хўжалик бошқаруви органлари ваколатига кирувчи масалалар ва корпоратив муносабатларни тартибга соладиган`,
            ` барчаси тўғри`,
        ],
        answer: 3
    },
    {
        num: 23,
        q: `23. Қандай турдаги ҳужжатлар билан идоравий норматив-ҳуқуқий 
        ҳужжатларни қабул қилиш ваколатини беришга йўл қўйилмайди?`,
        options: [
            ` Идоравий норматив-ҳуқуқий ҳужжатлар билан `,
            ` Норматив-ҳуқуқий ҳужжатлар билан`,
            ` Ички идоравий ҳужжатлар билан`,
            ` А ва С жавоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 24,
        q: `24. Қурилиш пудрати шартномаси тўғрисидаги қоидалар нималарга нисбатан татбиқ этилади?`,
        options: [
            ` бино ва иншоотларни капитал таъмирлаш ишларига`,
            ` ер участкаларига`,
            ` уй-жой биносини қуришга`,
            ` барча жавоблар тўғри`,
        ],
        answer: 0
    },
    {
        num: 25,
        q: `25. Идоравий норматив-ҳуқуқий ҳужжатни ишлаб чиқишда қуйидагилардан 
        қайсилари юридик хизмат хулосасида акс эттирилиши лозим?`,
        options: [
            ` идоравий норматив-ҳуқуқий ҳужжатни қабул қилиш учун асос`,
            ` ушбу орган томонидан ушбу масала бўйича муқаддам қабул қилинган 
            идоравий норматив-ҳуқуқий ҳужжатлар тўғрисидаги маълумотлар`,
            ` идоравий норматив-ҳуқуқий ҳужжат лойиҳасининг коррупцияга қарши 
            ҳамда гендер-ҳуқуқий экспертизадан ўтказилганлиги ва унинг натижаси тўғрисидаги маълумотлар`,
            ` барчаси тўғри`,
        ],
        answer: 3
    },
    {
        num: 26,
        q: `26. Юридик хизмат мавжуд бўлмаган тақдирда, идоравий 
        норматив-ҳуқуқий ҳужжат лойиҳаси бўйича юридик хизмат хулосаси ким томонидан тайёрланиши керак?`,
        options: [
            ` идоравий норматив-ҳуқуқий ҳужжатни тайёрлаш учун масъул бўлган таркибий бўлинма`,
            ` адлия органлари `,
            ` юридик хулоса тайёрланмайди`,
            ` А ва В жавоблар тўғри`,
        ],
        answer: 0
    },
    {
        num: 27,
        q: `27. Лойиҳаларининг коррупцияга қарши экспертизаси натижалари 
        юзасидан коррупциявий омилларни аниқлаш бўйича қандай ҳужжат тайёрланади?`,
        options: [
            ` Тушунтириш хати `,
            ` Таққослама жадвал `,
            ` Чеклист`,
            ` Коррупцияга қарши экспертиза маълумотномаси`,
        ],
        answer: 2
    },
    {
        num: 28,
        q: `28. Ўзига талабнома билдирилган хўжалик юритувчи субъект 
        талабномани олган кундан бошлаб неча кунлик муддат ичида унга жавоб қайтариши шарт.`,
        options: [
            ` Бир ойик муддатда`,
            ` Бир ҳафталик муддатда `,
            ` Ўн кунлик муддатда`,
            ` Ўн беш кунлик муддатда`,
        ],
        answer: 2
    },
    {
        num: 29,
        q: `29. Шартнома шартларини бажармаганлик учун жавобгарлик масаласи 
        шартномада белгиланмаган бўлса қандай жавобгарлик юза келиши мумкин?`,
        options: [
            ` Моддий ва номоддий жавобгарлик`,
            ` Маъмурий жавобгарлик`,
            ` Жиноий жавобгарлик`,
            ` барчаси тўғри`,
        ],
        answer: 3
    },
    {
        num: 30,
        q: `30. Агар маҳсулот етказиб бериш шартномасида унинг амал қилиш 
        муддати белгиланмаган бўлса, шартнома қанча муддатга тузилган деб ҳисобланади?`,
        options: [
            ` Доимий муддатга`,
            ` Маҳсулот етказиб берилгунга қадар бўлган муддатга`,
            ` Бир йиллик`,
            ` Тузилмаган деб ҳисобланади`,
        ],
        answer: 2
    },
    {
        num: 31,
        q: `31. Идоравий норматив-ҳуқуқий ҳужжат у биринчи келишилаётган 
        вазирлик ва идора билан келишилганидан сўнг неча кун ичида қабул қилиниши керак?`,
        options: [
            ` икки ойда`,
            ` ўн кунда`,
            ` ўттиз кунда `,
            ` ўн беш кунда`,
        ],
        answer: 2
    },
    {
        num: 32,
        q: `32. Ўзаро боғлиқ бўлиб, баъзилари маъмурий судга, бошқалари эса 
        фуқаролик ишлари бўйича судга тааллуқли бўлган бир нечта талаб 
        бирлаштирилган тақдирда, барча талаблар қайси судда кўрилиши лозим.`,
        options: [
            ` Маъмурий судда `,
            ` Фуқаролик ишлари бўйича судда`,
            ` Кўрилаётган ишнинг ҳажмидан келиб чиқиб қайси судга кўпроқ тааллуқли бўлса ўша судда`,
            ` Маъмурий ва фуқаролик ишлари бўйича суд судияларидан таркиб топган судлов ҳайъатида`,
        ],
        answer: 1
    },
    {
        num: 33,
        q: `33. Қандай турдаги норматив-ҳуқуқий ҳужжат мажбурий тарзда тартибга солиш таъсирини баҳолашдан ўтказилади?`,
        options: [
            ` норматив-ҳуқуқий ҳужжат лойиҳаси фавқулодда вазиятларнинг олдини 
            олиш ёки уларнинг оқибатларини бартараф этиш, юқумли ва паразитар 
            касалликлар тарқалишининг олдини олиш бўйича чекловчи тадбирлар (карантин)ни белгилашга қаратилган бўлса`,
            ` норматив-ҳуқуқий ҳужжат лойиҳаси ёки қабул қилинган 
            норматив-ҳуқуқий ҳужжатда янги қабул қилинган қонунчилик 
            ҳужжатларининг талабларига мувофиқлаштиришга қаратилган ўзгартириш ва қўшимчалар назарда тутилса`,
            ` Тадбиркорлик фаолиятига, фуқароларнинг ҳуқуқлари, эркинликлари ва 
            қонуний манфаатларига ҳамда атроф-муҳитга таъсир кўрсатишни назарда 
            тутувчи норматив-ҳуқуқий ҳужжат лойиҳаси ва қабул қилинган норматив-ҳуқуқий ҳужжатлар`,
            ` А ва В жавоблар тўғри`,
        ],
        answer: 2
    },
    {
        num: 34,
        q: `34. Суд қайси ҳолларда аризани кўрмасдан қолдиради?`,
        options: [
            ` Иш судга тааллуқли бўлмаса `,
            ` Жавобгар қидирилаётган бўлса`,
            ` Тараф Ўзбекистон Республикаси Қуролли Кучлари таркибида муддатли 
            ҳақиқий ҳарбий хизматни ўтаётганда ёки мазкур шахслар давлатнинг 
            бирор-бир мажбуриятини бажариш учун жалб қилинганда `,
            ` Ариза муомалага лаёқатсиз шахс томонидан берилган бўлса`,
        ],
        answer: 3
    },
    {
        num: 35,
        q: `35. Апелляция инстанцияси суди қарорининг кўчирма нусхаси ишда 
        иштирок этувчи шахсларга у қабул қилинган кундан эътиборан неча кундан кечиктирмай юборилади?`,
        options: [
            ` уч кунда`,
            ` тўрт кунда`,
            ` беш кунда`,
            ` бир ҳафтада`,
        ],
        answer: 2
    },
    {
        num: 36,
        q: `36. Тартибга солиш таъсирини баҳолаш бўйича ҳисоботда қандай маълумотлар акс эттирилади?`,
        options: [
            ` лойиҳанинг кутилаётган кучга кириш санаси`,
            ` муаммони ҳал қилиш учун мумкин бўлган муқобил усуллар таҳлили`,
            ` манфаатдор томонлар учун лойиҳани қабул қилиш ва уни амалга 
            оширишдан олинадиган фойда ва (ёки) юзага келадиган харажатларни 
            миқдорий ҳисоблаш йўли билан амалга оширилган таҳлил ва таққослаш натижалари`,
            ` барчаси тўғри`,
        ],
        answer: 3
    },
    {
        num: 37,
        q: `37. ТСТБ тўғрисидаги ҳисобот рақобат бўйича таъсири қайси давлат органи томонидан ўрганилади?`,
        options: [
            ` Молия вазирлиги томонидан`,
            ` Монополияга қарши курашиш қўмитаси томонидан`,
            ` Иқтисодий тараққиёт ва камбағалликни қисқартириш вазирлиги томонидан`,
            ` Савдо-саноат палатаси томонидан `,
        ],
        answer: 1
    },
    {
        num: 38,
        q: `38. Товарларни етказиб бериш муддатлари кечиктириб юборилган, тўлиқ 
        етказиб берилмаган, ишлар бажарилмаган ёки хизматлар кўрсатилмаган 
        ҳолларда шартнома тарафларининг жавобгарлиги қандай амалга оширилади?`,
        options: [
            ` товар етказиб берувчи (пудратчи) сотиб олувчига (буюртмачига) 
            кечиктирилган ҳар бир кун учун мажбурият бажарилмаган қисмининг 0,5 
            фоизи миқдорида пеня тўлайди, бироқ бунда пенянинг умумий суммаси 
            етказиб берилмаган товарлар, бажарилмаган ишлар ёки кўрсатилмаган 
            хизматлар баҳосининг 50 фоизидан ошиб кетмаслиги лозим`,
            ` товарлар (ишлар ва хизматлар) қийматининг 20 фоизи миқдорида жарима ундириб олиш`,
            ` товарлар қийматининг 5 фоизи миқдорида жарима тўлаш`,
            ` товар қийматининг 1 фоизи миқдорида жарима тўлаш`,
        ],
        answer: 0
    },
    {
        num: 39,
        q: `39. “Хабеас-корпус” сўзининг маъноси нима ва биринчи марта қайерда қўлланила бошланган?`,
        options: [
            ` Англияда қўлланилган, “муҳофаза қилиш”`,
            ` Данияда қўлланилган, “жазолаш”`,
            ` Франсияда қўлланилган, “ҳимоя қилиш”`,
            ` Англияда қўлланилган, “шахсни келтириш”`,
        ],
        answer: 3
    },
    {
        num: 40,
        q: `40. Хўжалик шартномасида нималар назарда тутилиши керак?`,
        options: [
            ` шартноманинг бажарилиш муддатларини`,
            ` шартнома мажбуриятлари бажарилмаганда ёки лозим даражада бажарилмаганда тарафларнинг жавобгарлигини`,
            ` шартнома тузилган сана ва жойни`,
            ` барча жавоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 41,
        q: `41. Бош вазир номзоди ким томонидан таклиф этилади?`,
        options: [
            ` Олий Мажлисининг Қонунчилик палатаси томонидан`,
            ` Олий Мажлис Сенати томонидан`,
            ` Ўзбекистон Республикаси Президенти томонидан `,
            ` Олий Мажлисининг Қонунчилик палатасига сайловда энг кўп 
            депутатлик ўринларини олган сиёсий партия ёки тенг миқдордаги энг 
            кўп депутатлик ўринларини қўлга киритган бир неча сиёсий партия томонидан`,
        ],
        answer: 3
    },
    {
        num: 42,
        q: `42. Юридик хизмат ходимининг Давлат органи ва ташкилоти томонидан 
        ишлаб чиқилаётган (қабул қилинаётган) норматив-ҳуқуқий ва бошқа 
        ҳужжатлар лойиҳаларининг қонунчиликка мувофиқлиги устидан назоратни 
        олиб бориш, шунингдек давлат органи ва ташкилотининг қонун ижодкорлиги 
        фаолиятида иштирок этиш, қонунчиликни такомиллаштириш юзасидан 
        таклифларни тайёрлаш масалаларида тузилмалар ишини мувофиқлаштириш соҳасида қандай функцияни амлга оширади?`,
        options: [
            ` давлат органи ва ташкилоти раҳбариятига давлат органи ва 
            ташкилоти фаолиятида қонун устуворлиги ва қонунийликни таъминлаш аҳволи юзасидан ҳисобот тақдим этади;`,
            ` давлат органи ва ташкилоти ваколатига кирадиган масалалар бўйича 
            норматив-ҳуқуқий ҳужжатлар лойиҳаларини ишлаб чиқади ёхуд ишлаб чиқишда иштирок этади;`,
            ` давлат органи ва ташкилоти раҳбарияти учун қонунчилик масалалари 
            бўйича таҳлилий материаллар тайёрлайди;`,
            ` давлат органи ва ташкилотида, шунингдек тегишли тузилмаларда 
            ҳуқуқни қўллаш амалиётини ўрганади, таҳлил қилади ва умумлаштиради, 
            уни такомиллаштириш бўйича таклифлар тайёрлайди ва раҳбариятга киритади`,
        ],
        answer: 1
    },
    {
        num: 43,
        q: `43. Норматив-ҳуқуқий ҳужжат тушунчасига қайси қаторда тўғри  таъриф берилган?`,
        options: [
            ` Норматив-ҳуқуқий ҳужжат амалдаги қонун ҳужжатларига мувофиқ қабул 
            қилинган, умуммажбурий давлат кўрсатмалари сифатида ҳуқуқий 
            нормаларни белгилашга, ўзгартиришга ёки бекор қилишга қаратилган расмий ҳужжатдир.`,
            ` Норматив-ҳуқуқий ҳужжат қонунчиликка мувофиқ қабул қилинган, 
            умуммажбурий давлат кўрсатмалари сифатида ҳуқуқий нормаларни белгилашга қаратилган расмий ҳужжатдир.`,
            ` Норматив-ҳуқуқий ҳужжат қонунчиликка мувофиқ қабул қилинган, 
            умуммажбурий давлат кўрсатмалари сифатида ҳуқуқий нормаларни 
            белгилашга, ўзгартиришга ёки бекор қилишга қаратилган расмий ҳужжатдир.`,
            ` Норматив-ҳуқуқий ҳужжат умуммажбурий давлат кўрсатмалари сифатида 
            ҳуқуқий нормаларни белгилашга, ўзгартиришга ёки бекор қилишга қаратилган расмий ҳужжатдир.`,
        ],
        answer: 2
    },
    {
        num: 44,
        q: `44. Норматив-ҳуқуқий ҳужжат турлари қайсилар?`,
        options: [
            ` Ўзбекистон Республикасининг Конституцияси, қонунлари, Ўзбекистон 
            Республикаси Олий Мажлиси палаталарининг қарорлари, Ўзбекистон 
            Республикаси Президентининг фармонлари ва қарорлари, Вазирлар 
            Маҳкамасининг қарорлари, вазирликлар, давлат қўмиталари ва 
            идораларнинг буйруқлари ҳамда қарорлари, маҳаллий давлат ҳокимияти органларининг қарорлари;`,
            ` Ўзбекистон Республикасининг Конституцияси, қонунлари, Ўзбекистон 
            Республикаси Олий Мажлиси палаталарининг қарорлари, Ўзбекистон 
            Республикаси Президентининг фармонлари, қарорлари ва фармойишлари, 
            Вазирлар Маҳкамасининг қарорлари, вазирликлар, давлат қўмиталари ва 
            идораларнинг қарорлари, маҳаллий давлат ҳокимияти органларининг қарорлари;`,
            `  Ўзбекистон Республикасининг Конституцияси, қонунлари, Ўзбекистон 
            Республикаси Олий Мажлиси палаталарининг қарорлари, Ўзбекистон 
            Республикаси Президентининг фармонлари, қарорлари ва фармойишлари, 
            Вазирлар Маҳкамасининг қарорлари ва фармойишлари;`,
            ` Ўзбекистон Республикасининг Конституцияси, қонунлари, Ўзбекистон 
            Республикаси Олий Мажлиси палаталарининг қарорлари, Ўзбекистон 
            Республикаси Президентининг фармонлари, қарорлари ва фармойишлари, 
            Вазирлар Маҳкамасининг қарорлари ва фармойишлари, вазирликлар, 
            давлат қўмиталари ва идораларнинг буйруқлари, қарорлари ҳамда 
            фармойишлари, маҳаллий давлат ҳокимияти органларининг қарорлари;`,
        ],
        answer: 0
    },
    {
        num: 45,
        q: `45. Норматив-ҳуқуқий ҳужжатлар лойиҳаларини лойиҳа ишлаб чиқувчи 
        ташкилотлар томонидан Ўзбекистон Республикаси Ягона интерактив давлат 
        хизматлари порталига жамоатчилик муҳокамасидан ўтказилиши тартиби қандай.`,
        options: [
            ` ишлаб чиқувчи норматив-ҳуқуқий ҳужжат лойиҳасини порталга уни 
            вазирлик ва идоралар билан келишишдан олдин норматив-ҳуқуқий ҳужжат 
            қабул қилувчи органга киритишдан олдин жойлаштиради.`,
            ` ишлаб чиқувчи норматив-ҳуқуқий ҳужжат лойиҳасини порталга уни 
            Вазирлар Маҳкамасига киритишдан олдин жойлаштиради.`,
            ` ишлаб чиқувчи норматив-ҳуқуқий ҳужжат лойиҳасини порталга уни 
            Адлия вазирлигига киритишдан олдин жойлаштиради.`,
            ` ишлаб чиқувчи норматив-ҳуқуқий ҳужжат лойиҳасини порталга уни 
            норматив-ҳуқуқий ҳужжат қабул қилувчи органга киритишдан олдин жойлаштиради.`,
        ],
        answer: 3
    },
    {
        num: 46,
        q: `46. Норматив-ҳуқуқий ҳужжат лойиҳасининг Ўзбекистон Республикаси 
        Ягона интерактив давлат хизматлари порталдаги жамоатчилик муҳокамаси муддати`,
        options: [
            ` норматив-ҳуқуқий ҳужжат лойиҳаси жойлаштирилган кундан эътиборан ўн кундан кам бўлмаслиги керак.`,
            ` норматив-ҳуқуқий ҳужжат лойиҳаси жойлаштирилган кундан эътиборан ўн беш кундан кам бўлмаслиги керак.`,
            ` норматив-ҳуқуқий ҳужжат лойиҳаси жойлаштирилган кундан эътиборан йигирма кундан кам бўлмаслиги керак.`,
            ` норматив-ҳуқуқий ҳужжат лойиҳасини ишлаб чиқувчи томонидан белгиланган муддатда.`,
        ],
        answer: 1
    },
    {
        num: 47,
        q: `47. Ҳуқуқий экспертиза нима?`,
        options: [
            ` Қонунчилик ҳужжатлари лойиҳасининг Ўзбекистон Республикасининг 
            Конституцияси ва қонунларига, бошқа норматив-ҳуқуқий ҳужжатларга, 
            юридик-техник жиҳатдан расмийлаштиришнинг талабларига мувофиқлиги, 
            шу жумладан норматив-ҳуқуқий ҳужжат лойиҳасида ҳавола қилувчи 
            нормалар қўлланилишининг асослилиги ҳамда мақсадга мувофиқлигини текшириш.`,
            ` Қонунчилик ҳужжатлари лойиҳасининг Ўзбекистон Республикасининг 
            Конституцияси ва қонунларига, унга нисбатан юқорироқ юридик кучга 
            эга бўлган бошқа норматив-ҳуқуқий ҳужжатларга, ҳамда лойиҳада 
            ҳавола қилувчи нормалар қўлланилишининг асослилиги ҳамда мақсадга мувофиқлигини текшириш.`,
            ` Норматив-ҳуқуқий ҳужжат лойиҳасининг Ўзбекистон Республикасининг 
            Конституцияси ва қонунларига, унга нисбатан юқорироқ юридик кучга 
            эга бўлган бошқа норматив-ҳуқуқий ҳужжатларга, юридик-техник 
            жиҳатдан расмийлаштиришнинг талабларига мувофиқлиги, шу жумладан 
            норматив-ҳуқуқий ҳужжат лойиҳасида ҳавола қилувчи нормалар 
            қўлланилишининг асослилиги ҳамда мақсадга мувофиқлигини текшириш.`,
            ` Норматив-ҳуқуқий ҳужжат лойиҳасининг амалдаги норматив-ҳуқуқий 
            ҳужжатларга, юридик-техник жиҳатдан расмийлаштиришнинг талабларига 
            мувофиқлиги, шу жумладан норматив-ҳуқуқий ҳужжат лойиҳасида ҳавола 
            қилувчи нормалар қўлланилишининг асослилиги ҳамда мақсадга мувофиқлигини текшириш.`,
        ],
        answer: 2
    },
    {
        num: 48,
        q: `48. Идоравий норматив-ҳуқуқий ҳужжат у биринчи келишилаётган 
        вазирлик ва идора билан келишилганидан сўнг, қанча муддатда қабул қилиниши керак.`,
        options: [
            ` ўн беш кун ичида қабул қилиниши керак.`,
            ` ўттиз кун ичида қабул қилиниши керак.`,
            ` икки ой ичида қабул қилиниши керак.`,
            ` муддат белгиланмаган.`,
        ],
        answer: 1
    },
    {
        num: 49,
        q: `49. Тартибга солиш таъсирини баҳолаш тушунчасига қайси қаторда тўғри таъриф келтирилган?`,
        options: [
            ` Тартибга солиш таъсирини баҳолаш норматив-ҳуқуқий ҳужжат 
            лойиҳасининг қабул қилиниши натижасида юзага келиши мумкин бўлган 
            эҳтимолий оқибатларни ва унинг тартибга солиш мақсадларига 
            эришилишини баҳолашга қаратилган чора-тадбирлар мажмуидан иборатдир.`,
            ` Қонунчилик ҳужжатлари лойиҳасининг Ўзбекистон Республикасининг 
            Конституцияси ва қонунларига, унга нисбатан юқорироқ юридик кучга 
            эга бўлган бошқа норматив-ҳуқуқий ҳужжатларга, ҳамда лойиҳада 
            ҳавола қилувчи нормалар қўлланилишининг асослилиги ҳамда мақсадга мувофиқлигини текшириш.`,
            ` Тартибга солиш таъсирини баҳолаш норматив-ҳуқуқий ҳужжат 
            лойиҳасининг қабул қилиниши натижасида юзага келиши мумкин бўлган 
            эҳтимолий оқибатларни ва унинг тартибга солиш мақсадларига 
            эришилишини, шунингдек амалдаги норматив-ҳуқуқий ҳужжатнинг ушбу 
            норматив-ҳуқуқий ҳужжат билан тартибга солувчи муносабатларга 
            таъсирининг самарадорлиги ва натижадорлигини аниқлаш ва баҳолашга 
            қаратилган чора-тадбирлар мажмуидан иборатдир.`,
            ` Тартибга солиш таъсирини баҳолаш қонунчилик ҳужжати лойиҳасининг 
            қабул қилиниши натижасида юзага келиши мумкин бўлган эҳтимолий 
            оқибатларни, тадбиркорлик фаолиятига таъсирини, шунингдек амалдаги 
            норматив-ҳуқуқий ҳужжатнинг ушбу норматив-ҳуқуқий ҳужжат билан 
            тартибга солувчи муносабатларга таъсирининг самарадорлиги ва 
            натижадорлигини аниқлаш ва баҳолашга қаратилган ҳатти-харакатлар мажмуидан иборатдир.`,
        ],
        answer: 2
    },
    {
        num: 50,
        q: `50. Қандай турдаги норматив-ҳуқуқий ҳужжатлар ва уларнинг 
        лойиҳалари тартибга солиш таъсирини баҳолашдан ўтказилади?`,
        options: [
            ` Тадбиркорлик фаолиятига таъсир кўрсатувчи норматив-ҳуқуқий ҳужжатлар ва уларнинг лойиҳалари.`,
            ` Фуқароларнинг ҳуқуқлари, эркинликлари ва қонуний манфаатларига 
            ҳамда атроф муҳитга таъсир кўрсатувчи норматив-ҳуқуқий ҳужжатлар ва уларнинг лойиҳалари.`,
            ` Барча турдаги норматив-ҳуқуқий ҳужжатлар ва уларнинг лойиҳалари `,
            ` Тадбиркорлик фаолиятига, фуқароларнинг ҳуқуқлари, эркинликлари ва 
            қонуний манфаатларига ҳамда атроф муҳитга таъсир кўрсатувчи 
            норматив-ҳуқуқий ҳужжатлар ва уларнинг лойиҳалари.`,
        ],
        answer: 3
    },

];

console.log(quiz.length); // 

// === in gitBash: ==== 
// node js/question5.js