import React, { useState, ChangeEvent, FormEvent } from "react";

interface Config {
  primaryColor: string;
  primaryTextColor: string;
  primaryBorderColor: string;
  secondaryColor: string;
  secondaryTextColor: string;
  secondaryBorderColor: string;
  borderRadius: number;
  paddingX: number;
  paddingY: number;
  secondaryBorderRadius: number;
  secondaryPaddingX: number;
  secondaryPaddingY: number;
}

interface ConfigFormProps {
  onConfigChange: (config: Config) => void;
  isRadio: boolean;
}

const ConfigForm: React.FC<ConfigFormProps> = ({ onConfigChange, isRadio }) => {
  const [config, setConfig] = useState<Config>({
    primaryColor: "",
    primaryTextColor: "",
    primaryBorderColor: "",
    secondaryColor: "",
    secondaryTextColor: "",
    secondaryBorderColor: "",
    borderRadius: 0,
    paddingX: 0,
    paddingY: 0,
    secondaryBorderRadius: 0,
    secondaryPaddingX: 0,
    secondaryPaddingY: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig({
      ...config,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onConfigChange(config);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <p className="text-xl font-bold mt-4">Primary</p>
        <div className="flex gap-1">
          <div className="flex flex-col">
            <label>Background Color</label>
            <input
              className="input-box-flex"
              type="text"
              name="primaryColor"
              value={config.primaryColor}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label>Text Color</label>
            <input
              className="input-box-flex"
              type="text"
              name="primaryTextColor"
              value={config.primaryTextColor}
              onChange={handleChange}
            />
          </div>
        </div>

        {isRadio ? (
          <div className="flex flex-col">
            <label>Size</label>
            <input
              className="input-box"
              type="number"
              name="paddingY"
              value={config.paddingY}
              onChange={handleChange}
            />
          </div>
        ) : (
          <>
            <div className="flex gap-1">
              <div className="flex flex-col">
                <label>Border Color</label>
                <input
                  className="input-box-flex"
                  type="text"
                  name="primaryBorderColor"
                  value={config.primaryBorderColor}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label>Border Radius</label>
                <input
                  className="input-box-flex"
                  type="number"
                  name="borderRadius"
                  value={config.borderRadius}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Padding X</label>
              <input
                className="input-box"
                type="number"
                name="paddingX"
                value={config.paddingX}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Padding Y</label>
              <input
                className="input-box"
                type="number"
                name="paddingY"
                value={config.paddingY}
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xl font-bold mt-4">Secondary</p>
        <div className="flex gap-1">
          <div className="flex flex-col">
            <label>Background Color</label>
            <input
              className="input-box-flex"
              type="text"
              name="secondaryColor"
              value={config.secondaryColor}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label>Text Color</label>
            <input
              className="input-box-flex"
              type="text"
              name="secondaryTextColor"
              value={config.secondaryTextColor}
              onChange={handleChange}
            />
          </div>
        </div>
        {isRadio ? (
          <div className="flex flex-col">
            <label>Size</label>
            <input
              className="input-box"
              type="number"
              name="secondaryPaddingY"
              value={config.secondaryPaddingY}
              onChange={handleChange}
            />
          </div>
        ) : (
          <>
            <div className="flex gap-1">
              <div className="flex flex-col">
                <label>Border Color</label>
                <input
                  className="input-box-flex"
                  type="text"
                  name="secondaryBorderColor"
                  value={config.secondaryBorderColor}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label>Border Radius</label>
                <input
                  className="input-box-flex"
                  type="number"
                  name="secondaryBorderRadius"
                  value={config.secondaryBorderRadius}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Padding X</label>
              <input
                className="input-box"
                type="number"
                name="secondaryPaddingX"
                value={config.secondaryPaddingX}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Padding Y</label>
              <input
                className="input-box"
                type="number"
                name="secondaryPaddingY"
                value={config.secondaryPaddingY}
                onChange={handleChange}
              />
            </div>
          </>
        )}
      </div>

      <button
        className="mt-10 p-2 bg-black text-white w-full md:w-auto"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default ConfigForm;
