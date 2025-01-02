# Services

```
Los servicios no crean pods, lo que hace es buscar pods.
LOs servicios de tipo clusterIP son internos, no se puede acceder a ellos desde afuera.
LOs servicios de tipo NodePort expone un puerto fuera del cluster y se le conoce como nodePort. Usualmente son puertos altos. Cuando se crea un servicio tipo NodePort, internamente se crea uno de tipo clusterIP y se conectan. El servicio clusterIP es el que internamente se conecta con los pods.

targetPort: es el puerto el pod
port: es el puerto del servicio tipo clusterIP
nodePort: es el puerto del servicio tipo nodePort
```

### Para listar los servicios

```
kubectl get svc
```

### Para acceder exponer el puerto de un servicio. Ejemplo: kubectl port-forward svc/svc-frontend 7000:9600

```
kubectl port-forward svc/<nombre del servicio> "puerto que se expone":"puerto del servicio"
```