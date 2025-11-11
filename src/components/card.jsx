// src/components/Card.jsx

export default function Card({ titulo, descricao }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "10px 0",
      backgroundColor: "#f9f9f9"
    }}>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}
