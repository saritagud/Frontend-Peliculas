/* import Header from "./Header" */
import Carousel from "./Movies/Carousel";
import CardMovie from "./Movies/CardMovie";
import Searcher from "./Movies/Searcher";
function Landing() {
  return (
    <>
      <section>
        <Carousel />
      </section>

      <section className="flex flex-col justify-center items-center">
        <Searcher />
        <CardMovie />
      </section>
    </>
  );
}

export default Landing;
