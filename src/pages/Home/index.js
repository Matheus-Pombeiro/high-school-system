import { useTranslation } from "react-i18next";

import Banner from "../../components/Banner";

const Home = () => {
    const { t } = useTranslation();     // Translation reference

    return (
        <>
            <Banner />

            <section className="container-text">
                <article className="space-y-4">
                    <h2 className="h2">{t("firstH2Home")}</h2>
                    <p className="p">{t("firstPHome")}</p>
                </article>

                <article className="space-y-4">
                    <h2 className="h2">{t("secondH2Home")}</h2>
                    <p className="p">{t("secondPHome")}</p>
                </article>

                <article className="space-y-4">
                    <h2 className="h2">{t("thirdH2Home")}</h2>
                    <p className="p">{t("thirdPHome")}</p>
                </article>

                <article className="space-y-4">
                    <h2 className="h2">{t("fourthH2Home")}</h2>
                    <p className="p">
                        {t("fourthPHomePartI")} <a href="https://www.linkedin.com/in/matheus-pombeiro/" target="_blank" rel="noopener noreferrer" className="link">Matheus Pombeiro</a>.  {t("fourthPHomePartII")} <a href="https://matheus-pombeiro.github.io/my-authorial-projects/" target="_blank" rel="noopener noreferrer" className="link">{t("fourthPHomePartIII")}</a>. {t("fourthPHomePartIV")}
                    </p>
                </article>
            </section>
        </>
    );
};

export default Home;