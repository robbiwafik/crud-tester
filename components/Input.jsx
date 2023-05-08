export default function Input({ className, ...otherProps }) {
    return (
        <input 
            className={'w-60 px-3 border-r-zinc-200 border-r-2 focus:outline-none ' + className}
            {...otherProps}
        />
    );
}