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
                    cta="Purchase Today"
                    icon={true}
                />
                <Section
                    title="Over the falls"
                    tagTitle="Romance"
                    tagTitleTwo="Drama"
                    cta="Purchase Today"
                    icon={true}
                />
            </section>
            <section className={Styles.section}>
                <h1 className={Styles.h1}>upcoming novels</h1>
                <Section
                    title="Above and beyond the valley"
                    tagTitle="Tragedy"
                    tagTitleTwo="Thriller"
                    cta="Available in June"
                    icon={false}
                />
                <Section
                    title="Into the night"
                    tagTitle="Drama"
                    tagTitleTwo="Romance"
                    cta="Available in July"
                    icon={false}
                />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
