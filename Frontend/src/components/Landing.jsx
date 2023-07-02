import Carousel from "./Movies/Carousel";
import CardMovie from "./Movies/CardMovie";
import Searcher from "./Movies/Searcher";
import Header from "./Header";
import Footer from "./Footer";

function Landing() {
  return (
    <>
      <Header />
      <section>
        <Carousel />
      </section>

      <section className="flex flex-col justify-center items-center">
        <Searcher />
        <CardMovie />
      </section>

      <Footer />
    </>
  );
}

export default Landing;
