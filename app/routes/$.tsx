import { useEffect, useState } from "react";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

export default function ErrorBoundary() {
  const [loading, setLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState<string>('');
  const [randomNumber] = useState<number>(Math.floor((Math.random() * 100) + 1));

  useEffect(() => {
    const id = setTimeout(() => {
      if (randomNumber) {
        setImgUrl(`https://robohash.org/${randomNumber}?set=set4`);
        setLoading(false);
      }
    }, 200);
    return () => clearTimeout(id);
  }, [randomNumber])

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-between text-center md:h-80 md:w-80">
          <div>
            {
              !loading ?
                <img className="h-40 w-40" src={imgUrl} alt='catLoader' />
                :
                <div role="status" className="animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                  <div className="flex items-center justify-center md:w-40 rounded-xl h-100">
                    <svg className="h-40 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                  <span className="sr-only">Fetching a cat picture...</span>
                </div>
            }
          </div>
          <h1 className='text-7xl text-secondary-300 align-bottom'>Coming Soon!</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}
