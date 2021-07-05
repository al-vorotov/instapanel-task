import React, {useState} from 'react'
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory';

import Modal from "../Modal/Modal";

import './chart.css';

const Table = ({rows}) => {
  const [isOpened, setIsOpened] = useState(-1)

  const createChartData = () => rows.map((item) => ({y: item.abv, x: item.id}))
  const closedModal = () => setIsOpened(-1)
  return (
      <div className='wrapper'>
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={10}
        >
          <VictoryBar
              style={{data: {fill: "#c43a31"}}}
              data={createChartData()}
              events={[{
                target: "data",
                eventHandlers: {
                  onClick: () => {
                    return [
                      {
                        target: "data",
                        mutation: (props) => {
                          setIsOpened(props.index)
                        }
                      }
                    ];
                  }
                }
              }
              ]}
          />
        </VictoryChart>
        <div>
          {rows.map((row, index) => {
                return (
                    <>
                      {isOpened === index &&
                      <div className='row-modal'>
                        <Modal
                            image={row.image_url}
                            name={row.name}
                            tagline={row.tagline}
                            abv={row.abv}
                            description={row.description}
                            dateBrewed={row.first_brewed}
                            tips={row.brewers_tips}
                            closedModal={closedModal}
                        />
                      </div>
                      }
                    </>
                )
              }
          )}
        </div>
      </div>
  )
};

export default Table;
