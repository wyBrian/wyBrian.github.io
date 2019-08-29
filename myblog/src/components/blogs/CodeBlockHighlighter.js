import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"


const CodeBlockHighlighter = ({ language, value }) =>  
  <SyntaxHighlighter language={ language } style={ okaidia }>
    {value}
  </SyntaxHighlighter>

export default CodeBlockHighlighter