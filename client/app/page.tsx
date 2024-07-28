"use client";
import React, { useState, useEffect, useCallback } from "react";
import { getStoredConfig, storeConfig } from "./utils/localStorage";
import ConfigForm from "./components/ConfigForm";
import Button from "./components/Button";
import Input from "./components/Input";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import Select from "./components/Select";
import { Styles } from "./consts/types";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SignIn } from "@clerk/clerk-react";
import ProtectedRoute from "./components/ProtectedRoute";

const Home: React.FC = () => {
  const [styles, setStyles] = useState<Styles>({
    primary: {
      backgroundColor: "",
      color: "",
      borderRadius: "",
      paddingTop: "",
      paddingBottom: "",
      paddingLeft: "",
      paddingRight: "",
      width: "fit",
      border: "1px solid black",
    },
    secondary: {
      backgroundColor: "",
      color: "",
      borderRadius: "",
      paddingTop: "",
      paddingBottom: "",
      paddingLeft: "",
      paddingRight: "",
      width: "fit",
      border: "1px solid black",
    },
  });

  const [value, setValue] = useState<
    "button" | "input" | "radio" | "checkbox" | "select"
  >("button");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isRadio, setIsRadio] = useState(false);
  const [unit, setUnit] = useState("px");

  useEffect(() => {
    const storedConfig = getStoredConfig();
    if (storedConfig) {
      setStyles(storedConfig);
    }
  }, []);

  const handleConfigChange = useCallback((config: any) => {
    console.log("checking config", config, unit);
    const newStyles: Styles = {
      primary: {
        backgroundColor: config.primaryColor,
        color: config.primaryTextColor,
        borderRadius: `${config.borderRadius}${unit}`,
        paddingRight: `${config.paddingX}${unit}`,
        paddingLeft: `${config.paddingX}${unit}`,
        paddingTop: `${config.paddingY}${unit}`,
        paddingBottom: `${config.paddingY}${unit}`,
        width: "fit",
        border: `2px solid ${config.primaryBorderColor}`,
      },
      secondary: {
        backgroundColor: config.secondaryColor,
        color: config.secondaryTextColor,
        borderRadius: `${config.secondaryBorderRadius}${unit}`,
        paddingRight: `${config.secondaryPaddingX}${unit}`,
        paddingLeft: `${config.secondaryPaddingX}${unit}`,
        paddingTop: `${config.secondaryPaddingY}${unit}`,
        paddingBottom: `${config.secondaryPaddingY}${unit}`,
        width: "fit",
        border: `2px solid ${config.secondaryBorderColor}`,
      },
    };
    console.log("newStyles", newStyles);
    setStyles(newStyles);
    storeConfig(newStyles);
  }, [unit]);

  const renderComponent = useCallback(() => {
    switch (value) {
      case "button":
        return (
          <>
            <Button variant="primary" styles={styles} />
            <Button variant="secondary" styles={styles} />
          </>
        );
      case "input":
        return (
          <>
            <Input type="text" variant="primary" styles={styles} />
            <Input type="text" variant="secondary" styles={styles} />
          </>
        );
      case "radio":
        return (
          <>
            <Radio variant="primary" styles={styles} />
            <Radio variant="secondary" styles={styles} />
          </>
        );
      case "checkbox":
        return (
          <>
            <Checkbox variant="primary" styles={styles} />
            <Checkbox variant="secondary" styles={styles} />
          </>
        );
      case "select":
        return (
          <>
            <Select variant="primary" styles={styles} />
            <Select variant="secondary" styles={styles} />
          </>
        );
      default:
        return null;
    }
  }, [value, styles]);

  useEffect(() => {
    setIsRadio(value === "radio" || value === "checkbox");
  }, [value]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ProtectedRoute>
        <div className="w-screen h-screen flex">
          <div className="flex-1 relative h-full overflow-x-hidden flex justify-center items-center">
            <div className="flex gap-4 absolute top-10 right-3">
              <select
                className="p-1"
                onChange={(e) => setValue(e.currentTarget.value as typeof value)}
                value={value}
              >
                <option value="button">Button</option>
                <option value="input">Input</option>
                <option value="radio">Radio</option>
                <option value="checkbox">Checkbox</option>
                <option value="select">Select</option>
              </select>
              <select
                className="p-1"
                onChange={(e) => setUnit(e.currentTarget.value)}
                value={unit}
                defaultValue="px"
              >
                <option value="px">px</option>
                <option value="vw">vw</option>
                <option value="rem">rem</option>
              </select>
            </div>
            <div className="flex flex-col gap-10">{renderComponent()}</div>
          </div>

          <div className="hidden md:block w-[20%] h-[100vh] border-l-2 p-6 sticky top-0 right-0">
            <ConfigForm onConfigChange={handleConfigChange} isRadio={isRadio} />
          </div>

          <div className="md:hidden fixed bottom-4 right-4 z-50">
            <button
              onClick={toggleDrawer}
              className="p-2 bg-black text-white rounded-full focus:outline-none"
            >
              {isDrawerOpen ? "Close" : "Open"} Config
            </button>
          </div>
          <div
            className={`fixed top-0 right-0 h-full w-[80%] bg-white border-l-2 p-6 transform transition-transform ${
              isDrawerOpen ? "translate-x-0" : "translate-x-full"
            } z-40 md:hidden`}
          >
            <ConfigForm onConfigChange={handleConfigChange} isRadio={isRadio} />
          </div>
        </div>
        </ProtectedRoute>
  );
};

export default Home;
