//consider to get it from server
export const paths = {
  dashboard: { label: "Dashboard", path: "dashboard", roles: null },
  settingsDetails: { label: "Settings Details", path: "settingsDetails", roles: ["admin", "manager"] },
  api: { label: "API", path: "api", roles: ["admin", "manager"] },
  howTo: { label: "How TO", path: "howTo", roles: null },
  changeLog: { label: "Change Log", path: "changeLog", roles: null },
};

export const responsiveBreakPoints = {
  sm: 576,
};
