# Netspaces

```
Sirve para agupar varios elementos. Por defecto todos estan en el netspace default.
```

### Para listar los namespaces

```
kubectl get ns
```

### Cuando se crean pods por ejemplo con deployment dentro de un netspace y se quiere ver el deployment creado dentro del netspace, este ese el ejemplo: kubectl get deploy -n nsp-uat

```
kubectl get deploy -n <nombre del netspace>
```

### Cuando se crean pods dentro de un netspace y se quiere ver los pods dentro del netspace, este ese el ejemplo: kubectl get po -n nsp-uat

```
kubectl get po -n <nombre del netspace>
```

