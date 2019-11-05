module.exports = {
    apps: [{
        name: 'Test',
        script: './app.js',
        // cwd: './',//当前工作路径
        node_args: "-harmony",
        watch: [
            //监控这些目录的变化，一旦变化立即重启
            'src',
            'build'
        ],
        ignore_watch: [
            // 忽视这些目录的变化
            'node_modules',
            'logs',
            'public',
        ],
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        },
        out_file: './logs/out.log', // 普通日志路径
        error_file: './logs/err.log', // 错误日志路径
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        instance:'max'
    }],
    deploy: {
        production: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};
