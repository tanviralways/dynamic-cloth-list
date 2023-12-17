import { MdDeleteForever } from "react-icons/md";

function ClothTable(props) {
  const { name, id, price, quantity, color, description } = props.products;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{id}</td>
      <td className="px-6 py-4">{price}</td>
      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4">{color}</td>
      <td className="px-6 py-4">{description}</td>
      <td>
        <MdDeleteForever
          className="cursor-pointer"
          onClick={() => props.deleteCloth(id)}
          color="red"
        />
      </td>
    </tr>
  );
}

export default ClothTable;
