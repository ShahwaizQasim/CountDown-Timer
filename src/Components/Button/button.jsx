
function Button({ label, onClick, disabled }) {
  return (
    <button className="py-2 px-8 bg-black text-white rounded-[8px] border-2 text-[12px]"
      onClick={onClick} disabled={disabled}>{label}</button>
  )
}

export default Button