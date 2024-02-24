import fs from 'fs'
import path from 'path'
import Hulipaa from 'hulipaa'

const parseData = (fileContent,filePath) => {
    const pageObj = JSON.parse(fileContent)
    const arrayAllSectionsText = pageObj.sections.flatMap((sec) => ([sec.title,sec.text]))
    const allText = arrayAllSectionsText.reduce((accumulatedText,currentText) =>
        accumulatedText + ' ' + currentText
    )
    return {
        text: allText,
        title: pageObj.titlePage,
        path: `/page/${pageObj.titlePage}`
    }
}

const generateLink = (fileName,inputFolder) => {
    const pageFullPath = path.join(inputFolder,fileName)
    const pageContent = fs.readFileSync(pageFullPath,'utf8')
    return `/page/${pageContent.titlePage}.html`
}

Hulipaa({
    inputFolder: 'site/_data/pages',
    outputFolder: 'site/search-results',
    parseData,
    generateLink
})