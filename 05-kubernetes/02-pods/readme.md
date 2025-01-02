# Pod

### Para ejecutar un manifiesto

```
kubectl apply -f 01-pod.yaml
```

### Para listar los pods

```
kubectl get pods
kubectl get po
```

### Para obtener información de un pod

```
kubectl get po <nombre del pod> -o yaml
kubectl get po <nombre del pod> -o json
```

### Para obtener una descripción del pod

```
kubectl describe po <nombre del pod>
```

### Para leer el log de un pod

```
kubectl logs <nombre del pod>
```

### Para eliminar un pod

```
kubectl delete po <nombre del pod>
```

### Para crear un pod a partir de un manifiesto (un .yaml)

```
kubectl apply -f <nombre del pod>
```

### Para eliminar desde un manifiesto

```
kubectl delete -f <nombre del manifiesto>
```

### Para ver el logs de un pod con más de un contenedor

```
kubectl logs <nombre del pod> -c <nombre del contenedor>
```

### Para exponer y acceder el puerto de un contenedor a traves de un pod, ya que el pod aisla la conexiones. Ejemplo: kubectl port-forward server-nginx 7000:80 

```
kubectl port-forward <nombre del pod> "puerto a exponer":"puerto del contenedor"
```