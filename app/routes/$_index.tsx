export default function Index(){
    return(
        <div className="flex flex-col items-center justify-center text-center min-h-full">
            <img src={`https://robohash.org/${Math.floor((Math.random() * 100)+1)}?set=set2`} />
            <h1 className='text-7xl text-secondary-300'>Coming Soon!</h1>
        </div>
    )
}
