(async () => {
    require("./database");
    await new Promise((resolve) => setTimeout(resolve, 15000));
    require("./app");
    
})()