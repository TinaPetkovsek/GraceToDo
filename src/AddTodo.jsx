/**
 * Prikaze form za dodajanje novega todoja.
 * V props prejme funkcijo, ki jo poklice ob dodajanju novega todoja.
 * Primer uporabe:
 * <AddTodo onAddTodo={onAddTodo} />  // to napisemo v APP
 */

import { useEffect, useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export function AddTodo(props) {
  const { onAddTodo } = props; // *
  const [title, setTitle] = useState("");

  function onSubmit() {
    if (title.length === 0) return; //ce ni nic v title-u ne submitamo

    console.log(title.length);
    onAddTodo(title); // * onAddTodo je podan v props-ih, torej ga dolocimo v App
  }

  // e.target.value uporabimo, da dobimo tekst iz Input-a
  // ko kliknemo gumb poklicemo funkcijo on Submit

  return (
    <div>
      <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
}
