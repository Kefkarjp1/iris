module.exports = {
    apps: [
        {
            name: 'IRIS',
            script: 'bin/run.js',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],
    deploy: {
        production: {
            user: 'node',
<<<<<<< HEAD
            host: '<YOUR SERVER IP>',
            ref: 'origin/master',
            repo: 'https://github.com/<YOUR_REPO_URL>',
=======
            host: '35.160.143.122',
            ref: 'origin/master',
            repo: 'https://github.com/Kefkarjp1/iris.git',
>>>>>>> 657920731994dffef02890ce96d5e8d264d6d630
            path: '/srv/production',
            'post-deploy': 'cp ../.env ./ && npm install && pm2 startOrRestart ecosystem.config.js --env production'
        }
    }
};