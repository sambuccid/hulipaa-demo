import { withBasePath } from "./basePath.mjs";

export const parseSourcePageText = (fileContent) => {
  const pageObj = JSON.parse(fileContent)
  const arrayAllSectionsText = pageObj.sections.flatMap((sec) => ([sec.title,sec.text]))
  const allText = arrayAllSectionsText.reduce((accumulatedText,currentText) =>
    accumulatedText + ' ' + currentText
  )
  return allText
}

export const parseSourcePageTitle = (fileContent) => {
  const pageObj = JSON.parse(fileContent)
  return pageObj.titlePage
}

export const parseSourcePagePath = (pageFileName) => {
  return withBasePath(`/bare-pages/${pageFileName}`)
}