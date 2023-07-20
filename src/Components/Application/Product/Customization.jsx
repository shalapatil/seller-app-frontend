import React from "react";

const Customization = (props) => {
  const { customization, customizations, handleCustomizationChange } = props;
  return (
    <>
      <div
        key={customization.id}
        style={{ ...props.styles, marginLeft: "20px", borderWidth: 1 }}
        className="border-stone-300 rounded-md px-4 py-2 my-2"
      >
        <div className="flex">
          <p className="font-medium">Variant Name: &nbsp;</p>
          <input
            style={{ backgroundColor: " transparent" }}
            value={customization.name}
            onChange={(event) =>
              handleCustomizationChange(
                event,
                customizations.findIndex((c) => c.id === customization.id)
              )
            }
          />
        </div>
        <div className="flex font-medium">
          <p>Price: &nbsp;</p>
          <p>{customization.price}</p>
        </div>
      </div>
    </>
  );
};

export default Customization;
