import React from 'react'
import LifeAtNurseryBanner from './_components/baner'
import FirstTimeAtNursery from './_components/first-time-at-nursery'
import KeyWorkers from './_components/key-workers'
import SmoothSettling from './_components/smooth-settling'
import HealthyBody from './_components/healthy-body'
import Connected from './_components/connected'

export default function LifeAtNursary() {
  return (
    <div>
        <LifeAtNurseryBanner/>
        <FirstTimeAtNursery/>
        <KeyWorkers/>
        <SmoothSettling/>
        <HealthyBody/>
        <Connected/>
    </div>
  )
}
