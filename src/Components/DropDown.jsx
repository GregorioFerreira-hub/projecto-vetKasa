import React from 'react';

const DropDown = () => {
    const options=[
        {label:"Red", value: 1},
        {label:"Green", value: 2},
        {label:"Blue", value: 3},
    ]
    return (
        <div>
            <h4>Medico</h4>
            <select>
                {
                    options.map(option =>(
                        <option value={option.value}>
                            {option.value}
                        </option>
                    )

                    )
                }
            </select>
        </div>
    );
};

export default DropDown;