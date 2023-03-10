import {
    Meta,
    Links
} from '@remix-run/react'
import styles from './styles/index.css'

export function meta() {
    return (
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width,initial-scale=1'
        }
    )
}

export function links() {
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,700&family=Montserrat:wght@800&family=Outfit:wght@400;700;900&family=Rubik+Mono+One&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App() {
    return (
        <Document>
            <h1>Hola Mundo</h1>
        </Document>
    )
}

function Document({children}) {
    return (
        <html lang="es">
            <head>
                <Meta></Meta>
                <Links></Links>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}