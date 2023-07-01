function Register(){
    return(
        <>
            <section className="flex flex-col justify-center items-center gap-10 min-h-screen">
                <h1 className="font-Coda text-3xl text-white mt-10">Registro</h1>

                <form className="flex flex-col justify-center items-center p-5 text-white font-Marcellus gap-3">
                    <label className="w-full text-xl">Nombre</label>
                    <input className="w-full  rounded-xl p-2 text-black text-lg" type="text"></input>

                    <label className="w-full text-xl">Usuario</label>
                    <input className="w-full  rounded-xl p-2 text-black text-lg" type="text"></input>

                    <label className="w-full text-xl">Contraseña</label>
                    <input className="w-full  rounded-xl p-2 text-black text-lg" type="password"></input>

                    <button className="bg-verde p-3 text-xl rounded-xl m-8" >Registrarse</button>
                </form>
            </section>
        </>
    )
}

export default Register;