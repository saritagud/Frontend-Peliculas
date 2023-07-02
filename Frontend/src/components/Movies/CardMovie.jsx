import ButtonDetails from "../Movies/ButtonDetails"


function CardMovie(){
    return(
        <>
        <section className=" m-6 text-white w-[60%] ">

        <div className=" w-full">
            <img src="src\assets\posterCars.webp" className="rounded-xl"/>
            <div className=" flex justify-center items-end cursor-pointer opacity-0 transition-all duration-500 w-full hover:opacity-100 h-full bg-black/75 -mt-32">
                <ButtonDetails/>
            </div>
        </div>

            <h1 className="font-Coda mt-16 text-left w-full tracking-wide">Nombre peli</h1>
            <h2 className="font-Marcellus w-full mt-2">Fecha peli</h2>


        </section>

        
        </>
    )
}

export default CardMovie;