function Show() {
  return (
    <div className='flex flex-col space-y-10 py-5 px-20'>
      <div className="downloadseation">
        <div className="name">Explicitation of Actors and Receivers:</div>
        <div className="pdfs">
          <a
            href="/api/static/pdf/ExplicitationofActorsandReceivers/Object.pdf"
            download='Object.pdf'
          >
            <PDFSvg />
            Object
          </a>
          <a
            href="/api/static/pdf/ExplicitationofActorsandReceivers/Subject.pdf"
            download='Subject.pdf'
          >
            <PDFSvg />
            Subject
          </a>
        </div>
      </div>
      <div className="downloadseation">
        <div className="name">Explicitation of Conceptual Meaning:</div>
        <div className="pdfs">
          <a
            href="/api/static/pdf/ExplicitationofConceptualMeaning/InformationSupplementation.pdf"
            download='InformationSupplementation.pdf'
          >
            <PDFSvg />
            InformationSupplementation
          </a>
          <a
            href="/api/static/pdf/ExplicitationofConceptualMeaning/Polysemy.pdf"
            download='Polysemy.pdf'
          >
            <PDFSvg />
            Polysemy
          </a>
        </div>
      </div>
      <div className="downloadseation">
        <div className="name">Explicitation of Cultural Information:</div>
        <div className="pdfs">
          <a
            href="/api/static/pdf/ExplicitationofCulturalInformation/ForensicExpression.pdf"
            download='ForensicExpression.pdf'
          >
            <PDFSvg />
            ForensicExpression
          </a>
          <a
            href="/api/static/pdf/ExplicitationofCulturalInformation/PoliticalCulturewithChineseCharacteristics.pdf"
            download='PoliticalCulturewithChineseCharacteristics.pdf'
          >
            <PDFSvg />
            PoliticalCulturewithChineseCharacteristics
          </a>
          <a
            href="/api/static/pdf/ExplicitationofCulturalInformation/TraditionalCulture.pdf"
            download='TraditionalCulture.pdf'
          >
            <PDFSvg />
            TraditionalCulture
          </a>
        </div>
      </div>
    </div>
  )
}

export default Show;


function PDFSvg() {
  return (
    <svg 
      t="1647136669101" 
      class="icon" 
      viewBox="0 0 1024 1024" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      p-id="2266" 
      width="200" 
      height="200"
      >
        <path 
          d="M145.6 0C100.8 0 64 36.8 64 81.6v860.8C64 987.2 100.8 1024 145.6 1024h732.8c44.8 0 81.6-36.8 81.6-81.6V324.8L657.6 0h-512z" 
          fill="#8C181A" 
          p-id="2267"
          >
        </path>
        <path 
          d="M960 326.4v16H755.2s-100.8-20.8-97.6-107.2c0 0 3.2 91.2 96 91.2H960z" 
          fill="#6B0D12" 
          p-id="2268">
        </path>
        <path 
          d="M657.6 0v233.6c0 27.2 17.6 92.8 97.6 92.8H960L657.6 0z" 
          fill="#FFFFFF" 
          opacity=".5" 
          p-id="2269">
        </path>
        <path 
          d="M302.4 784h-52.8v65.6c0 6.4-4.8 11.2-12.8 
            11.2-6.4 0-11.2-4.8-11.2-11.2V686.4c0-9.6 8-17.6 
            17.6-17.6h59.2c38.4 0 60.8 27.2 60.8 57.6 0 
            32-22.4 57.6-60.8 57.6z m-1.6-94.4h-51.2v73.6h51.2c22.4 
            0 38.4-14.4 38.4-36.8s-16-36.8-38.4-36.8z m166.4 
            171.2h-48c-9.6 0-17.6-8-17.6-17.6v-156.8c0-9.6 
            8-17.6 17.6-17.6h48c59.2 0 99.2 41.6 99.2 
            96s-38.4 96-99.2 96z m0-171.2h-41.6v148.8h41.6c46.4 
            0 73.6-33.6 73.6-75.2 1.6-40-25.6-73.6-73.6-73.6z 
            m260.8 0h-92.8V752h91.2c6.4 0 9.6 4.8 9.6 11.2s-4.8 
            9.6-9.6 9.6h-91.2v76.8c0 6.4-4.8 11.2-12.8 11.2-6.4 
            0-11.2-4.8-11.2-11.2V686.4c0-9.6 8-17.6 
            17.6-17.6h99.2c6.4 0 9.6 4.8 9.6 11.2 1.6 
            4.8-3.2 9.6-9.6 9.6z" 
          fill="#FFFFFF" 
          p-id="2270">
        </path>
      </svg>
  )
}