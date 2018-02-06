#/bin/bash
docker-compose -f docker-compose-build.yml up -d &&
docker-compose -f docker-compose-prod.yml build &&
docker-compose -f docker-compose-prod.yml up -d
