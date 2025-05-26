import React from 'react'
import Banner from './_components/banner'
import NurseryVisionSection from './_components/nursery-vision'
import BelieveIn from './_components/believe-in'
import Operate from './_components/operate'
import Footer from '../_components/Footer'

export default function NurseryVision() {
  return (
    <div>
      <Banner />
      <NurseryVisionSection />
      <BelieveIn />
      <Operate/>
      <Footer quote={`"Tell me and I forget. Teach me and I remember. Involve me and I learn" `} quoteAuthor={`“Benjamin Franklin”`}/>
    </div>
  )
}
