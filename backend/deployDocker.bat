@echo off
set arg1=%1
shift
shift
IF defined arg1 (docker build . -t lowa/futsal-backend:latest && docker push lowa/futsal-backend:latest && docker tag lowa/futsal-backend:latest lowa/futsal-backend:%arg1% && docker push lowa/futsal-backend:%arg1% && git tag "docker-%arg1%"
) 
else (
    docker build . -t lowa/futsal-backend:latest && docker push lowa/futsal-backend:latest
)
@REM IF defined arg2 (echo "el segundo parametro es %arg2%") else (echo "UNDEFINED")