type SquareProps = {
  value: string;
  squareClickHandle: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Square = ({ value, squareClickHandle }: SquareProps) => {
  return (
    <button className="square" onClick={squareClickHandle}>
      {value}
    </button>
  );
};
