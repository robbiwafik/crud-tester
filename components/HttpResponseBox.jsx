import { statusCodes } from '@/utils/http'
import JSONPretty from 'react-json-pretty'

import defaultJson from '../styles/defaultJson'

export default function HttpResponseBox({ jsonData, headers={} }) {
    const { statusCode, contentType } = headers

    return (
        <div className='w-full p-10 border-2 rounded-lg min-h-2/5 max-h-128 overflow-auto bg-white my-10'>
            <div className='mb-4'>
                <span className='block font-bold'>HTTP {statusCode || ''} {statusCodes[statusCode]}</span>
                <span className='font-bold'>Content-Type: </span>{contentType || ''}
            </div>
            <JSONPretty data={jsonData} theme={defaultJson} />
        </div>
    )
}