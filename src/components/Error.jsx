
const Error = ({children}) => {
    return (
        <div className="w-full px-3 py-2 rounded-lg border-2 border-red-400 bg-red-100 text-red-500 flex items-center">
            <i className="pi pi-info-circle bg-red-500 text-white mr-1" size={20}></i>
            {/* <AlertCircle size={20} className='fill-red-500 text-white mr-1' /> */}
            <label id='error'>{children}</label>
        </div>
    )
}

export default Error