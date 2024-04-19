import style from './HeroSectionBanner.module.css'
 
export default function HeroSectionBanner({image}) {
    return (
        <section className={style.container}>
            <img src={image} alt="Imagem Banner Hero" />
        </section>
    )
}