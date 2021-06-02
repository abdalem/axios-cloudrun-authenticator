<!-- <p align="center"><img src="logo.png" /></p> -->

<h1 align="center"> Axios Cloud Run Authenticator </h1>

<p align="center"> Service-to-service authentification for your Cloud Run instances </p>

<hr/>

<p><b>axios-cloudrun-authenticator</b> allow you to securize your Cloud Run instances by managing authentication between them. Be sure to follow the first point in <a href="https://cloud.google.com/run/docs/authenticating/service-to-service">Cloud Run Docs > Authenticating service-to-service</a>.</p>

<!-- <h3> List of features </h3>

<ul>
  <li>Casing to snakecase</li>
  <li>Casing to camelcase</li>
</ul> -->

<!-- <h3> Demo </h3> -->

<!-- <a href="#"> Link to Demo </a> -->

<h3> Demo Code </h3>

```ts
import axiosCloudRunAuth from "axios-cloudrun-authenticator";
import axios from "axios";

const instance = axios.create(/*axiosOptions*/);
axiosCloudRunAuth(
  instance,
  serviceUrl //optionnal, default to origin of instance.defaults.baseURL, e.g.: https://myinstance.a.run.app if baseURL is https://myinstance.a.run.app or https://myinstance.a.run.app/path
);
```

<h3> Download & Installation </h3>

```shell
$ npm i axios-cloudrun-authenticator
```

<h3>Contributing</h3>
Keep it simple. Keep it minimal. Don't put every single feature just because you can.

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>abdalem</li>
</ul>

<h3>License</h3>

This project is licensed under the ISC License
