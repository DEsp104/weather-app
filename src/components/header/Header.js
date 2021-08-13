import React from 'react'

function Header() {
  return (
    <header>
        <nav className=" bg-dark-blue-500 w-full flex relative justify-between items-center mx-auto px-8 h-20">
            <div className="inline-flex">
                <h1 className="text-soapstone-500 text-xl font-extrabold">
                  Weather App!
                </h1>
            </div>
        </nav>
    </header>
  )
}


export default Header
