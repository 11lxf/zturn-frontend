# 使用Nginx作为生产环境镜像
FROM nginx:1.22.1

# 设置工作目录
WORKDIR /app

# 使用 ARG 指定构建时的环境变量
ARG SERVICE_NAME
ARG VERSION

RUN curl -sLO https://nexus.shawf.me/repository/raw-hosted/vue-build/$SERVICE_NAME/$SERVICE_NAME-$VERSION.tar.gz
RUN tar -zxvf $SERVICE_NAME-$VERSION.tar.gz

# 复制构建后的文件到Nginx的默认目录
COPY dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# nginx默认启动是以守护进程来运行的，容器要能持续运行，必须有且仅有一个前台进程，因此指定daemon off
CMD ["nginx", "-g", "daemon off;"]