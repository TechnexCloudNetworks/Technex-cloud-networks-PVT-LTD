export function Notfound(){
    return(
        <>
       <div className="h-[500px] flex flex-col justify-center items-center">
           <div className=" font-bold  flex justify-center items-center">
            <h1 className="text-3xl">Page Not Found</h1>     
        </div>
        <div>
                <p className="text-lg">The page you are looking for does not exist.</p>
        </div>
        </div>
        </>
    )
}