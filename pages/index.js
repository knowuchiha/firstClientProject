import Head from "next/head";

// Components
import Home from "../components/HomeComponent";

export default function Index() {
    return (
        <>
            <Head>
                <title>KSS Engineering</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Home />
        </>
    );
}
