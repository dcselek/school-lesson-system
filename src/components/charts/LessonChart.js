import React from 'react'
import { SimpleBarChart } from '@carbon/charts-react'

export default function LessonChart() {
    const data = [
        {
            "group": "BTO331",
            "value": 40
        },
        {
            "group": "BTO330",
            "value": 15,
        },
        {
            "group": "BTO365",
            "value": 43
        },
        {
            "group": "BTO355",
            "value": 21,
        }
    ]

    const options = {
        "title": "Lessons",
        "axes": {
            "left": {
                "title": "Students",
                "mapsTo": "value",
            },
            "bottom": {
                "title": "Lessons",
                "mapsTo": "group",
                "scaleType": "labels"
            }
        },
        "height": "400px",
        "width": "500px"
    }

    return (
        <>
            <SimpleBarChart
                data={data}
                options={options}
            />
        </>
    )
}
