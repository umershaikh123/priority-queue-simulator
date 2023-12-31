"use client"

import React, { useState, useEffect } from "react"
import {
  Button,
  FormGroup,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material"

import StyledButton from "@/components/Button"
import CssTextField from "@/components/TextField"

const PriorityTable = ({ A, a, b, z0, M, C, Length }) => {
  const [tableData, setTableData] = useState([])
  const [priority, setpriority] = useState([])
  const [tableGenerated, setTableGenerated] = useState(false)

  function mod(a, b) {
    return ((a % b) + b) % b
  }

  const generateTableData = () => {
    if (A < 0) {
      alert("Please enter a valid positive A .")
      return
    }

    if (a < 0) {
      alert("Please enter a valid positive a .")
      return
    }

    if (b < 0) {
      alert("Please enter a valid positive b .")
      return
    }

    if (C < 0) {
      alert("Please enter a valid positive C .")
      return
    }

    if (M < 0) {
      alert("Please enter a valid positive M .")
      return
    }

    if (z0 < 0) {
      alert("Please enter a valid positive z0 .")
      return
    }

    if (b < a) {
      alert("b should be greater than a")
      return
    }

    const data = []
    let Z = z0

    const e = mod(556169139, 1994)
    console.log("mod = ", e)

    for (let i = 1; i <= Length.TableLength; i++) {
      let R = 0

      const calc1 = A * Z
      const calc2 = parseInt(calc1) + parseInt(C)

      R = mod(calc2, parseInt(M))

      const randomNumber = Math.random()
      const Y = (b - a) * randomNumber + a
      const roundOff = Math.round(Y)

      data.push({ serialNo: i, Z, R, randomNumber, Y, roundOff })
      Z = R
    }

    setTableData(data)
    setTableGenerated(true)
  }

  return (
    <div>
      <div className=" flex justify-center  items-center">
        <StyledButton
          onClick={generateTableData}
          color="#004021"
          background="#076638"
        >
          Submit
        </StyledButton>
      </div>

      {tableGenerated && (
        <>
          <h1 className="text-2xl font-medium">Priority Table</h1>
          <table className="w-full mt-4 mb-7 text-left">
            <thead>
              <tr>
                <th className="px-4">Serial No</th>
                <th className="px-4">Z iteration</th>
                <th className="px-4">R</th>
                <th className="px-4">Random Number</th>
                <th className="px-4">Priority</th>
                <th className="px-4">Priority Round Off</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(row => (
                <tr key={row.serialNo}>
                  <td className="px-4">{row.serialNo}</td>
                  <td className="px-4">{row.Z}</td>
                  <td className="px-4">{row.R}</td>
                  <td className="px-4">{row.randomNumber.toFixed(6)}</td>
                  <td className="px-4">{row.Y}</td>
                  <td className="px-4">{row.roundOff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

function Priority(TableLength) {
  const [A, setA] = useState(55)
  const [a, seta] = useState(1)
  const [b, setb] = useState(3)
  const [z0, setz0] = useState(10112166)
  const [M, setM] = useState(1994)
  const [C, setC] = useState(9)

  const handleA = e => {
    setA(parseFloat(e.target.value))
  }

  const handleb = e => {
    setb(e.target.value)
  }

  const handlea = e => {
    seta(e.target.value)
  }

  const handleC = e => {
    setC(e.target.value)
  }

  const handleM = e => {
    setM(e.target.value)
  }

  const handleZ0 = e => {
    setz0(e.target.value)
  }

  return (
    <>
      <h1 className="text-2xl font-medium">Priority Inputs</h1>

      <div className=" flex font-medium space-x-12 ">
        <div className=" flex-col ">
          <CssTextField
            label="A"
            variant="outlined"
            type="number"
            value={A}
            onChange={handleA}
          />
          <p>A</p>
        </div>

        <div className=" flex-col ">
          <CssTextField
            label="M"
            variant="outlined"
            type="number"
            value={M}
            onChange={handleM}
          />
          <p>M</p>
        </div>

        <div className=" flex-col ">
          <CssTextField
            label="Z0"
            variant="outlined"
            type="number"
            value={z0}
            onChange={handleZ0}
          />
          <p>Z0</p>
        </div>
      </div>

      <div className=" flex font-medium space-x-12 ">
        <div className=" flex-col ">
          <CssTextField
            label="C"
            variant="outlined"
            type="number"
            value={C}
            onChange={handleC}
          />
          <p>C</p>
        </div>

        <div className=" flex-col ">
          <CssTextField
            label="a"
            variant="outlined"
            type="number"
            value={a}
            onChange={handlea}
          />
          <p>a</p>
        </div>

        <div className=" flex-col ">
          <CssTextField
            label="b"
            variant="outlined"
            type="number"
            value={b}
            onChange={handleb}
          />
          <p>b</p>
        </div>
      </div>

      <PriorityTable
        A={A}
        a={a}
        b={b}
        z0={z0}
        M={M}
        C={C}
        Length={TableLength}
      />
    </>
  )
}

export default function Home() {
  const [arrivalRate, setArrivalRate] = useState(0)
  const [serviceRate, setServiceRate] = useState(0)
  const [cpValues, setCpValues] = useState([])
  const [cpLookupTable, setCpLookupTable] = useState([])
  const [interArrivalTimes, setInterArrivalTimes] = useState([])
  const [arrivalTimes, setArrivalTimes] = useState([])
  const [serviceTimes, setServiceTimes] = useState([])
  const [startTimes, setstartTimes] = useState([])
  const [endTime, setendTime] = useState([])
  const [TurnaroundTime, setTurnaroundTime] = useState([])
  const [WaitTime, setWaitTime] = useState([])
  const [ResponseTime, setResponseTime] = useState([])

  const [tableGenerated, setTableGenerated] = useState(false)
  const [shouldGeneratePriorityTable, setShouldGeneratePriorityTable] =
    useState(false)

  const [utilizationFactor, setutilizationFactor] = useState(0)
  const [avgTimeInSystem, setavgTimeInSystem] = useState(0)
  const [avgTimeInQueue, setavgTimeInQueue] = useState(0)
  const [avgCustomersInQueue, setavgCustomersInQueue] = useState(0)
  const [avgCustomersInSystem, setavgCustomersInSystem] = useState(0)

  const handleArrivalRateChange = e => {
    setArrivalRate(e.target.value)
    saveValues()
  }
  const handleServiceRateChange = e => {
    setServiceRate(e.target.value)
    saveValues()
  }

  const saveValues = async () => {
    return new Promise((resolve, reject) => {
      const lambda = parseFloat(arrivalRate)

      let x = 0
      let cumulativeProbability = 0
      const calculatedCpValues = []
      const calculatedCpLookupTable = []

      while (cumulativeProbability < 0.9999999) {
        const factorial = calculateFactorial(x)
        const probability =
          (Math.exp(-lambda) * Math.pow(lambda, x)) / factorial
        cumulativeProbability += probability
        calculatedCpValues.push({ x, cumulativeProbability })
        calculatedCpLookupTable.push(cumulativeProbability)
        x++
      }

      calculatedCpLookupTable.unshift(0)

      setCpValues(calculatedCpValues)
      setCpLookupTable(calculatedCpLookupTable)
      resolve()
      setShouldGeneratePriorityTable(true)
    })
  }

  const generatePriorityTable = async () => {
    const start_Time = []
    const End_Time = []
    const turnaround_Time = []
    const wait_Time = []
    const response_Time = []
    let currentTime = 0
    let totalWaitTime = 0
    let totalTurnaroundTime = 0

    const lambda = parseFloat(arrivalRate)
    const meu = parseFloat(serviceRate)
    if (isNaN(lambda) || lambda <= 0) {
      alert("Please enter a valid positive arrival rate (λ).")
      return
    }

    if (lambda >= meu) {
      alert("Please enter arrival rate (λ) less than mew (u).")
      return
    }

    const iATime = []
    let previousArrivalTime = 0
    iATime.push(0)
    for (let i = 0; i < cpLookupTable.length - 2; i++) {
      const length = cpLookupTable.length - 2
      const randomR = Math.round(Math.random() * length)

      iATime.push(randomR)
    }
    setInterArrivalTimes(iATime)

    const ArrivalTimes = await Promise.all(
      iATime.map(async value => {
        const currentInterArrivalTime = value
        const arrival_Time = previousArrivalTime + currentInterArrivalTime
        previousArrivalTime = arrival_Time
        return arrival_Time
      })
    )

    setArrivalTimes(ArrivalTimes)

    const serTime = []
    for (let i = 0; i < cpLookupTable.length; i++) {
      const length = cpLookupTable.length
      console.log("cpLookupTable.length", cpLookupTable.length)

      const randomR = Math.round(Math.random() * length)

      serTime.push(Math.round(randomR))
    }
    setServiceTimes(serTime)

    let startTime = 0
    for (let i = 0; i < cpLookupTable.length; i++) {
      start_Time.push(startTime)

      const r1 = startTime + serTime[i]
      End_Time.push(r1 > 0 ? r1 : -r1)

      const r2 = End_Time[i] - ArrivalTimes[i]
      turnaround_Time.push(r2 > 0 ? r2 : -r2)

      const r3 = startTime - ArrivalTimes[i]
      wait_Time.push(r3 > 0 ? r3 : -r3)

      const r4 = wait_Time[i] + serTime[i]
      response_Time.push(r4 > 0 ? r4 : -r4)

      totalWaitTime += wait_Time[i]
      totalTurnaroundTime += turnaround_Time[i]

      startTime = End_Time[i]
    }

    console.log("waitTime", wait_Time)
    console.log("turnaroundTime", turnaround_Time)
    console.log("endTime", End_Time)
    console.log("responseTime", response_Time)
    console.log("startTimes", start_Time)
    setstartTimes(start_Time)
    setWaitTime(wait_Time)
    setTurnaroundTime(turnaround_Time)
    setendTime(End_Time)
    setResponseTime(response_Time)

    setTableGenerated(true)

    setutilizationFactor(parseFloat(arrivalRate) / parseFloat(serviceRate))

    setavgTimeInSystem(1 / (parseFloat(serviceRate) - parseFloat(arrivalRate)))

    setavgTimeInQueue(avgTimeInSystem - 1 / parseFloat(serviceRate))

    setavgCustomersInQueue(parseFloat(arrivalRate) * avgTimeInQueue)

    setavgCustomersInSystem(parseFloat(arrivalRate) * avgTimeInSystem)
  }

  const calculateFactorial = n => {
    if (n === 0) return 1
    let factorial = 1
    for (let i = 1; i <= n; i++) {
      factorial *= i
    }
    return factorial
  }

  return (
    <div className=" flex flex-col  justify-center items-center space-y-8 mt-4">
      <div className=" justify-center">
        <h1 className="text-3xl font-bold text-[]">M/M/1 LCG </h1>
      </div>

      {/* Inputs */}
      <div className=" flex font-medium space-x-12 ">
        <div className=" flex-col ">
          <CssTextField
            label="lambda λ"
            variant="outlined"
            type="number"
            value={arrivalRate}
            onChange={handleArrivalRateChange}
          />
          <p>Arrival Rate</p>
        </div>

        <div className=" flex-col ">
          <CssTextField
            label="mu µ"
            variant="outlined"
            type="number"
            value={serviceRate}
            onChange={handleServiceRateChange}
          />
          <p>Service Rate</p>
        </div>
      </div>

      <div className="flex">
        <StyledButton
          onClick={generatePriorityTable}
          color="#004021"
          background="#076638"
        >
          Submit
        </StyledButton>
      </div>

      {tableGenerated && (
        <div>
          <table className=" w-[90vw] mt-4 mb-7">
            <thead>
              <tr>
                <th className=" text-white  px-4 ">S.no#</th>
                <th className=" text-white  px-4">
                  Cumulative Probability (Cp)
                </th>
                <th className=" text-white  px-4">Cp Lookup</th>
                <th className=" text-white  px-4">Avg Time Between Arrivals</th>
                <th className=" text-white  px-4">Inter Arrival Time</th>
                <th className=" text-white  px-4">Arrival Time</th>
                <th className=" text-white  px-4">Service Time</th>
                <th className=" text-white  px-4">Start Time</th>
                <th className=" text-white  px-4">End Time</th>
                <th className=" text-white  px-4">Turnaround Time</th>
                <th className=" text-white  px-4">Waiting Time</th>
                <th className=" text-white  px-4">Response Time</th>
              </tr>
            </thead>
            <tbody>
              {cpValues.map((value, index) => (
                <tr key={index}>
                  <td className="  px-4">{value.x + 1}</td>
                  <td className="  px-4">
                    {value.cumulativeProbability.toFixed(6)}
                  </td>
                  <td className="  px-4">{cpLookupTable[index].toFixed(6)}</td>
                  <td className="  px-4">{value.x}</td>
                  <td className="  px-4">{interArrivalTimes[index] || 0}</td>
                  <td className="  px-4">{arrivalTimes[index] || 0}</td>
                  <td className="  px-4">{serviceTimes[index] || 1}</td>

                  <td
                    className={`px-4 ${
                      startTimes[index] < 0 ? "text-red-500" : ""
                    }`}
                  >
                    {startTimes[index] || 0}
                  </td>
                  <td
                    className={`px-4 ${
                      endTime[index] < 0 ? "text-red-500" : "text-black"
                    }`}
                  >
                    {endTime[index] || 1}
                  </td>
                  <td
                    className={`px-4 ${
                      TurnaroundTime[index] < 0 ? "text-red-500" : ""
                    }`}
                  >
                    {TurnaroundTime[index] || 0}
                  </td>
                  <td
                    className={`px-4 ${
                      WaitTime[index] < 0 ? "text-red-500" : ""
                    }`}
                  >
                    {WaitTime[index] || 1}
                  </td>
                  <td
                    className={`px-4 ${
                      ResponseTime[index] < 0 ? "text-red-500" : ""
                    }`}
                  >
                    {ResponseTime[index] || 1}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className=" flex flex-col  justify-center items-center space-y-4 mt-4 mb-12">
            <Priority TableLength={cpValues.length} />
          </div>
        </div>
      )}
    </div>
  )
}
