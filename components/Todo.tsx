import React from "react";

interface ListItemsProps {
  items: any;
  setUpdate: (value: any, key: any) => void;
  deleteItem: (key: any) => void;
}

function ListItems(props: ListItemsProps) {
  const items = props.items;
  const listItems = items.map(
    (items: { text: any; key: any }): JSX.Element => (
      <div className="list" key={items.key}>
        <p>
          <input
            type="text"
            id={items.key}
            value={items.text}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              props.setUpdate(e.currentTarget.value, items.key)
            }
          />

          <span>
            <button
              className="button"
              onClick={() => props.deleteItem(items.key)}
            >
              delete
            </button>
          </span>
        </p>
        <style jsx>
          {`
            .list {
              color: white;
              width: 300px;
              background-color: rgb(175, 224, 42);
              height: 50px;
              margin: 20px auto;
              border-radius: 5px;
            }

            .list p {
              padding: 10px;
              position: relative;
            }

            .list p span button {
              position: absolute;
              right: 10px;
              cursor: pointer;
            }

            .list p input {
              background-color: transparent;
              border: 0;
              color: white;
              font-size: 18px;
            }
            .list p input {
              outline: none;
            }
          `}
        </style>
      </div>
    )
  );
  return <div>{listItems}</div>;
}

export default ListItems;
