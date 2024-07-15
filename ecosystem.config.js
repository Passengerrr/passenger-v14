const { Settings } = require("./Global/Settings/_system.json")

module.exports = {
  apps: [
    {
      name: `${Settings.PM2.Server}-Moderation`,
      namespace: Settings.PM2.Owner,
      script: 'Global.Moderation.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Moderation"
    },
    {
      name: `${Settings.PM2.Server}-Executive`,
      namespace: Settings.PM2.Owner,
      script: 'Global.Executive.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Executive"
    },
    {
      name: `${Settings.PM2.Server}-Voucher`,
      namespace: Settings.PM2.Owner,
      script: 'Global.Voucher.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Voucher"
    },
    {
      name: `${Settings.PM2.Server}-Guard1`,
      namespace: Settings.PM2.Owner,
      script: 'Global.Guard1.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Guard_I"
    },
    {
      name: `${Settings.PM2.Server}-Guard2`,
      namespace: Settings.PM2.Owner,
      script: 'Global.Guard2.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Server/Guard_II"
    }
  ]
};