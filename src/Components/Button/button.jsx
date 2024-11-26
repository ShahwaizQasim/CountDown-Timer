
function Button({label,onClick}) {
  return (
    <button className="py-2 px-8 bg-black text-white rounded-[8px] border-2 text-[16px]" onClick={onClick}>{label}</button>
  )
}

export default Button