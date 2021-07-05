import React, {useState} from 'react'
import Modal from "../Modal/Modal";

const Table = ({rows}) => {
  const [isOpened, setIsOpened] = useState(-1)
  const closedModal = () => setIsOpened(-1)
  return (
    <div className='wrapper'>
      <div>
        {rows.map((row, index) => {
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

    </div>
  )
};

export default Table;
