import { useState } from "react";

interface Props {
  addSubject: React.Dispatch<React.SetStateAction<string>>;
}

const useFocus = ({ addSubject }: Props) => {
  const [subject, setSubject] = useState<string>("");

  const handleSubject = (text: string) => {
    setSubject(text);
  };

  const handleAddSubject = () => {
    addSubject(subject);
  };

  return { handleSubject, handleAddSubject };
};

export default useFocus;
