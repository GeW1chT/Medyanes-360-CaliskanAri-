import './globals.css'

export const metadata = {
    title: 'Todo App',
    description: 'Simple todo application',
}

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className="bg-gray-100">{children}</body>
        </html>
    )
}