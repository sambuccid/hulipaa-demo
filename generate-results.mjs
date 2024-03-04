import fs from 'fs'
import path from 'path'
import Hulipaa from 'hulipaa'
import { withBasePath } from './site/js/basePath.mjs'
import { parseSourcePageText,parseSourcePageTitle,parseSourcePagePath } from './site/js/parseFilesHelpers.mjs'

const parseData = (fileContent,filePath) => {
    const pageFileName = path.basename(filePath)
    return {
        text: parseSourcePageText(fileContent),
        title: parseSourcePageTitle(fileContent),
        path: parseSourcePagePath(pageFileName)
    }
}

const generateLink = (fileName,inputFolder) => {
    const pageFullPath = path.join(inputFolder,fileName)
    const pageContent = fs.readFileSync(pageFullPath,'utf8')
    const pageObj = JSON.parse(pageContent)
    const pageTitle = pageObj.titlePage.toLowerCase()
    return withBasePath(`/page/${pageTitle}.html`)
}

Hulipaa({
    inputFolder: 'site/_data/pages',
    outputFolder: 'site/search-results',
    parseData,
    generateLink
})