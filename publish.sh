set -e
set -o pipefail

npm run generate
npm run compile-tailwind
npm run build
touch dist/.nojekyll
npm run commit-gh-pages
