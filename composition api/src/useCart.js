import {reactive} from "vue";

export default function useCart() {
  const items = reactive([
    {
      id: 1,
      name: "Abcde",
      price: 12000,
    },
  ]);

  const handleRemove = (id) => {
    let index = items.findIndex((data, key) => data.id === id);
    console.log(index);
    items.splice(index, 1);
  };

  return {
    items,
    handleRemove,
  };
}
