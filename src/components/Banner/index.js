const Banner = () => {
    return (
        <div 
            className="h-60 md:h-72 bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: "url(/assets/main-bg.jpg)" }}
        >
            <h1 className="text-white h1">High School System</h1>
        </div>
    );
};

export default Banner;