import React, { useState, useEffect } from 'react';

const ThemeSelector = () => {
  const [theme, setTheme] = useState('theme1');
  const [bg, setBg] = useState('dark');

  const [customBgColor, setCustomBgColor] = useState('#ffffff');
  const [customTextColor, setCustomTextColor] = useState('#000000');
  const [customPrimaryColor, setCustomPrimaryColor] = useState('#3de8d5');
  const [customSecondaryColor, setCustomSecondaryColor] = useState('#152343');

  const themes = {
    theme1: {
      light: {
        '--bg-color': '#ffffff',
        '--text-color': '#000000',
        '--primary-color': '#3de8d5',
        '--secondary-color': '#f7dd72',
        '--shadow-color': 'rgba(0, 0, 0, 0.3)',
      },
      dark: {
        '--bg-color': '#152343',
        '--text-color': '#e0e0e0',
        '--primary-color': '#1ab3a3',
        '--secondary-color': '#d4b73d',
        '--shadow-color': 'rgba(255, 255, 255, 0.3)',
      }
    },
    theme2: {
      light: {
        '--bg-color': '#fcfcfc',
        '--text-color': '#333',
        '--primary-color': '#9b59b6',
        '--secondary-color': '#3498db',
        '--shadow-color': 'rgba(0, 0, 0, 0.2)',
      },
      dark: {
        '--bg-color': '#1b2733',
        '--text-color': '#eeeeee',
        '--primary-color': '#7d3c98',
        '--secondary-color': '#2474a6',
        '--shadow-color': 'rgba(255, 255, 255, 0.2)',
      }
    },
    theme3: {
      light: {
        '--bg-color': '#fefefe',
        '--text-color': '#2e2e2e',
        '--primary-color': '#ff6f61',
        '--secondary-color': '#374785',
        '--shadow-color': 'rgba(0, 0, 0, 0.25)',
      },
      dark: {
        '--bg-color': '#181818',
        '--text-color': '#cfcfcf',
        '--primary-color': '#cc534b',
        '--secondary-color': '#2a3659',
        '--shadow-color': 'rgba(255, 255, 255, 0.25)',
      }
    },
    theme4: {
      light: {
        '--bg-color': '#f9f9f9',
        '--text-color': '#222222',
        '--primary-color': '#1abc9c',
        '--secondary-color': '#2c3e50',
        '--shadow-color': 'rgba(0, 0, 0, 0.3)',
      },
      dark: {
        '--bg-color': '#222831',
        '--text-color': '#eeeeee',
        '--primary-color': '#14967a',
        '--secondary-color': '#233140',
        '--shadow-color': 'rgba(255, 255, 255, 0.3)',
      }
    },
    theme5: {
      light: {
        '--bg-color': '#f5f5f5',
        '--text-color': '#2f3640',
        '--primary-color': '#e67e22',
        '--secondary-color': '#2980b9',
        '--shadow-color': 'rgba(0, 0, 0, 0.15)',
      },
      dark: {
        '--bg-color': '#121212',
        '--text-color': '#ecf0f1',
        '--primary-color': '#c45d0e',
        '--secondary-color': '#1f5b84',
        '--shadow-color': 'rgba(255, 255, 255, 0.15)',
      }
    },
    theme6: {
      light: {
        '--bg-color': '#ffffff',
        '--text-color': '#2c3e50',
        '--primary-color': '#ff7979',
        '--secondary-color': '#6ab04c',
        '--shadow-color': 'rgba(0, 0, 0, 0.2)',
      },
      dark: {
        '--bg-color': '#2c3e50',
        '--text-color': '#ecf0f1',
        '--primary-color': '#cc6161',
        '--secondary-color': '#4d8a3a',
        '--shadow-color': 'rgba(255, 255, 255, 0.2)',
      }
    },
    theme7: {
      light: {
        '--bg-color': '#f4f4f4',
        '--text-color': '#3a3a3a',
        '--primary-color': '#3498db',
        '--secondary-color': '#8e44ad',
        '--shadow-color': 'rgba(0, 0, 0, 0.25)',
      },
      dark: {
        '--bg-color': '#2d3436',
        '--text-color': '#dfe6e9',
        '--primary-color': '#1e7ab5',
        '--secondary-color': '#6a2d7a',
        '--shadow-color': 'rgba(255, 255, 255, 0.25)',
      }
    },
    theme8: {
      light: {
        '--bg-color': '#fdfbfb',
        '--text-color': '#2d4059',
        '--primary-color': '#ff5722',
        '--secondary-color': '#607d8b',
        '--shadow-color': 'rgba(0, 0, 0, 0.2)',
      },
      dark: {
        '--bg-color': '#1c1c1c',
        '--text-color': '#eeeeee',
        '--primary-color': '#cc461a',
        '--secondary-color': '#4d5c64',
        '--shadow-color': 'rgba(255, 255, 255, 0.2)',
      }
    },
    theme9: {
      light: {
        '--bg-color': '#f6f6f6',
        '--text-color': '#1b262c',
        '--primary-color': '#0f4c75',
        '--secondary-color': '#3282b8',
        '--shadow-color': 'rgba(0, 0, 0, 0.3)',
      },
      dark: {
        '--bg-color': '#1b262c',
        '--text-color': '#bbe1fa',
        '--primary-color': '#0c3a5d',
        '--secondary-color': '#1f5b84',
        '--shadow-color': 'rgba(255, 255, 255, 0.3)',
      }
    },
    theme10: {
      light: {
        '--bg-color': '#f8f9fa',
        '--text-color': '#343a40',
        '--primary-color': '#ff9f43',
        '--secondary-color': '#576574',
        '--shadow-color': 'rgba(0, 0, 0, 0.25)',
      },
      dark: {
        '--bg-color': '#212529',
        '--text-color': '#ced4da',
        '--primary-color': '#d6802a',
        '--secondary-color': '#404b5a',
        '--shadow-color': 'rgba(255, 255, 255, 0.25)',
      }
    },
    theme11: {
      light: {
        '--bg-color': '#ffffff',
        '--text-color': '#4a4a4a',
        '--primary-color': '#8e44ad',
        '--secondary-color': '#34495e',
        '--shadow-color': 'rgba(0, 0, 0, 0.2)',
      },
      dark: {
        '--bg-color': '#2f2f2f',
        '--text-color': '#ecf0f1',
        '--primary-color': '#6c3483',
        '--secondary-color': '#2c3e50',
        '--shadow-color': 'rgba(255, 255, 255, 0.2)',
      }
    },
    theme12: {
      light: {
        '--bg-color': '#e8f8f5',
        '--text-color': '#1c2833',
        '--primary-color': '#48c9b0',
        '--secondary-color': '#154360',
        '--shadow-color': 'rgba(0, 0, 0, 0.3)',
      },
      dark: {
        '--bg-color': '#17202a',
        '--text-color': '#d5dbdb',
        '--primary-color': '#309b8a',
        '--secondary-color': '#0e2a3a',
        '--shadow-color': 'rgba(255, 255, 255, 0.3)',
      }
    },
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const storedBg = localStorage.getItem('bg');
    if (storedTheme) {
      setTheme(storedTheme);
    }
    if (storedBg) {
      setBg(storedBg);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (bg === 'custom') {
      root.style.setProperty('--bg-color', customBgColor);
      root.style.setProperty('--text-color', customTextColor);
      root.style.setProperty('--primary-color', customPrimaryColor);
      root.style.setProperty('--secondary-color', customSecondaryColor);
    } else {
      Object.entries(themes[theme][bg]).forEach(([variable, value]) => {
        root.style.setProperty(variable, value);
      });
    }

    localStorage.setItem('theme', theme);
    localStorage.setItem('bg', bg);
  }, [theme, bg, customBgColor, customTextColor, customPrimaryColor, customSecondaryColor]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleBgChange = (event) => {
    setBg(event.target.value);
  };

  const handleCustomColorChange = (event, setColor) => {
    setColor(event.target.value);
  };

  return (
    <div className="p-6  max-w-full h-3/4 flex flex-col mx-auto bg-[--bg-color] rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-[--text-color] mb-4 text-center sm:text-left">
        🎨 Theme Selector
      </h2>
  
      {/* Theme Selector */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-[--text-color] mb-2 text-center sm:text-left">
          Select a Theme:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 justify-center overflow-y-auto max-h-[75vh]">
  {Object.keys(themes).map((themeName) => (
    <button
      key={themeName}
      onClick={() => setTheme(themeName)}
      className={`py-2 px-4 rounded-md border-2 ${
        theme === themeName
          ? 'border-[--primary-color] text-[--secondary-color]'
          : 'border-gray-300 text-[--text-color] hover:border-[--primary-color] hover:text-[--secondary-color]'
      }`}
    >
      {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
    </button>
  ))}
</div>

      </div>
  
      {/* Background Selector */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-[--text-color] mb-2 text-center sm:text-left">
          Select a Background:
        </h3>
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          {['light', 'dark', 'custom'].map((option) => (
            <button
              key={option}
              onClick={() => setBg(option)}
              className={`py-2 px-4 rounded-md border-2 ${
                bg === option
                  ? 'border-[--primary-color] text-[--secondary-color]'
                  : 'border-gray-300 text-[--text-color] hover:border-[--primary-color] hover:text-[--secondary-color]'
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>
  
      {/* Custom Colors */}
      {bg === 'custom' && (
        <div>
          <h3 className="text-md font-semibold text-[--text-color] mb-4 text-center sm:text-left">
            Customize Colors:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="customBgColor"
                className="block text-sm font-medium text-[--text-color]"
              >
                Background Color:
              </label>
              <input
                type="color"
                id="customBgColor"
                value={customBgColor}
                onChange={(event) => handleCustomColorChange(event, setCustomBgColor)}
                className="mt-1 w-full h-10 p-0 border-none cursor-pointer"
              />
            </div>
            <div>
              <label
                htmlFor="customTextColor"
                className="block text-sm font-medium text-[--text-color]"
              >
                Text Color:
              </label>
              <input
                type="color"
                id="customTextColor"
                value={customTextColor}
                onChange={(event) => handleCustomColorChange(event, setCustomTextColor)}
                className="mt-1 w-full h-10 p-0 border-none cursor-pointer"
              />
            </div>
            <div>
              <label
                htmlFor="customPrimaryColor"
                className="block text-sm font-medium text-[--text-color]"
              >
                Primary Color:
              </label>
              <input
                type="color"
                id="customPrimaryColor"
                value={customPrimaryColor}
                onChange={(event) => handleCustomColorChange(event, setCustomPrimaryColor)}
                className="mt-1 w-full h-10 p-0 border-none cursor-pointer"
              />
            </div>
            <div>
              <label
                htmlFor="customSecondaryColor"
                className="block text-sm font-medium text-[--text-color]"
              >
                Secondary Color:
              </label>
              <input
                type="color"
                id="customSecondaryColor"
                value={customSecondaryColor}
                onChange={(event) => handleCustomColorChange(event, setCustomSecondaryColor)}
                className="mt-1 w-full h-10 p-0 border-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default ThemeSelector;


