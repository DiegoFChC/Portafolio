import ReactIcon from '../../icons/ReactIcon.astro'
import NextIcon from '../../icons/NextIcon.astro'
import CssIcon from '../../icons/CssIcon.astro'
import DjangoIcon from '../../icons/DjangoIcon.astro'
import ModalSicodi from './ModalSicodi.astro'
import ModalEventWallet from './ModalEventWallet.astro'

const TAGS = {
  REACT: {
    name: 'React',
    style: { background: '#003159', color: 'white' },
    icon: ReactIcon
  },
  NEXT: {
    name: 'Next.js',
    style: { background: 'black', color: 'white' },
    icon: NextIcon
  },
  CSS: {
    name: 'CSS',
    style: { background: '#2163AF', color: 'white' },
    icon: CssIcon
  },
  DJANGO: {
    name: 'Django',
    style: { background: '#082E21', color: 'white' },
    icon: DjangoIcon
  }
}

export const PROJECTS = [
  {
    id: 'sicodi',
    title: 'SICODI - SI para gestión de procesos en un juzgado',
    description: 'Sistema de información web para la gestión de procesos disciplinarios. Aplicación realizada para una oficina de control disciplinario interno o juzgado.',
    link: null,
    github: '',
    image: '/projects/sicodi/sicodi.webp',
    tags: [TAGS.REACT, TAGS.CSS, TAGS.DJANGO],
    collaborators: '',
    modalContent: ModalSicodi,
    images: [
      {
        img: '/projects/sicodi/1.png',
        description: 'LOGIN'
      },
      {
        img: '/projects/sicodi/2.png',
        description: 'LISTADOS'
      },
      {
        img: '/projects/sicodi/3.png',
        description: 'FILTROS'
      },
      {
        img: '/projects/sicodi/4.png',
        description: 'REPORTES'
      },
      {
        img: '/projects/sicodi/5.png',
        description: 'VISTAS DETALLADAS'
      },
      {
        img: '/projects/sicodi/6.png',
        description: 'FORMULARIOS'
      },
      {
        img: '/projects/sicodi/7.png',
        description: 'TRACKING'
      },
      {
        img: '/projects/sicodi/8.png',
        description: 'GESTIÓN DE DATOS PERSONALES'
      }
    ]
  },
  {
    id: 'event-wallet',
    title: 'Event Wallet - Sistema para gestión de gastos personales',
    description: 'Aplicación web para gestión de gastos personales, permite la creación de eventos y la distribución de gastos en la misma. Lleva un control de pagos y deudas.',
    link: null,
    github: 'https://github.com/alejandro19-19/EventWallet-Frontend',
    image: '/projects/event-wallet/event-wallet.webp',
    tags: [TAGS.NEXT, TAGS.CSS],
    collaborators: 'Camilo Santa',
    modalContent: ModalEventWallet,
    images: [
      {
        img: '/projects/event-wallet/1.png',
        description: 'LOGIN'
      },
      {
        img: '/projects/event-wallet/2.png',
        description: 'REGISTRO'
      },
      {
        img: '/projects/event-wallet/3.png',
        description: 'DASHBOARD'
      },
      {
        img: '/projects/event-wallet/4.png',
        description: 'PERFIL'
      },
      {
        img: '/projects/event-wallet/5.png',
        description: 'NOTIFICACIONES'
      },
      {
        img: '/projects/event-wallet/6.png',
        description: 'EVENTOS'
      },
      {
        img: '/projects/event-wallet/7.png',
        description: 'CREACIÓN'
      },
      {
        img: '/projects/event-wallet/8.png',
        description: 'INFO Y ACTIVIDADES'
      },
      {
        img: '/projects/event-wallet/9.png',
        description: 'ASIGNACION DE RESPONSABILIDADES'
      },
      {
        img: '/projects/event-wallet/10.png',
        description: 'CONTACTOS'
      },
      {
        img: '/projects/event-wallet/11.png',
        description: 'DEUDAS'
      },
    ]
  },
  {
    id: 'dev-library',
    title: 'Dev Library',
    description: 'Web con estilo de documentación donde podrás encontrar mis apuntes personales y en un futuro, mis componentes de HTML, CSS y JavaScript.',
    link: 'https://dev-library-diferdev.vercel.app/',
    github: 'https://github.com/DiegoFChC/dev-library',
    image: '/projects/dev-library/dev-library.webp',
    tags: [TAGS.REACT, TAGS.NEXT, TAGS.CSS],
    collaborators: '',
    modalContent: null,
    images: []
  }
]