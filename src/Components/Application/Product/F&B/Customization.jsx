import React from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "#1c75bc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1c75bc",
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "14px",
  },
});

const Customization = (props) => {
  const { customization, customizations, handleCustomizationChange } = props;

  const handleInputChange = (event, property) => {
    const updatedGroups = customizations.map((g) =>
      g.id === customization.id ? { ...g, [property]: event.target.value } : g
    );
    handleCustomizationChange(updatedGroups);
  };

  return (
    <>
      <div
        key={customization.id}
        style={{ ...props.styles, backgroundColor: "#1876d221", border: "2px solid #ffffff" }}
        className="border-black rounded-md px-8 py-2 my-2"
      >
        <div className="flex items-end">
          <p className="text-[#181818] text-medium">Customization: {customization.id}</p>
          {!customization.child && (
            <Button
              size="small"
              variant="outlined"
              sx={{ marginLeft: 2 }}
              onClick={() => {
                props.setSelectedCustomization(customization);
                props.setShowCustomizationGroupModal(true);
              }}
            >
              Add Customization Group
            </Button>
          )}
        </div>
        <div className="flex">
          <div className="flex flex-col mr-6">
            <p className="w-40 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">
              Variant Name: &nbsp;
            </p>

            <CssTextField
              required
              type={"input"}
              className="w-40 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Variant Name"}
              error={customization.name.trim() === ""}
              helperText={customization.name.trim() === "" ? "Field cannot be empty" : ""}
              value={customization.name}
              onChange={(event) => handleInputChange(event, "name")}
            />
          </div>
          <div className="flex flex-col">
            <p className="w-40 text-sm py-2 ml-1 font-medium text-left text-[#606161] inline-block">Price: &nbsp;</p>
            <CssTextField
              required
              type={"number"}
              className="w-40 h-full px-2.5 py-3.5 text-[#606161] bg-transparent !border-black"
              size="small"
              autoComplete="off"
              placeholder={"Enter Variant Price"}
              error={customization.price <= 0}
              helperText={customization.price <= 0 ? "Please enter a valid price value" : ""}
              value={customization.price}
              onChange={(event) => handleInputChange(event, "price")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Customization;
