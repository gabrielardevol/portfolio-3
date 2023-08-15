// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      aboutMe: {
        title: 'about me',
        1: "Hello, my name is Gabriel! I was born in a very small and isolated village in the middle of the mountains.",
        2: "During my adolescence, video games gave way to software, and I was a teenager when I started using Photoshop, After Effects, and other software that allowed me to create my little geeky projects and upload them to YouTube, keeping myself entertained in the rural environment.",
        3: "There, computers were my window to the world. And they still are, as I work in web development! I now live in Barcelona, since at the age of eighteen, I came to study a university degree in arts and design.",
        4: "During the four years of study at Massana School, I developed all kinds of projects and learned many different techniques. We didn't take exams, but rather made project submissions. As students, we developed our projects from start to finish, from the initial brainstorming to the presentation: learning to structure ourselves and make decisions about each step, all in the heart of Barcelona.",
        5: "It's a privilege to live in a city where the tech sector is so vibrant: Barcelona is the Silicon Valley of Europe! In short, my creative studies taught me to break away from the established norms and explore many ways of doing things, while in web development, I've understood the importance of following formulas that work when needed. If you're looking for an enthusiastic and expanding profile that brings a touch of originality, with a love for craftsmanship and well-done work, let's move forward!",
        toggle1: "short",
        toggle2: "long"
      },
      contact: {
        title: 'contact',
        mail: "mail",
        bcnspain: "Barcelona, Spain"
      },
      stack: {
        title: 'stack',
        frontEnd: 'Front-end',
        backEnd: 'Back-end',
        workflow: 'Workflow',
        graphicDesign: 'Graphic Design',
        currentlyLearning: 'Currently Learning',
        solidPrinciples: 'SOLID Principles'
      },
      projects: {
        title: "projectes",
        orbits: {
          title: "Orbits",
          content: "This interface represents a planetary system where each celestial body follows its orbit. It allows planets to be added or removed from the client side, altering the visual composition. It is configured in React, using SVG elements for the geometric animations of the planetary orbits."
        },
        celler: {
          title: "Celler Ardèvol",
          content: "Aquesta és la web del Celler Ardèvol, la primera pàgina web que he publicat. Està feta en Ruby on Rails, i a més de dissenyar-la i codificar-la n'he redactat els textos i seleccionat les imatges, ja que és el celler de la meva família. És una empresa familiar, petita i propera. Penso que la pàgina web reflexa l'austeritat que la caracteritza, que també és un tret d'autenticitat. Pel disseny utilitzo una graella molt versàtil que alterna text i imatges. Els tons foscos de gris aporten elegància, complementats amb blanc pel text i groc com a 'call-to-action'.  Vaig fer servir Ruby on Rails tant pel front-end com pel back-end, ja que és el primer llenguatge que vaig aprendre. Lo bo de Ruby on Rails és que t'estructura tots els directoris del projecte, i això t'estalvia picar codi. El que no em convenç és que, pel front-end, no ofereix tanta llibertat creativa com tecnologies de l'estil de React."
        },
        porfolio: {
          title: "Portfolio",
          content: ""
        },
        esclat: {
          title: "Esclat EDC",
          content: ""
        },
        pigs: {
          title: "🐺_🐷🐷🐷.rb",
          content: "Ruby on Rails was the technology with which I started programming. My learning style is very visual and results-oriented, and I enjoy engaging in creative exercises with what I learn. That's why I created this small video game inspired by the fable of the three little pigs, which runs in the CLI and is played using the spacebar on the keyboard. There are two levels: one where the pigs run away from the wolf through the forest, and another where the wolf huffs and puffs while the pigs try to keep the house from flying away. All of this is done using emojis as graphical elements to compose the different scenarios. It was fun!"
        }
      }
    }
  },
  cat: {
    translation: {
      aboutMe: {
        title: 'qui sóc',
        1: 'Hola, em dic Gabriel! Vaig neixer en un poble molt petit i aillat al mig de les muntanyes.',
        2: "Durant l'adolescència els videojocs van deixar pas al software, i era un púber quan vaig començar amb Photoshop, After Effects i d'altres softwares que em permetien produïr els meus petits projectes d'adolescent friki i pujar-los a youtube, i així m'entretenia en l'entorn rural.",
        3: "Allà, els ordinadors eren la meva finestra al món. I encara ho són, perquè em dedico al desenvolupament web! Ara visc a Barcelona, ja que als divuit anys vaig venir a estudiar un grau universitari en arts i disseny.",
        4: "Durant els quatre anys d'estudi a l'escola Massana vaig desenvolupar tota mena de projectes i també aprendre moltes tècniques diferents. No feiem exàmens sinó que feiem entregues. Com a estudiants desenvolupavem els nostres projectes de forma íntegra, des de la pluja d'idees inicial fins a la presentació: apreníem a estructurar-nos i prendre decisions respecte a cada pas, tot plegat al centre de Barcelona.",
        5: "És un privilegi viure en una ciutat on el sector tecnològic és tant efervescent: Barcelona és el Silicon Valley d'Europa! En definitiva, els meus estudis creatius em van ensenyar a trencar amb lo establert i explorar moltes maneres de fer les coses, mentre que en el desenvolupament web he entès la importància de seguir les fórmules que funcionen quan cal. Si busques un perfil entusiasta i en expansió, que aporti un toc d'originalitat i amb amor per l'artesania i la feina ben feta, endavant!",
        toggle1: "curt",
        toggle2: "llarg"
      },
      contact: {
        title: 'contacte',
        mail: "mail",
        bcnspain: "Barcelona"
      },
      stack: {
        title: "stack",
        frontEnd: "Front-end",
        backEnd: "Back-end",
        workflow: "Fluxe de treball",
        graphicDesign: "Disseny gràfic",
        currentlyLearning: "Aprenent...",
        solidPrinciples: "Principis SOLID"
      },
      projects: {
        title: "projectes",
        orbits: {
          title: "Òrbites",
          content: "Aquesta interfaç representa un sistema planetari, en que cada astre segueix la seva òrbita. Permet que des del costat del client s'afegeixin o es restin planetes, de manera que la composició visual canvia. Està configurat en React, utilitzant elements SVG per a les animacions geomètriques de les òrbites planetàries."
        },
        celler: {
          title: "Celler Ardèvol",
          content: "This is the website of Celler Ardèvol, the first website I have published. It is built using Ruby on Rails, and in addition to designing and coding it, I have written the texts and selected the images, as it is my family's winery. It's a small, close-knit, family-owned business. I believe the website reflects the austerity that characterizes it, which is also a mark of authenticity. For the design, I use a highly versatile grid that alternates between text and images. The dark shades of gray provide elegance, complemented with white for text and yellow for 'call-to-action' elements. I used Ruby on Rails for both the front-end and back-end, as it's the first language I learned. The good thing about Ruby on Rails is that it structures all the project directories, which saves you from writing a lot of code. What doesn't convince me is that, for the front-end, it doesn't offer as much creative freedom as technologies like React."
        },
        porfolio: {
          title: "Porfoli",
          content: ""
        },
        esclat: {
          title: "Esclat EDC",
          content: ""
        },
        pigs: {
          title: "🐺_🐷🐷🐷.rb",
          content: "Ruby on Rails va ser la tecnologia amb la qual vaig començar a programar. El meu estil d'aprenentatge és molt visual i orientat a resultats, i m'agrada emprendre exercicis creatius amb allò que aprenc. Així és que vaig fer aquest petit videojoc inspirat en la fabula dels tres porquets, que s'executa en la CLI i es juga amb la barra espaiadora del teclat. Són dos nivells, un en què els porquets fugen corrents del llop a través del bosc, i un altre en què el llop bufa i bufa mentre els porquets intenten que la casa no surti volant. Tot això utilitzant emojis com a element gràfic amb el qual composar els diferents escenaris. Va ser divertit!"
        }
      }
    },
  },
  esp: {
    translation: {
      aboutMe: {
        title: 'acerca de mí',
        1: '¡Hola, mi nombre es Gabriel! Nací en un pueblo muy pequeño y aislado en medio de las montañas.',
        2: "Durante mi adolescencia, los videojuegos dieron paso al software, y era un adolescente cuando comencé a usar Photoshop, After Effects y otros programas que me permitieron crear mis pequeños proyectos frikis y subirlos a YouTube, manteniéndome entretenido en el entorno rural.",
        3: "Allí, las computadoras eran mi ventana al mundo. Y todavía lo son, ¡ya que trabajo en desarrollo web! Ahora vivo en Barcelona, ya que a los dieciocho años vine a estudiar una licenciatura en artes y diseño.",
        4: "Durante los cuatro años de estudio en la Escuela Massana, desarrollé todo tipo de proyectos y aprendí muchas técnicas diferentes. No tomábamos exámenes, sino que hacíamos entregas. Como estudiantes, desarrollábamos nuestros proyectos desde el inicio hasta el final, desde la lluvia de ideas inicial hasta la presentación: aprendiendo a estructurarnos y tomar decisiones en cada paso, todo en el corazón de Barcelona.",
        5: "Es un privilegio vivir en una ciudad donde el sector tecnológico es tan vibrante: ¡Barcelona es el Silicon Valley de Europa! En resumen, mis estudios creativos me enseñaron a romper con las normas establecidas y explorar muchas formas de hacer las cosas, mientras que en el desarrollo web, entendí la importancia de seguir fórmulas que funcionan cuando es necesario. Si estás buscando un perfil entusiasta y en crecimiento, que aporte un toque de originalidad y con amor por la artesanía y el trabajo bien hecho, ¡adelante!",
        toggle1: "corto",
        toggle2: "largo",
      },
      contact: {
        title: 'contacto',
        mail: "mail",
        bcnspain: "Barcelona, España"
      },
      stack: {
        title: "stack",
        frontEnd: "Front-end",
        backEnd: "Back-end",
        workflow: "Flujo de trabajo",
        graphicDesign: "Diseño gráfico",
        currentlyLearning: "Aprendiendo",
        solidPrinciples: "Principios SOLID"

      },
      projects: {
        title: "projectes",
        orbits: {
          title: "Órbitas",
          content: "Esta interfaz representa un sistema planetario en el que cada astro sigue su órbita. Permite que desde el lado del cliente se añadan o se resten planetas, de manera que la composición visual cambia. Está configurado en React, utilizando elementos SVG para las animaciones geométricas de las órbitas planetarias."
        },
        celler: {
          title: "Celler Ardèvol",
          content: "Esta es la página web de Celler Ardèvol, la primera página web que he publicado. Está hecha en Ruby on Rails, y además de diseñarla y codificarla, he redactado los textos y seleccionado las imágenes, ya que es la bodega de mi familia. Es una empresa familiar, pequeña y cercana. Creo que la página web refleja la austeridad que la caracteriza, que también es una característica de autenticidad. Para el diseño, utilizo una cuadrícula muy versátil que alterna texto e imágenes. Los tonos oscuros de gris aportan elegancia, complementados con blanco para el texto y amarillo para 'llamadas a la acción'. Utilicé Ruby on Rails tanto para el front-end como para el back-end, ya que es el primer lenguaje que aprendí. Lo bueno de Ruby on Rails es que estructura todos los directorios del proyecto, lo que te ahorra escribir mucho código. Lo que no me convence es que, para el front-end, no ofrece tanta libertad creativa como tecnologías como React."
        },
        porfolio: {
          title: "Porfolio",
          content: ""
        },
        esclat: {
          title: "Esclat EDC",
          content: ""
        },
        pigs: {
          title: "🐺_🐷🐷🐷.rb",
          content: "Ruby on Rails fue la tecnología con la que empecé a programar. Mi estilo de aprendizaje es muy visual y orientado a resultados, y me gusta realizar ejercicios creativos con lo que aprendo. Por eso creé este pequeño videojuego inspirado en la fábula de los tres cerditos, que se ejecuta en la interfaz de línea de comandos y se juega utilizando la barra espaciadora del teclado. Hay dos niveles: uno en el que los cerditos huyen del lobo a través del bosque, y otro en el que el lobo sopla mientras los cerditos intentan que la casa no salga volando. Todo esto se realiza utilizando emojis como elementos gráficos para componer los diferentes escenarios. ¡Fue divertido!"
        }
      }
    },
  },
  ja: {
    translation: {
      aboutMe: {
        title: '私について',
        1: 'こんにちは、私の名前はガブリエルです！私は山々の中にある非常に小さな孤立した村で生まれました。',
        2: "青年期には、ゲームからソフトウェアへと移り、私はPhotoshop、After Effectsなどを使い始めたのは十代の頃で、これによって小さなギークプロジェクトを作成し、それをYouTubeにアップロードして田舎の環境で楽しんでいました。",
        3: "そこでコンピュータは私の世界への窓でした。そして今でも、ウェブ開発に従事しているため、ウィンドウであり続けます！今はバルセロナに住んでいます。私は18歳の時に芸術とデザインの大学学位を取るためにここに来ました。",
        4: "マサーナ学校での4年間の学習の間に、さまざまなプロジェクトを開発し、多くの異なる技術を学びました。私たちは試験を受けるのではなく、プロジェクトを提出しました。学生として、最初のアイデアからプレゼンテーションまでのプロジェクトを一貫して開発し、各ステップについての決定をすることを学びました。すべてがバルセロナの中心で行われました。",
        5: "テクノロジーセクターが非常に活気に満ちている街で暮らすことは特権です：バルセロナはヨーロッパのシリコンバレーです！要するに、私の創造的な学習は、確立された規範から脱却し、さまざまな方法で物事を探求することを教えてくれました。一方、ウェブ開発では、必要な場合には効果的な手法を追求する重要性を理解しました。情熱的で成長を続けるプロフィールをお探しであれば、オリジナリティを持ち、職人技術と高品質な仕事への愛をもたらす私にぜひお任せください！",
        toggle1: "短い",
        toggle2: "長い"
      },
      contact: {
        title: "コンタクト",
        mail: "メール",
        bcnspain: "バルセロナ、スペイン"
      },
      stack: {
        title: "スタック",
        frontEnd: "フロントエンド",
        backEnd: "バックエンド",
        workflow: "ワークフロー",
        graphicDesign: "グラフィック デザイン",
        currentlyLearning: "現在学習中",
        solidPrinciples: "SOLID 原則"
      },
      projects: {
        title: "projectes",
        orbits: {
          title: "軌道",
          content: "このインターフェースは、各天体が軌道を追う惑星系を表しています。クライアント側から惑星を追加または削除することができ、視覚的な構成が変わります。Reactで構成され、惑星の軌道の幾何学的なアニメーションにSVG要素が使用されています。"
        },
        celler: {
          title: "Celler Ardèvol",
          content: "これはセジェル・アルデボルのウェブサイトです。これは私が公開した最初のウェブサイトです。Ruby on Railsを使用して作成されており、デザインやコーディングだけでなく、テキストの執筆や画像の選択も行いました。なぜならこれは私の家族のワイナリーだからです。これは小さな家族経営のビジネスで、近くの存在です。私は、このウェブサイトが特徴である質素さと、同時に真正性の特徴を反映していると考えています。デザインには、テキストと画像を交互に配置する非常に柔軟なグリッドを使用しています。濃い灰色のトーンはエレガンスを提供し、テキストには白色、'call-to-action' 要素には黄色が補完されています。フロントエンドとバックエンドの両方にRuby on Railsを使用しましたが、これは私が最初に学んだ言語です。Ruby on Railsの良いところは、プロジェクトのすべてのディレクトリを構造化してくれるため、多くのコードを書く手間が省けることです。私にとって納得できないのは、フロントエンドの部分ではReactなどの技術ほどのクリエイティブな自由度を提供していないということです。"        },
        porfolio: {
          title: "ポートフォリオ",
          content: ""
        },
        esclat: {
          title: "Esclat EDC",
          content: ""
        },
        pigs: {
          title: "🐺_🐷🐷🐷.rb",
          content: "Ruby on Railsは私がプログラミングを始めた技術です。私の学習スタイルは非常にビジュアル重視で結果志向であり、学んだことを活用してクリエイティブな演習を楽しむことが好きです。だからこそ、三匹の子ぶたの寓話から着想を得たこの小さなビデオゲームを作成しました。これはCLIで実行され、キーボードのスペースバーを使ってプレイされます。2つのレベルがあり、1つは子ぶたたちが森を通ってオオカミから逃げるレベルで、もう1つはオオカミがふきふきする一方、子ぶたたちは家が飛ばされないようにするレベルです。これらのすべては、異なるシナリオを構築するためのグラフィカル要素として絵文字を使用して行われます。楽しかったですね！"
        }
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'cat', // Default language
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
});
export default i18n;
