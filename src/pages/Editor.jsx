import React from 'react'
import { RichTextEditorComponent, Inject, Image, HtmlEditor, Link, QuickToolbar, Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { Header } from '../components'
import { EditorData } from '../data/dummy'

function Editor () {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        category='Page'
        title='Editor'
      />
      <RichTextEditorComponent>
        <EditorData />
        <Inject
          services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
        />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
