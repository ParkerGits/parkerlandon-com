#!/bin/bash
for filename in introducing-hson a-survey-of-practical-haskell pure-functional-programming-in-context
do sed "s/\[\^[0-9]*\]//g" $(fd $filename src) |
  sed -r "s/\`\`\`hs/\\\begin\{minted\}\{haskell\}/g" |
  sed -r "s/\`\`\`ts/\\\begin\{minted\}\{typescript\}/g" |
  sed -r "s/\`\`\`txt/\\\begin\{minted\}\{plaintext\}/g"  |
  sed -r "s/\`\`\`json/\\\begin\{minted\}\{json\}/g"  |
  sed -r "s/\`\`\`js/\\\begin\{minted\}\{javascript\}/g"  |
  sed -r "s/\`\`\`/\\\end\{minted\}/g" |
  sed -r "s/\#\#\# (.*)/\\\subsection\{\1\}/g" > $(echo tex/$filename.tex)
done
