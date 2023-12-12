const Button = ({onClick, value}: {onClick: () => void, value: string}) =>
  <button
    type="button"
    onClick={onClick}
    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-800">
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-dark-bg rounded-md group-hover:bg-opacity-0">
      {value}
    </span>
  </button>

export default Button;