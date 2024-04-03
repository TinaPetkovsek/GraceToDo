/**
 * Prikaze form za dodajanje novega todoja.
 * V props prejme funkcijo, ki jo poklice ob dodajanju novega todoja.
 * Primer uporabe:
 * <AddTodo onAddTodo={onAddTodo} />
 */

export function AddTodo(props) {
  const { onAddTodo } = props;

  return <div>To je AddTodo.jsx</div>;
}
