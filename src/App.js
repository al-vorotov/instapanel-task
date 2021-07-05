import React, {useState, useEffect, useCallback} from "react";

import Table from "./Components/Table";
import Chart from "./Components/Chart/Chart";

import "./index.css";

const App = () => {
    const [rows, setRows] = useState([])
    const [step, setStep] = useState(1)
    const [showComponents, setShowComponents] = useState(false)

    const req = useCallback(async () => {
      return await fetch(`https://api.punkapi.com/v2/beers?page=${step}&per_page=25`, {}).then(res => res.json())
    }, [step])

    useEffect(() => {
      req().then(el => {
        setRows(el)
      })
    }, [req, step])

    const setNextStep = () => setStep(step + 1)

    const setPrevStep = () => {
      if (step === 1) {
        setStep(1)
      } else {
        setStep(step - 1)
      }
    }

    const compareFunc = (a, b) => {
      if (a.abv > b.abv) {
        return 1;
      }
      if (a.abv < b.abv) {
        return -1;
      }
      return 0;
    }

    return (
      <div className="App">
        {showComponents
          ? <Table rows={rows.sort(compareFunc)}/>
          : <Chart rows={rows.sort(compareFunc)}/>
        }
        <button onClick={setPrevStep}>{'<'}</button>
        <button onClick={setNextStep}>{'>'}</button>
        <button
          onClick={() => setShowComponents(!showComponents)}>{showComponents ? 'Show Chart' : 'Show Table'}</button>
      </div>
    );
  }
;

export default App;
