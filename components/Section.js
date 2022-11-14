import { Button, Card } from "react-daisyui";
import ReadMore from "@components/ReadMore";
export default function Section({ category, items, addToCart }) {
  return (
    <section className="flex flex-col items-center py-5 w-full" id={category}>
      <h2 className="text-4xl py-3 px-5">
        {category != "Others"
          ? `Reccomended Items in the ${category} category:`
          : "Other Reccomended Items:"}
      </h2>
      <div className="flex flex-wrap w-full component-preview p-4 items-stretch justify-center gap-2 font-sans">
        {items.map((item, idx) => (
          <Card
            key={idx}
            className="hover:transform hover:scale-105 transform-gpu transition"
          >
            <Card.Image
              className=" w-80"
              src={item.images[0]}
              alt={item.title}
            />
            <Card.Body>
              <Card.Title tag="h2">{item.title}</Card.Title>
              <div className=" break-words max-w-[30ch]">
                <ReadMore>{item.description}</ReadMore>
              </div>
              <span className="text-4xl text-fuchsia-400">${item.price}</span>
              <Card.Actions className="justify-end">
                <Button
                  color="primary"
                  onClick={() => {
                    addToCart(item.title, item.price);
                  }}
                >
                  Buy Now
                </Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}
