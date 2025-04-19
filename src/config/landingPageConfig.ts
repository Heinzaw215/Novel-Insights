const landingContent = {
  title: `Discover Your Next Favorite Book`,
    subtitle: `Dive into insightful reviews, uncover hidden gems, and explore the world of literature like never before.`,
}

export const landingConfig = {
  default: {
    ...landingContent,
    style: {
      titleColor: "text-yellow-400",
      subtitleColor: "text-yellow-200",
      backgroundColor: "bg-gray-100",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    }
  },
  dark: {
    ...landingContent,
    styles: {
      titleColor: "text-white",
      subtitleColor: "text-gray-400",
      backgroundColor: "bg-gray-900",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    },
  },
}