FROM nginx:alpine

# Remove default nginx website (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy the Vite build output (dist) to nginx html folder
COPY dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

