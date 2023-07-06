import {FaSearch} from "react-icons/fa"

function Searcher(){
    return(
        <>
        <section className="flex justify-end items-center w-full p-8">
            <input type="text" placeholder="Buscar peliculas" className="-3 rounded-xl bg-verde text-white placeholder-white mr-5 font-Marcellus text-lg w-[60%] sm:w-[40%] md:text-xl"></input>
            <FaSearch className="text-white -ml-14 text-lg "/>
        </section>

        

        </>
    )
}

export default Searcher;