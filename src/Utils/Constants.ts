//consider to get it from server
export const paths = {
  dashboard: { label: "Dashboard", path: "dashboard", roles: null },
  details: { label: "Settings Details", path: "details", roles: ["admin", "manager"] },
  api: { label: "API", path: "api", roles: ["admin", "manager"] },
  feedback: { label: "Feedback", path: "feedback", roles: null },
  howTo: { label: "How TO", path: "howTo", roles: null },
  changeLog: { label: "Change Log", path: "changeLog", roles: ["admin"] },
  video: { label: "Video Guide", path: "video", roles: null },
};

export const responsiveBreakPoints = {
  sm: 576,
};
