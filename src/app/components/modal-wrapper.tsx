const ModalWrapper = ({ children }) => {
  return (
    <div className=" w-[200px] p-0  h-[50px] absolute top-[-80%] left-[0%]     ">
      <div></div>
      {children}
    </div>
  );
};
export default ModalWrapper;
