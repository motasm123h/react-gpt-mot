import React from 'react'
import './blog.css'
import { Article } from '../../components'
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from './import'

const dataArray = [
  {
    image: blog02,
    data: 'Sep 26, 2021',
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    image: blog03,
    data: 'Sep 26, 2021',
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    image: blog03,
    data: 'Sep 26, 2021',
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    image: blog04,
    data: 'Sep 26, 2021',
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
]
function Blog() {
  return (
    <div className="gpt3__blog  section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>A lot is happening,
          We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">

          <Article
            image={blog01}
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Sep 26, 2021"
          />

        </div>
        <div className="gpt3__blog-container_groupB">
          {
            dataArray.map((item, index) => (
              <Article
                image={item.image}
                text={item.text}
                data={item.data}
                key={index}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Blog
