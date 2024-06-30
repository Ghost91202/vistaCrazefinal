export default function why( { service } ) {
    return (
        <div className=" flex flex-col w-screen h-auto gap-20 justify-center lg:p-20">
            <div className=" flex justify-center">
                <h1 className="lg:text-5xl font-semibold text-2xl">
                    why you choose <span className="text-blue-700">Pi-Bond</span> for {service}</h1>
            </div>
            <div className="grid grid-flow-row grid-cols-4 ">
                <div className=" flex flex-col justify-center text-center gap-4 sm:text-lg">

                    <h1>We&apos;re proudly
                        independent.</h1>
                    <p>We&apos;re not part of a media conglomerate. We&apos;re focused & earn your business everyday.</p>
                </div>
            </div>
        </div>
    )
}
