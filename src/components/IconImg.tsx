interface Iprobs {
  src: string;
  className: string;
}

const IconImg = ({ src, className = "w-9 h-w-9" }: Iprobs) => {
  return (
    <div>
      <img className={className} src={src} />
    </div>
  );
};

export default IconImg;
