import "./Child.css";

function Child({ show }) {
  return (
    <div className="model">
      <button onClick={() => show(false)}>X</button>
    </div>
  );
}

export default Child;
