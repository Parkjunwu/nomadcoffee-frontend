module.exports = {
  client:{
    service:{
      includes:["./src/**/*.{ts,tsx}"],
      tagName:"gql",
      name:"nomadcoffee-backend",
      url:"http://localhost:4000/graphql",
    }
  }
}