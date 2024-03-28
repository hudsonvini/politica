import { fontPrincipal, fontSecundaria } from '@/app/fonts'
import style from './BannerTriploComVideo.module.css'

export default function BannerTriploComVideo() {
    return (
        <section className={style.containter}>
            {/* Banner Principal */}
            <article className={style.principalBanner}>
                <img src="https://cironogueira.com.br/wp-content/uploads/2023/11/53266339200_2770a5de70_k.jpg" alt="" />

                <h2><b>“</b>Decidi entrar na politica depois de ver tanta desigualdade onde eu vivia.<b>”</b></h2>
            </article>

            {/* Banner Download */}
            <article className={style.bannerDownload}>
                <h2>Baixe nosso material de campanha!</h2>
                <p className={fontSecundaria.className}>Baixe agora e ajude a divulgar o movimento por um Brasil maior e melhor</p>
                <button className={fontPrincipal.className}>
                    Baixar Material
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                    </svg>
                </button>
            </article>

            {/*  */}
            <article className={style.bannerVideo}>
                <img src="https://cironogueira.com.br/wp-content/uploads/2023/10/ciro-nogueira-senador-piaui.jpg" alt="" />

                <button className={`${style.watchButton} ${fontPrincipal.className}`}>
                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="39" cy="39" r="39" fill="white"/>
                        <path d="M53 39L32 51.1244L32 26.8756L53 39Z" fill="#0071B7"/>
                    </svg>
                    Assistir Video
                </button>
            </article>
        </section>
    )
}