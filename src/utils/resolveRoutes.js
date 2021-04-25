const resolveRoutes = (route) => {
  if (route.split("?")[0] == "id") {
    return "/:id";
  } else if (route === "/") {
    return "/";
  }
  return `/${route}`;
};

export default resolveRoutes;
