export const secrets ={ 
    dev : {
        username : 'standard_user',
        password : 'secret_sauce'
    },

    uat : { 
        username : 'uat-username',
        password : 'uat-password'
    }
};

export const getSecrets = (env : 'dev' |'uat')=>{
    return secrets[env] || secrets['dev'];
};