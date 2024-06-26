/**
 * Prikaze seznam todojev v tabeli z dvema stolpcema.
 * V props prejme seznam todojev.
 * Primer uporabe:
 * <ShowTodos todos={todos} />
 */

export function ShowTodos(props) {
  const { todos } = props;

  return (
    <div>
      {todos.map((todo) => (
        <Todo></Todo>
      ))}
    </div>
  );
}
