import React, { FC } from "react"
import './Loader.scss';

interface ILoader {
  text: string;
}

const Loader: FC<ILoader> = ({ text }) => {
  return <div className="loader">{text}</div>;
}

export default Loader;