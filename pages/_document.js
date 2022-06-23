
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=PT+Mono&display=swap" rel="stylesheet"/>


                    {/* <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=PT+Mono&display=swap" rel="stylesheet"/> */}


                    {/* <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=block" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Lora&family=Montserrat:wght@500;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
