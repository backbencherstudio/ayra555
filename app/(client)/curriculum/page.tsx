import React from 'react'
import CurriculumBanner from './_components/curriculum-banner'
import Register from './_components/register'
import BabyGrowApproach from './_components/baby-grow-approach'
import CurriculumAims from './_components/curriculem-aims'
import ImportanceOfPlay from './_components/importance-fo-play'

export default function Curriculum() {
    return (
        <div>
            <CurriculumBanner />
            <Register />
            <BabyGrowApproach />
            <CurriculumAims />
            <ImportanceOfPlay/>
        </div>
    )
}
