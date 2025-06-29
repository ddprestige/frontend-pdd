import React from 'react'

const Footer = () => {
  return (

        <footer className="text-gray-600 body-font">
  <div className="bg-emerald-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 Prestige Dream Decor —
        <a href="https://www.facebook.com/prestige.dreamdecor/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@PrestigeDream Decor</a>
      </p>
     <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
  <a href="https://www.facebook.com/prestige.dreamdecor/" className="text-gray-500" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    </svg>
  </a>
  <a href="https://www.instagram.com/prestige_dream_decor/" className="ml-3 text-gray-500" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    </svg>
  </a>
  {/* <a href="#" className="ml-3 text-gray-500" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
      <circle cx="4" cy="4" r="2" stroke="none"></circle>
    </svg>
  </a> */}
</span>

    </div>
  </div>
</footer>
    
  )
}

export default Footer