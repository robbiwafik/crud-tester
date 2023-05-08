import { reqBodyValueTypes } from '@/utils/http'
import Dropdown from './Dropdown'
import Input from './Input'

export default function RequestBodyInput({ 
    onChangeKey, 
    onChangeValue, 
    onChangeValueType,
    objectKey='',
    objectValue='',
    selectedValueType
}) {
    return (
        <div className='flex border-2 rounded-md my-2 grow'>
            <Input
                onChange={({ target: input }) => onChangeKey(input.value)} 
                placeholder='Key' 
                value={objectKey}
            />
            <Input 
                onChange={({ target: input }) => onChangeValue(input.value)} 
                placeholder='Value'
                className={'w-full'}
                value={objectValue}
                disabled={!objectKey}
            />
            <Dropdown 
                menus={reqBodyValueTypes} 
                onClickMenu={onChangeValueType} 
                label={selectedValueType} 
            />
        </div>
    ) 
}