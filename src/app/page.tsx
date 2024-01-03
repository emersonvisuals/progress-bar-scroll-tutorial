import Styles from "./page.module.css";
import Navigation from "./Components/Navigation/Navigation";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";

export default function Home() {
    return (
        <div>
            <main className={Styles.main}>
                <Navigation />
            </main>
            <section className={Styles.section}>
                <h1 className={Styles.h1}>published novels</h1>
                <Section
                    title="Once in a blue moon"
                    tagTitle="Drama"
                    tagTitleTwo="Thriller"
                />
                <Section
                    title="Over the falls"
                    tagTitle="Romance"
                    tagTitleTwo="Drama"
                />
            </section>
            <section className={Styles.section}>
                <h1 className={Styles.h1}>upcoming novels</h1>
                <Section
                    title="Above and beyond the valley"
                    tagTitle="Tragedy"
                    tagTitleTwo="Thriller"
                />
                <Section
                    title="Into the night"
                    tagTitle="Drama"
                    tagTitleTwo="Romance"
                />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
