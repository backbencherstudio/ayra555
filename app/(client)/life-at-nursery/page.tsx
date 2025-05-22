import React from 'react'
import LifeAtNurseryBanner from './_components/baner'
import FirstTimeAtNursery from './_components/first-time-at-nursery'
import KeyWorkers from './_components/key-workers'

export default function LifeAtNursary() {
  return (
    <div>
        <LifeAtNurseryBanner/>
        <FirstTimeAtNursery/>
        <KeyWorkers/>
    </div>
  )
}
