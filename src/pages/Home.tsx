import React, {ChangeEvent, useCallback, useState} from "react";

export const HomePage: React.VFC = () => {
  const [text, setText] = useState('');

  const inputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, [setText]);

  return (
    <div>
      <form>
        <input type="text" value={text} onChange={inputChange} placeholder="入力してください"/>
      </form>
    </div>
  )
}