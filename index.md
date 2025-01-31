---
layout: default
title: Mi sitio web
---

# Bienvenido a mi sitio web

Este es mi sitio web creado con Jekyll y alojado en GitHub Pages. Aquí puedes conocer más sobre mis habilidades y experiencia como **DevOps Engineer**.

## Sobre mí

Soy un DevOps Engineer apasionado con experiencia en la implementación de soluciones eficientes utilizando herramientas como **Ansible**, **Terraform**, **Docker** y **Kubernetes**. Tengo un sólido conocimiento en prácticas de CI/CD, habiendo trabajado con plataformas como **Bitbucket**, **GitLab** y **Jenkins**. 

Mi experiencia abarca múltiples entornos de nube, incluyendo **AWS** y **GCP**, donde he desarrollado y optimizado infraestructuras escalables y seguras.

## Habilidades

- **Automatización**: Ansible, Terraform
- **Contenedores**: Docker, Kubernetes
- **CI/CD**: Bitbucket, GitLab, Jenkins
- **Nubes Públicas**: AWS, GCP
- **Monitoreo y Logging**: Prometheus, Grafana

## Experiencia

He trabajado en proyectos que involucran la creación de pipelines de CI/CD, la gestión de configuraciones y la orquestación de contenedores. Mis proyectos incluyen:

- Implementación de infraestructura como código (IaC) utilizando Terraform.
- Automatización del despliegue de aplicaciones con Ansible.
- Configuración de entornos de desarrollo y producción en AWS y GCP.

## Certificaciones

Mis certificaciones incluyen:

- [AWS Certified Solutions Architect](https://aws.amazon.com/certification/certified-solutions-architect-associate/)
- [Google Cloud Certified - Professional Cloud Architect](https://cloud.google.com/certification/cloud-architect)
- [Docker Certified Associate](https://www.docker.com/certification/dca)

## Conéctate conmigo

Puedes encontrarme en LinkedIn: [Tu Perfil de LinkedIn](https://www.linkedin.com/in/tu-perfil)

## Publicaciones recientes

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
