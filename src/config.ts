function getUrls() {
  const safety = process.env.REACT_APP_SAFETY || "false";

  const pattern = {
    false: {
      ws: "ws://#pattern#",
      http: "http://#pattern#",
    },
    true: {
      ws: "wss://#pattern#",
      http: "https://#pattern#",
    },
  };

  return pattern[safety];
}

export const HTTP_URL = getUrls().http.replace(
  "#pattern#",
  process.env.REACT_APP_HOST
);

export const WS_URL = getUrls().ws.replace(
  "#pattern#",
  process.env.REACT_APP_HOST
);
