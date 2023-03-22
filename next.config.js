/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  theme: {
    extend: {
      images: {
        domains: ["images.unsplash.com", "openweathermap.org"],
      },
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2676')",
      },
    },
  },
};
