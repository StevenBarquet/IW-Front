// Dependencies
import PropTypes from "prop-types";

const SettingsContext = React.createContext();

export const SettingsProvider = ({ children }) => {
  const [defaultSettings, setSettings] = React.useState({ language: "" });

  React.useEffect(() => {
    const [browserSetting] = navigator.language.split("-");
    if (browserSetting === "en") {
      setSettings({ ...defaultSettings, language: "_en" });
    }
  }, []);

  const changeSettings = (updatedSettings) => {
    setSettings({ ...defaultSettings, ...updatedSettings });
  };

  const settings = React.useMemo(() => {
    return {
      defaultSettings,
      changeSettings,
    };
  }, [defaultSettings]);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

SettingsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useSettings = () => {
  const context = React.useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be inside SettingsProvider");
  }
  return context;
};
