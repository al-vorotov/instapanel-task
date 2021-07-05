import React, {useState, useEffect} from 'react'
import Modal from "../Modal/Modal";
import {VictoryBar, VictoryChart, VictoryTheme} from "victory";

const Table = ({step, setStep, rows}) => {
	const [isOpened, setIsOpened] = useState(-1)
	const setNextStep = () => {
		setStep(step + 1)

	}

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
		// a должно быть равным b
		return 0;
	}

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
				{rows.sort(compareFunc).map((row, index) => {
						return (
							<div key={row.id} className='row-wrapper'>
								<div className='rows'>{row.name}</div>
								<div className='rows'>{row.tagline}</div>
								<div
									className='rows'>
									<img
										onClick={() => setIsOpened(index)}
										src={row.image_url}
										alt={row.name}
										className='row-image'
									/>
								</div>
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
								<div className='rows'>{row.abv}</div>
							</div>
						)
					}
				)}
			</div>
			<button onClick={setPrevStep}>{'<'}</button>
			<button onClick={setNextStep}>{'>'}</button>
		</div>
	)
};

export default Table;