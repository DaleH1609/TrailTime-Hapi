export const trailsController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      return h.view("Trail", { title: "Make a Donation", user: loggedInUser });
    },
  },
  report: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      return h.view("Report", {
        title: "Donations to Date",
        user: loggedInUser,
      });
    },
  },
  trail: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};
