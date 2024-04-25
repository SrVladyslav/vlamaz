import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const BiographySection =()=>{
    return (
        <div
            id="background-biography" 
            className='relative w-full flex justify-center px-5 bg-[var(--background)] 
                pt-20
        '>
            <div className='relative gap-10 w-full max-w-screen-xl duration-100
                grid grid-cols-[1fr] sm:grid-cols-[200px_1fr] lg:grid-cols-[400px_1fr]
            '>
                <div className='z-[666] left-0 sm:relative h-fit sm:h-auto duration-75'>
                    <div className='relative sm:sticky sm:top-[90px] sm:left-0 text-4xl font-medium'>
                        <div className='flex flex-row gap-2 items-center'>
                            <h3>Breve historia</h3><FaArrowRight className='hidden sm:block icon pt-1'/>
                        </div>
                    </div>
                </div>
                <div className='relative flex flex-col gap-5 max-w-readable75'>
                    <p className='tracking-wider text-[var(--foreground)]'>
                        Mi nombre completo es Vladyslav Mazurkevych, naci en Ucrania y 
                        estoy graduado en la ingeniería informática por la <b><a href="https://www.upv.es/">Universidad Politécnica de Valencia</a></b> con 
                        especialidad en la <b>inteligéncia artifical</b>, más en concreto, en el 
                        Procesamiento del Lenguaje Natural (PLN) y el Análisis de Datos.
                    </p>
                    <p className='tracking-wider text-[var(--foreground)]'>
                        Durante la estáncia en la universidad, participé en varios grupos como 
                        desarrollador web donde pude aprender varias tecnologías. En los dos últimos años de la 
                        universidad junto a varios amigos, creamos un club del Google Developers Students Clubs. 
                        En este club fui responsable de impartir charlas y talleres sobre la Inteligéncia artificial, 
                        mientras que mis otros compañeros se dedicaron a seguridad y blockchain. 
                    </p>
                    <p className='tracking-wider text-[var(--foreground)]'>
                        En el último año de la universidad vino el COVID, durante el cual hice mis prácticas como Junior Data Scientist 
                        en <b><a href='https://www.datamaran.com/'>Datamaran</a></b>, donde aprendí a trabajar con librerias de Python 
                        dedicadas al PNL. También empecé como Lead 
                        del GDSC, por lo que pude experimentar de primera mano como era gestionar un equipo 
                        de varias personas, organizando eventos cada vez más grandes con invitados de C-Level de empresas 
                        como IBM, Google, Mercadona... 
                    </p>
                    <p className='tracking-wider text-[var(--foreground)]'>
                        En este momento me adentré al mundo del blockchain, donde asistí a varias charlas 
                        del sector y vi un problema de personalización de los contratos de los NFTs, del que
                        varios creadores se estaban quejando. Ahí es donde construí mi primera startup, Grifenix. 
                        La idea era crear un marketplace y constructor de contratos inteligentes totalmente personalizable.
                        En este momento entramos a la aceleradora Lanzadera.
                        Después del boom de los NFTs se pivotó a la creación de contratos inteligentes 
                        personalizados para el uso diario (Como por ejemplo, sustituir a los notarios por contratos inteligentes), lo cual fue un grandísimo error, por temas de privacidad, 
                        nadie usaría blockchains públicas, a la vez que en las privadas ya habian jugadores muy fuertes, así que 
                        decidí terminar dicha startup. 
                    </p>
                    <p className='tracking-wider text-[var(--foreground)]'>
                        Siguiendo en Lanzadera, tras buscar varias ideas de startup, vi que habían muchas personas 
                        quejándose a Too Good To Go, sobre que les gustaría tener más información de la comida que compran 
                        así como poder recogerla en otras horas donde los negocios estaban ya cerrados. Así pues, 
                        empecé Essenfy, con la intención de resolver el problema que tenía la gente. La idea principal era 
                        poner una especie de taquillas/frigoríficos por las calles al lado de los locales y incentivar 
                        a los clientes a usarlos con una gamificación y precios variables dependiendo del tiempo que le faltaba a 
                        la comida, de tal forma que los locales no perderían mucho dinero desde el principio, así como 
                        los clientes tendrían su problema resuelto. Pero no se pudo hacer dicha idea por temas legales y 
                        comprar locales especiales para dichas taquillas no sería rentable. Así pues intentamos darle más 
                        importancia a la idea de dar más información sobre la comida, pero nos topamos que por una parte 
                        Uber Eats ya tenian algo parecido y no les fue bien, por otra parte, Too Good To Go empezó su expansión 
                        a los distintos tipos de comercios dentro del sector. Aquí es donde habia que decidir si seguir o no, ya que con 
                        el capital que podríamos haber obtenido, sería casi imposible ganar a ese monopolio al que todos conocian y, 
                        además, con la idea final que teniamos la cual no se diferenciaba mucho de la competéncia. Así que terminé la startup.
                    </p>
                    <p className='tracking-wider text-[var(--foreground)]'>
                        Ahora estoy validando otras posibles ideas de startups, pero esta vez con varias lecciones a la espalda para la próxima aventura: 
                    </p>
                    <p className='tracking-wider text-[var(--foreground)] pl-6'>
                        <li className='tracking-wider text-[var(--foreground)]'>Cuando necesites equipo en una startup, elige a los mejores que puedas o sigue solo hasta que te los puedas pagar.</li>
                        <li className='tracking-wider text-[var(--foreground)]'>Dar demasiada libertad al equipo puede salir muy caro.</li>
                        <li className='tracking-wider text-[var(--foreground)]'>No hay nada gratis en este mundo.</li>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BiographySection