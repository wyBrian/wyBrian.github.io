import React, { useState } from 'react'
import  ReactMarkdown from 'react-markdown'
import CodeBlockHighlighter from './CodeBlockHighlighter'
import test from '../../resources/markdowns/test.md'



const BlogPage = () => {

  const [ text, setText ] = useState('')

  fetch(test).then(response => response.text()).then(text=>setText(text))

  return (
    <div style={{padding: '0 25vw', height: '100%'}}> 
      <ReactMarkdown source={text} renderers={{ code: CodeBlockHighlighter }}/>
    </div>
  )
}
  

export default BlogPage