function Button({ text, icon, isOutline, ...rest }) {
  return (
    <div >
      <button
      {...rest}
        className={`${
          isOutline ? `bg-white text-black border border-black w-full` : null
        } px-4 py-2 bg-black text-xl justify-center text-white rounded-lg min-w-40 items-center flex gap-4`}
      >
        {icon}
        {text}
      </button>
    </div>
  );
}

export default Button;
