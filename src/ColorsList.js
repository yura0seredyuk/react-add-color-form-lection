export const ColorsList = ({ colors }) => (
  <ul>
    {colors.map((color) => (
      <li key={color.id} style={{ color: color.name }}>
        {color.name}
      </li>
    ))}
  </ul>
);
