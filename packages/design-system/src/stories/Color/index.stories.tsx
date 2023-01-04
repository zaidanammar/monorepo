import React from "react";
import { copyText } from "../../../../outlet/src/utils/common";
import listColors from "../../constants/color";

export default {
  title: "Colors",
};
interface ItemColor {
  color: string;
  label: string;
  textColor: string;
}

const ItemColor = ({ color, label, textColor }: ItemColor) => {
  return (
    <tr className="h-14 text-l-semibold">
      <td style={{ background: color }}>
        <div>
          <p className="pl-4" style={{ color: textColor }}>
            {label}
          </p>
        </div>
      </td>
      <td>
        <div onClick={() => copyText(color)} tabIndex={0} role="button">
          <p className="pl-4">{color}</p>
        </div>
      </td>
    </tr>
  );
};

interface Template {
  color: {
    title: string;
    headerColor: string;
    items: {
      label: string;
      color: string;
      textColor: string;
    }[];
  };
}

const Template = ({ color }: Template) => {
  return (
    <section className="p-3">
      <div>
        <p className="text-xxl-semibold">{color.title}</p>
      </div>
      <table className="w-full mt-4">
        {color.items.length > 1 ? (
          <thead>
            <tr className="bg-neutral90 h-14 text-white">
              <th>
                <p>Name</p>
              </th>
              <th>
                <p>Color</p>
              </th>
            </tr>
          </thead>
        ) : (
          <></>
        )}
        <tbody>
          {color.items.map((item) => (
            <ItemColor
              key={item.label}
              color={item.color}
              label={item.label}
              textColor={item.textColor}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export const Default = () => {
  return (
    <section>
      {listColors.map((el) => (
        <Template color={el} key={el.title} />
      ))}
    </section>
  );
};
