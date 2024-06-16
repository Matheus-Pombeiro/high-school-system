import Banner from "../../components/Banner";

const NotFound = () => {
    return (
        <main>
            <Banner />

            <h2 className="h2 side-h2 my-8">Sorry... we didn't find this page.</h2>
            <p className="text-lg md:text-xl text-center p-3">Please, use the navbar above to come back to an existent page. <span className="text-blue-500 text-3xl">&#9787;</span></p>
        </main>
    );
};

export default NotFound;