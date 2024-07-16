import "./Btn.css";

interface Props {
  avg: "avg" | "avg-side" | "horizontal";
  children: string;
  onClick: (value: string) => void;
}
function Btn({ avg, children, onClick }: Props) {
  return (
    <>
      <button
        className={avg}
        value={children}
        onClick={() => onClick(children)}
      >
        {children}
      </button>
    </>
  );
}

export default Btn;
