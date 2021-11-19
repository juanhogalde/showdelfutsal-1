@echo off
set arg1=%1
shift
shift
IF defined arg1 (docker build . -t lowa/futsal-front:latest && docker push lowa/futsal-front:latest && docker tag lowa/futsal-front:latest lowa/futsal-front:%arg1% && docker push lowa/futsal-front:%arg1% && git tag "docker-%arg1%") else (docker build . -t lowa/futsal-front:latest && docker push lowa/futsal-front:latest)