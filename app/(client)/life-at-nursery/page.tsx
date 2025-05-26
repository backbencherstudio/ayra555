import React from 'react'
import LifeAtNurseryBanner from './_components/baner'
import FirstTimeAtNursery from './_components/first-time-at-nursery'
import KeyWorkers from './_components/key-workers'
import SmoothSettling from './_components/smooth-settling'
import HealthyBody from './_components/healthy-body'
import Connected from './_components/connected'
import Footer from '../_components/Footer'

export default function LifeAtNursary() {
  return (
    <div>
        <LifeAtNurseryBanner/>
        <FirstTimeAtNursery/>
        <KeyWorkers/>
        <SmoothSettling/>
        <HealthyBody/>
        <Connected/>
        <Footer quote={`"Each day of our lives we make deposits in the memory banks of our children"`} quoteAuthor={`“Charles R. Swindoll”`}/>
    </div>
  )
}
