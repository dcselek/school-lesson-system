import React from 'react'
import { DonutChart } from '@carbon/charts-react'
import "@carbon/charts/styles.css"

export default function GenderCharts() {

    const data = [
        {
            "group": "male",
            "value": 21
        },
        {
            "group": "female",
            "value": 27
        }
    ]

    const options = {
        "title": "Students Gender Chart",
        "resizable": true,
        "donut": {
            "center": {
                "label": "Genders"
            }
        },
        "height": "400px"
    }

    return (
        <DonutChart
            data={data}
            options={options}
        >
        </DonutChart>
    )
}
