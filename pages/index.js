import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home = (props) => {
    return (<Layout locale={props.locale} title="#HelpDeHelpers">
            <main>
                <div className="min-h-screen flex flex-1 flex-col">
                    <Header locale={props.locale}/>
                    <section id="hero" className="flex flex-1 self-stretch">
                        <Hero locale={props.locale}/>
                    </section>
                </div>
            </main>
        </Layout>
    )
};
export default Home;
