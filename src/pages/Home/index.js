import { useTranslation } from "react-i18next";

import Banner from "../../components/Banner";

const Home = () => {
    const { t } = useTranslation()

    return (
        <>
            <Banner />

            <section className="container-text">
                <article className="space-y-4">
                    <h2 className="h2">Who am I?</h2>
                    <p className="p">
                        High School System is a basic system made in React.js and aimed at teachers who want to register students and give grades to them. Here you can see the students that were added by yourself and their own pages that contain their data.
                    </p>
                </article>

                <article className="space-y-4">
                    <h2 className="h2">What is React.js?</h2>
                    <p className="p">
                        React is a JavaScript framework made by Meta that is used to create user interfaces (UI) in web apps. It is popular because it's easy to use,  highly flexible and scalable, and it's used by many tech companies, like Meta and Airbnb.
                    </p>
                </article>

                <article className="space-y-4">
                    <h2 className="h2">What is React Router Dom?</h2>
                    <p className="p">
                        In this project, a React tool called React Router Dom is being used, which allows you to create routes in web applications, without leaving the page. Technically, React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.
                    </p>
                </article>

                <article className="space-y-4">
                    <h2 className="h2">High School System's Author</h2>
                    <p className="p">
                        High School System was developed by <a href="https://www.linkedin.com/in/matheus-pombeiro/" target="_blank" rel="noopener noreferrer" className="link">Matheus Pombeiro</a>. Please, check it out his LinkedIn profile and other <a href="https://matheus-pombeiro.github.io/my-authorial-projects/" target="_blank" rel="noopener noreferrer" className="link">authorial projects</a>. This project was made aiming to study and fix some Software Engineering concepts, such as the creation and management of an App documentation (User story, functional and non-functional requirements, etc.), programming logic and algorithims, React programming, simple data structure wth JavaScript and more.
                    </p>
                </article>
            </section>
        </>
    );
};

export default Home;