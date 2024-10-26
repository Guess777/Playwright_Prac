type Environment ={
    baseUrl:string;
}

const dev: Environment ={
    baseUrl : 'https://www.saucedemo.com/'
}

const uat: Environment ={
    baseUrl : 'https://rahulshettyacademy.com/seleniumPractise/#/'
}

const environments = {dev, uat}
export const getEnvironment = (env : 'dev'|'uat')=> {
    return environments[env] || dev
}