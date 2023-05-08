import { useState } from 'react'
import { IoIosPaperPlane } from 'react-icons/io'

import { crudHttpMethods } from '../utils/http'
import Dropdown from './Dropdown'
import Input from './Input'

export default function HttpRequestBar({ 
    onSelectHttpMethod, 
    onChangeUrl, 
    onSendHttpRequest
}) {
    const [ selectedHttpMethod, setSelectedHttpMethod ] = useState('GET')

    const handleSelectHttpMethod = (method) => {
        setSelectedHttpMethod(method)
        onSelectHttpMethod(method)
    }

    return (
        <div className='flex grow w-full border-2 rounded-md bg-white'>
            <Dropdown 
                label={selectedHttpMethod} 
                menus={crudHttpMethods} 
                onClickMenu={handleSelectHttpMethod} 
            />
            <Input 
                onChange={({ target: input }) => onChangeUrl(input.value)}
                type='text' 
                placeholder='https://yourdomain.com/endpoint' 
                className='w-full border-l-2' 
            />
            <button 
                className='btn rounded-none rounded-r-md bg-slate-600'
                onClick={onSendHttpRequest}
            >
                Send 
                <IoIosPaperPlane className='ml-3'/>
            </button>
        </div>
    )
}