import "./Btn.css";


interface Props {
  avg: "avg" | "avg-side" | "horizontal";
  children:string;
}
function Btn({ avg, children }: Props) {
  return (
    <>
      <div className={avg}>
        {children}
      </div>
    </>
  );
}

export default Btn;
