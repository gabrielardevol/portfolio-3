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
          content: "Aquesta és la web del Celler Ardèvol, la primera pàgina web que he publicat. Està feta en Ruby on Rails, i a més de dissenyar-la i codificar-la n'he redactat els textos i seleccionat les imatges, ja que és el celler de la meva família. És una empresa familiar, petita i propera. Penso que la pàgina web reflexa l'austeritat que la caracteritza, que també és un tret d'autenticitat. Pel disseny utilitzo una graella molt versàtil que alterna text i imatges. Els tons foscos de gris aporten elegància, complementats amb blanc pel text i groc com a 'call-to-action'.  Vaig fer servir Ruby on Rails tant pel front-end com pel back-end, ja que és el primer llenguatge que vaig aprendre. Lo bo de Ruby on Rails és que t'estructura tots els directoris del projecte, i això t'estalvia picar codi. El que no em convenç és que, pel front-end, no ofereix tanta llibertat creativa com tecnologies de l'estil de React."
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
          content: ""
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
