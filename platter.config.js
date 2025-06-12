const configs = {
  site1: {
    theme: { primary: "#0084FF" },
  },
  site2: {
    theme: { primary: "#8A64CF" },
  },
  site3: {
    theme: { primary: "#803B1A" },
  },
};

module.exports = configs[process.env.NEXT_PUBLIC_CONFIG];
