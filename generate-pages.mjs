import fs from 'fs'
import path from 'path'
import { generate } from "random-words"

const WORDS_PER_SENTENCE = 8
const SENTENCES_PER_SECTION = 3
const SECTIONS_PER_PAGE = 3
const NUMBER_OF_PAGES = 3000
const siteFolder = 'site'
const pageDataFolder = path.join(siteFolder,'_data/pages')

//make directory
if (fs.existsSync(pageDataFolder)) {
  fs.rmSync(pageDataFolder,{ recursive: true });
}
fs.mkdirSync(pageDataFolder);

for (let i = 0; i < NUMBER_OF_PAGES; i++) {
  const pageObject = generatePageObject()
  savePageData(pageObject)
}

function savePageData(pageObject) {
  const fileName = `${pageObject.titlePage}.json`
  const content = JSON.stringify(pageObject)
  fs.writeFileSync(path.join(pageDataFolder,fileName),content)
}

function generatePageObject() {
  return {
    titlePage: generatePageTitle(),
    sections: Array.from(
      { length: SECTIONS_PER_PAGE },
      generateSectionObject
    )
  }
}

function generatePageTitle() {
  return generateTitle()
}

function generateSectionObject() {
  return {
    title: generateSectionTitle(),
    text: generateSectionText()
  }
}

function generateSectionTitle() {
  return generateTitle()
}

function generateTitle() {
  return firstLetterUppercase(generate())
}

function generateSectionText() {
  const sentences = Array.from(
    { length: SENTENCES_PER_SECTION },
    generateTextSentence)
  return sentences.join('. ') + '.'
}

function generateTextSentence() {
  const firstWord = firstLetterUppercase(generate())
  const otherWords = generate({ exactly: WORDS_PER_SENTENCE - 1,join: " " });
  return firstWord + ' ' + otherWords
}

function firstLetterUppercase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
