import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
  
       
        <title>Adriano Teixeira João | Desenvolvedor Fullstack</title>
        <meta
          name="description"
          content="Adriano Teixeira João - Site oficial do desenvolvedor Fullstack Reconhecido como prodígio Angolano"
        />
       
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#000" />
          <script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101298296)</script>
          <script async src="//static.getclicky.com/js"></script>


        <meta
          name="keywords"
          content="Adriano Texiera João, Desenvolvedor Fullstack Angola"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src="/adriano_teixeira_joao.jpeg"
          style={{ width: 210, borderRadius: "50%", border: "5px solid #ddd" }}
        />
        <h1 className={styles.title}>Adriano Teixeira João</h1>

        <p className={styles.description}>
          Desenvolvedor Fullstack - Web, Mobile e Desktop, com mais de 7 de
          experiência na área.
        </p>

        <div className={styles.grid}>
          <a
            target="_blank"
            href="https://github.com/adriano2teixeira"
            className={styles.card}
          >
            <h3 style={{ fontSize: 20 }} className="h3">
              Visitar Github &rarr;
            </h3>
            <p>
              Explore o meu perfil do Github e descubra os meus repositórios.
            </p>
          </a>

          <a
            href="https://goncaz.ao/blog"
            target="_blank"
            className={styles.card}
          >
            <h3 style={{ fontSize: 20 }} className="h3">
              Meus Artigos &rarr;
            </h3>
            <p>Onde compartilho os meus conhecimentos.</p>
          </a>

          <a
            href="https://www.instagram.com/adriano2teixeira/"
            target="_blank"
            className={styles.card}
          >
            <h3 style={{ fontSize: 20 }}>Perfil do Instagram &rarr;</h3>
            <p>Me segue no Instagram e interaja comigo pelo instagram.</p>
          </a>

          <a
            href="https://www.linkedin.com/in/adriano-teixeira-jo%C3%A3o-72b0941a1/"
            className={styles.card}
            target="_blank"
          >
            <h3 style={{ fontSize: 20 }} className="h3">
              Linkedin &rarr;
            </h3>
            <p>Acompanhe a minha vida profissional e minhas conexões.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
