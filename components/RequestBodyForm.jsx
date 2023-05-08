import { useState } from 'react'

import RequestBodyInput from './RequestBodyInput'

export default function RequestBodyForm({ onChangeInputs }) {
    const [ inputs, setInputs ] = useState([{type: 'string'}])

    const handleAddInput = () => {
        const copiedInputs = [...inputs]
        copiedInputs.push({
            type: 'string'
        })
        setInputs(copiedInputs)
        onChangeInputs(copiedInputs)
    }

    const handleDeleteInput = (index) => {
        let copiedInputs = [...inputs]
        copiedInputs.splice(index, 1)
        setInputs(copiedInputs)
        onChangeInputs(copiedInputs)
    }

    const handleChangeValueType = (index, type) => {
        const copiedInputs = [...inputs]
        copiedInputs.at(index).type = type
        setInputs(copiedInputs)
        onChangeInputs(copiedInputs)
    }

    const handleChangeKey = (index, key) => {
        const copiedInputs = [...inputs]
        copiedInputs.at(index).key = key
        setInputs(copiedInputs)
        onChangeInputs(copiedInputs)
    }

    const handleChangeValue = (index, value) => {
        const copiedInputs = [...inputs]
        copiedInputs.at(index).value = value
        setInputs(copiedInputs)
        onChangeInputs(copiedInputs)
    }

    return (
        <div className='border-2 rounded-md p-4 bg-white'>
            {inputs.map((input, index) => (
                <div key={index} className='flex items-center'>
                    <RequestBodyInput  
                        objectKey={input.key}
                        objectValue={input.value}
                        selectedValueType={input.type}
                        onChangeKey={(key) => handleChangeKey(index, key)}
                        onChangeValueType={(type) => handleChangeValueType(index, type)}
                        onChangeValue={(value) => handleChangeValue(index, value)}
                    />
                    <button 
                        onClick={() => handleDeleteInput(index)}
                        className='btn btn-ghost mx-3 text-red-400 hover:bg-red-400 hover:text-white'
                    >
                        -
                    </button>
                </div>
            ))}
            <button className='btn btn-ghost' onClick={handleAddInput}>+ Input</button>
        </div>
    )
}