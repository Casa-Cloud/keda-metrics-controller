# keda-matrics-controller
Exposes custom metrics and allows updating metric values through REST APIs.

## Install Code dependency
```
npm install
```

## Compile Code 
```
grunt default
```

## Create Image
```
docker build -t casacloud/keda-matrics-controller:v1.0.0 .
```

## Run Container based on image
docker run -p 9001:9001 casacloud/keda-matrics-controller:v1.0.0