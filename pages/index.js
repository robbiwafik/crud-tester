import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HttpRequestBar from '@/components/HttpRequestBar'
import HttpResponseBox from '@/components/HttpResponseBox'
import RequestBodyForm from '@/components/RequestBodyForm'

export default function Main() {
  const [ data, setData ] = useState([])
  const [ headers, setHeaders ] = useState({})
  const [ httpMethod, setHttpMethod ] = useState('GET')
  const [ inputs, setInputs ] = useState([])
  const [ requestBody, setRequestBody ] = useState({})
  const [ submittedCount, setSubmittedCount ] = useState(0)
  const [ url, setUrl ] = useState('')

  useEffect(() => {
    fetchData()
  }, [submittedCount])

  const fetchData = async () => {
    let result
    try {
      if (httpMethod === 'GET') result = await fetch(url)
      else if (httpMethod === 'POST' || httpMethod === 'PUT' || httpMethod === 'PATCH')
        result = await fetch(url, {
          method: httpMethod,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        })
      else result = await fetch(url, { method: httpMethod })
    }
    catch (error) {
      toast.error(error.message)
    }
    

    if (result) {
      const headers = {
        statusCode: result.status,
        statusText: result.statusText,
        contentType: result.headers.get('content-type')
      }
      setHeaders(headers)
    
      const jsonData = await result.json()  
      setData(jsonData)
    }
  }
  

  const handleSendHttpRequest = () => {
    setSubmittedCount(submittedCount + 1)

    const body = {}
    inputs.forEach(({ key, value, type }) => body[key] = covertValue(value, type))
    setRequestBody(body)
  }

  const covertValue = (value, type) => {
      if (type === 'integer')
        return parseInt(value)
      else if (type === 'float')
        return parseFloat(value)
      else if (type === 'boolean')
        return Boolean(value)
      else if (type === 'string')
        return String(value)
      return value
  }

  return (
    <div>
      <ToastContainer />
      <h1 className='text-4xl text-center mb-8'>API CRUD Tester</h1>
      <HttpRequestBar 
        onSelectHttpMethod={setHttpMethod} 
        onChangeUrl={setUrl} 
        onSendHttpRequest={handleSendHttpRequest} 
      />
      <HttpResponseBox jsonData={data} headers={headers} />
      {!['POST', 'PUT', 'PATCH'].includes(httpMethod) || <RequestBodyForm onChangeInputs={setInputs} />}
    </div>
    )
}